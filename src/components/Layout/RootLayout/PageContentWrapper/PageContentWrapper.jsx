import { useState, useRef, useLayoutEffect } from "react";

function PageContentWrapper({ children }) {
  const [contentMinHeight, setContentMinHeight] = useState(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const updateContentMinHeight = () => {
      const { top } = contentRef.current.getBoundingClientRect();

      setContentMinHeight({
        minHeight: `${window.innerHeight - top}px`
      });
    };

    if (!contentMinHeight) {
      updateContentMinHeight();
    }

    window.addEventListener("resize", updateContentMinHeight);
    return () => window.removeEventListener("resize", updateContentMinHeight);
  }, [contentMinHeight]);

  return <div>{children}</div>;
}

export default PageContentWrapper;
