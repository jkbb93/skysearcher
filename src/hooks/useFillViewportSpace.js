import { useState, useRef, useLayoutEffect } from "react";

function useFillViewportSpace() {
  const [styles, setStyles] = useState(null);
  const nodeRef = useRef(null);

  useLayoutEffect(() => {
    if (!nodeRef.current) return;

    const setDimensions = () => {
      const {
        left,
        top,
        right,
        bottom
      } = nodeRef.current.getBoundingClientRect();

      setStyles({
        minWidth: `${window.innerWidth - left}px`,
        minHeight: `${window.innerHeight - top}px`
      });
    };

    if (!styles) {
      setDimensions();
    }

    window.addEventListener("resize", setDimensions);
    return () => window.removeEventListener("resize", setDimensions);
  }, [styles]);

  return [nodeRef, styles];
}

export default useFillViewportSpace;
