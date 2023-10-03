import { useEffect } from "react";

/*
  Explicitly checking for click's clientX/Y being outside of node's DOMRect     
  here, instead of using Node.contains(event.target). This is because 
  contains() does not always consider SVGs to be contained by HTML elements 
  due to different namespaces, so I feel this is safer
*/

function useExternalClickHandler(nodeRef, callback) {
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const handleExternalClick = (event) => {
      const { clientX, clientY } = event;
      const nodeRect = node.getBoundingClientRect();

      // Check if click was within nodeRect
      if (
        clientX < nodeRect.left ||
        clientX > nodeRect.right ||
        clientY < nodeRect.top ||
        clientY > nodeRect.bottom
      ) {
        callback();
      }
    };

    window.addEventListener("pointerdown", handleExternalClick);
    return () => {
      window.removeEventListener("pointerdown", handleExternalClick);
    };
  }, [nodeRef, callback]);
}

export default useExternalClickHandler;
