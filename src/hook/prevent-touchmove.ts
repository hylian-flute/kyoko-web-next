import { RefObject, useEffect } from "react";

export const usePreventTouchmove = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    element.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      element.removeEventListener("touchmove", onTouchMove);
    };
  }, [ref]);
};
