import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

function getDurationMs(speed) {
  const parsed = Number.parseFloat(String(speed));
  return Number.isFinite(parsed) ? parsed * 1000 : 50000;
}

export default function useDraggableMarquee({ onDragStart, reverse = false, speed = "50s" } = {}) {
  const trackRef = useRef(null);
  const autoFrameRef = useRef(null);
  const momentumFrameRef = useRef(null);
  const lastFrameTimeRef = useRef(null);
  const lastPointRef = useRef({ x: 0, time: 0 });
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isMomentumActiveRef = useRef(false);

  const getLoopWidth = useCallback(() => {
    const trackWidth = trackRef.current?.scrollWidth || 0;
    return trackWidth ? trackWidth / 4 : 0;
  }, []);

  const normalizeOffset = useCallback(
    (nextOffset) => {
      const loopWidth = getLoopWidth();
      if (!loopWidth) return nextOffset;
      return ((nextOffset % loopWidth) + loopWidth) % loopWidth - loopWidth;
    },
    [getLoopWidth],
  );

  const applyOffset = useCallback(
    (nextOffset) => {
      const normalizedOffset = normalizeOffset(nextOffset);
      offsetRef.current = normalizedOffset;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${normalizedOffset}px, 0, 0)`;
      }
    },
    [normalizeOffset],
  );

  const stopMomentum = useCallback(() => {
    if (momentumFrameRef.current) {
      window.cancelAnimationFrame(momentumFrameRef.current);
      momentumFrameRef.current = null;
    }
    isMomentumActiveRef.current = false;
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
      isMomentumActiveRef.current = false;
      lastFrameTimeRef.current = null;
    };

    isMomentumActiveRef.current = true;
    momentumFrameRef.current = window.requestAnimationFrame(step);
  }, [applyOffset]);

  const handlePointerDown = useCallback(
    (event) => {
      if (event.button !== undefined && event.button !== 0) return;

      stopMomentum();
      onDragStart?.();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      isDraggingRef.current = true;
      lastFrameTimeRef.current = null;
      lastPointRef.current = { x: event.clientX, time: performance.now() };
      velocityRef.current = 0;
    },
    [onDragStart, stopMomentum],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDraggingRef.current) return;

      const now = performance.now();
      const lastPoint = lastPointRef.current;
      const deltaX = event.clientX - lastPoint.x;
      const deltaTime = Math.max(now - lastPoint.time, 16);

      velocityRef.current = deltaX / deltaTime;
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

  useLayoutEffect(() => {
    applyOffset(reverse ? -getLoopWidth() : 0);
  }, [applyOffset, getLoopWidth, reverse]);

  useEffect(() => {
    const durationMs = getDurationMs(speed);

    const step = (now) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = now;
      }

      const deltaTime = now - lastFrameTimeRef.current;
      lastFrameTimeRef.current = now;

      if (!isDraggingRef.current && !isMomentumActiveRef.current) {
        const loopWidth = getLoopWidth();
        if (loopWidth) {
          const direction = reverse ? 1 : -1;
          applyOffset(offsetRef.current + (loopWidth / durationMs) * deltaTime * direction);
        }
      }

      autoFrameRef.current = window.requestAnimationFrame(step);
    };

    autoFrameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (autoFrameRef.current) {
        window.cancelAnimationFrame(autoFrameRef.current);
      }
      stopMomentum();
      lastFrameTimeRef.current = null;
    };
  }, [applyOffset, getLoopWidth, reverse, speed, stopMomentum]);

  return {
    trackRef,
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  };
}
