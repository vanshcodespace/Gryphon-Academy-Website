import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

function getDurationMs(speed) {
  const parsed = Number.parseFloat(String(speed));
  return Number.isFinite(parsed) ? parsed * 1000 : 50000;
}

export default function useDraggableMarquee({ onDragStart, reverse = false, speed = "50s" } = {}) {
  const trackRef          = useRef(null);
  const autoFrameRef      = useRef(null);
  const momentumFrameRef  = useRef(null);
  const lastFrameTimeRef  = useRef(null);
  const lastPointRef      = useRef({ x: 0, time: 0 });
  const offsetRef         = useRef(0);
  const velocityRef       = useRef(0);
  const isDraggingRef     = useRef(false);
  const isMomentumActive  = useRef(false);
  // ─── NEW: visibility flag so rAF pauses when off-screen ───────────
  const isVisibleRef      = useRef(false);

  const getLoopWidth = useCallback(() => {
    const w = trackRef.current?.scrollWidth || 0;
    return w ? w / 4 : 0;
  }, []);

  const normalizeOffset = useCallback(
    (next) => {
      const lw = getLoopWidth();
      if (!lw) return next;
      return ((next % lw) + lw) % lw - lw;
    },
    [getLoopWidth],
  );

  const applyOffset = useCallback(
    (next) => {
      const norm = normalizeOffset(next);
      offsetRef.current = norm;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${norm}px, 0, 0)`;
      }
    },
    [normalizeOffset],
  );

  const stopMomentum = useCallback(() => {
    if (momentumFrameRef.current) {
      window.cancelAnimationFrame(momentumFrameRef.current);
      momentumFrameRef.current = null;
    }
    isMomentumActive.current = false;
  }, []);

  const startMomentum = useCallback(() => {
    const step = () => {
      velocityRef.current *= 0.94;
      applyOffset(offsetRef.current + velocityRef.current * 16);
      if (Math.abs(velocityRef.current) > 0.02) {
        momentumFrameRef.current = window.requestAnimationFrame(step);
        return;
      }
      momentumFrameRef.current = null;
      isMomentumActive.current = false;
      lastFrameTimeRef.current = null;
    };
    isMomentumActive.current = true;
    momentumFrameRef.current = window.requestAnimationFrame(step);
  }, [applyOffset]);

  // ── Pointer handlers ─────────────────────────────────────────────
  const handlePointerDown = useCallback(
    (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      stopMomentum();
      onDragStart?.();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      isDraggingRef.current    = true;
      lastFrameTimeRef.current = null;
      lastPointRef.current     = { x: event.clientX, time: performance.now() };
      velocityRef.current      = 0;
    },
    [onDragStart, stopMomentum],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDraggingRef.current) return;
      const now       = performance.now();
      const last      = lastPointRef.current;
      const deltaX    = event.clientX - last.x;
      const deltaTime = Math.max(now - last.time, 16);
      velocityRef.current  = deltaX / deltaTime;
      lastPointRef.current = { x: event.clientX, time: now };
      applyOffset(offsetRef.current + deltaX);
    },
    [applyOffset],
  );

  const handlePointerUp = useCallback(
    (event) => {
      if (!isDraggingRef.current) return;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      isDraggingRef.current = false;
      if (Math.abs(velocityRef.current) > 0.08) {
        startMomentum();
      } else {
        lastFrameTimeRef.current = null;
      }
    },
    [startMomentum],
  );

  // Set initial position
  useLayoutEffect(() => {
    applyOffset(reverse ? -getLoopWidth() : 0);
  }, [applyOffset, getLoopWidth, reverse]);

  // ── Auto-scroll rAF — pauses when off-screen ─────────────────────
  useEffect(() => {
    const durationMs = getDurationMs(speed);

    // IntersectionObserver: start/stop rAF based on visibility
    const container = trackRef.current?.parentElement;
    const observer  = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          // Reset time so there's no jump after a long pause
          lastFrameTimeRef.current = null;
        }
      },
      { threshold: 0 },
    );
    if (container) observer.observe(container);

    const step = (now) => {
      // Skip frames when not visible — saves CPU/GPU on low-end devices
      if (!isVisibleRef.current) {
        autoFrameRef.current = window.requestAnimationFrame(step);
        return;
      }

      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = now;
      }

      const deltaTime = now - lastFrameTimeRef.current;
      lastFrameTimeRef.current = now;

      if (!isDraggingRef.current && !isMomentumActive.current) {
        const lw = getLoopWidth();
        if (lw) {
          const dir = reverse ? 1 : -1;
          applyOffset(offsetRef.current + (lw / durationMs) * deltaTime * dir);
        }
      }

      autoFrameRef.current = window.requestAnimationFrame(step);
    };

    autoFrameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (autoFrameRef.current) window.cancelAnimationFrame(autoFrameRef.current);
      observer.disconnect();
      stopMomentum();
      lastFrameTimeRef.current = null;
    };
  }, [applyOffset, getLoopWidth, reverse, speed, stopMomentum]);

  return {
    trackRef,
    dragHandlers: {
      onPointerDown:  handlePointerDown,
      onPointerMove:  handlePointerMove,
      onPointerUp:    handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  };
}
