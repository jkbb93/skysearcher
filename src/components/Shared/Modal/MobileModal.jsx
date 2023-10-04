import { useState } from "react";
import useControlledState from "../../../hooks/useControlledState";
import MobileModalWindow from "./MobileModalWindow";

function MobileModal({
  renderToggler,
  renderModalContent,
  heading,
  isOpen: passedIsOpen,
  onToggle: onToggleCallback
}) {
  const [isOpen, setIsOpen] = useState(false);

  const setSyncedIsOpen = useControlledState({
    internalState: isOpen,
    setInternalState: setIsOpen,
    externalState: passedIsOpen,
    setExternalState: onToggleCallback
  });

  const toggle = () => setSyncedIsOpen((prev) => !prev);

  return (
    <>
      {renderToggler(toggle)}
      {isOpen && (
        <MobileModalWindow heading={heading} onClose={toggle}>
          {renderModalContent(toggle)}
        </MobileModalWindow>
      )}
    </>
  );
}

export default MobileModal;
