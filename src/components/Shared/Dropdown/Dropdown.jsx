import { useState, useCallback } from "react";
import { usePopper } from "react-popper";
import useControlledState from "../hooks/useControlledState";
import useCloseOnExternalClick from "./useCloseOnExternalClick";

function Dropdown({
  renderToggler,
  renderMenu,
  alignment,
  gap = 0,
  isOpen: passedIsOpen,
  onToggle: onToggleCallback
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const setSyncedIsOpen = useControlledState({
    internalState: isOpen,
    setInternalState: setIsOpen,
    externalState: passedIsOpen,
    setExternalState: onToggleCallback
  });

  const getMenuPlacement = () => {
    if (alignment === "left") return "bottom-start";
    if (alignment === "right") return "bottom-end";
    return "bottom";
  };

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: getMenuPlacement(),
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, gap] // [x, y]
        }
      }
    ]
  });

  const toggle = useCallback(() => {
    setSyncedIsOpen((prev) => !prev);
  }, [setSyncedIsOpen]);

  useCloseOnExternalClick({
    togglerNode: referenceElement,
    menuNode: popperElement,
    isOpen,
    setIsOpen: setSyncedIsOpen
  });

  const menuProps = {
    ref: setPopperElement,
    style: { width: "max-content", zIndex: 999, ...styles.popper },
    ...attributes.popper
  };

  return (
    <>
      {renderToggler(setReferenceElement, toggle, isOpen)}
      {isOpen && <div {...menuProps}>{renderMenu(toggle)}</div>}
    </>
  );
}

export default Dropdown;
