import { useCallback, useEffect, useRef, useState } from "react";

let lastPointerPosition = null;

function getSpotlightFromPoint(element, clientX, clientY) {
  const rect = element.getBoundingClientRect();
  const isInside =
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom;

  if (!isInside || rect.width === 0 || rect.height === 0) {
    return null;
  }

  return {
    x: ((clientX - rect.left) / rect.width) * 100,
    y: ((clientY - rect.top) / rect.height) * 100,
    active: true,
  };
}

export default function useScrollAwareSpotlight() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const updateFromLastPointer = useCallback(() => {
    if (!sectionRef.current || !lastPointerPosition) return;

    const nextSpotlight = getSpotlightFromPoint(
      sectionRef.current,
      lastPointerPosition.clientX,
      lastPointerPosition.clientY,
    );

    setSpotlight((prev) => (nextSpotlight ? nextSpotlight : { ...prev, active: false }));
  }, []);

  const queueUpdate = useCallback(() => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      updateFromLastPointer();
    });
  }, [updateFromLastPointer]);

  const handlePointerMove = useCallback((event) => {
    lastPointerPosition = {
      clientX: event.clientX,
      clientY: event.clientY,
    };

    const nextSpotlight = getSpotlightFromPoint(event.currentTarget, event.clientX, event.clientY);
    if (nextSpotlight) {
      setSpotlight(nextSpotlight);
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  }, []);

  useEffect(() => {
    const handleWindowPointerMove = (event) => {
      lastPointerPosition = {
        clientX: event.clientX,
        clientY: event.clientY,
      };
    };

    window.addEventListener("pointermove", handleWindowPointerMove, { passive: true });
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [queueUpdate]);

  return {
    sectionRef,
    spotlight,
    spotlightHandlers: {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onWheel: queueUpdate,
    },
  };
}
