import { useEffect } from "react";
import clickIsWithinNode from "./clickIsWithinNode";

function useCloseOnExternalClick({ togglerNode, menuNode, isOpen, setIsOpen }) {
  useEffect(() => {
    if (!isOpen || !menuNode || !togglerNode) return;

    const handleExternalClick = (event) => {
      const isTogglerClick = clickIsWithinNode(event, togglerNode);
      const isMenuClick = clickIsWithinNode(event, menuNode);

      if (!isTogglerClick && !isMenuClick) {
        /* 
          Do not close menu if click was within toggler, because
          toggler clicks are handled with onClick and toggleMenu
        */
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handleExternalClick);
    return () => {
      window.removeEventListener("pointerdown", handleExternalClick);
    };
  }, [togglerNode, menuNode, isOpen, setIsOpen]);
}

export default useCloseOnExternalClick;
