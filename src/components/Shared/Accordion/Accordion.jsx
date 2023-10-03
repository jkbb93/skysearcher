import { useState, useId, useRef, useEffect } from "react";
import { ReactComponent as AngleDownIcon } from "../../../assets/icons/angle-down-solid.svg";
import styles from "./Accordion.module.css";

function Accordion({
  children,
  heading,
  isOpen: passedIsOpen = false,
  transitionDuration = 220
}) {
  const [isOpen, setIsOpen] = useState(passedIsOpen);
  const [contentWrapperHeight, setContentWrapperHeight] = useState("0px");
  const [isMounted, setIsMounted] = useState(false);
  const contentWrapperId = useId();
  const contentRef = useRef(null);

  const handleToggle = () => {
    if (isOpen) {
      /*
       If the accordion was opened, the height will be auto from handleTransitionEnd.
       Need to set it to a discrete pixel value here to allow CSS transition
      */
      const { height } = contentRef.current.getBoundingClientRect();
      setContentWrapperHeight(`${height}px`);
    }

    setIsOpen((prev) => !prev);
  };

  const handleTransitionEnd = () => {
    /*
     Set height to auto here so that once opened,
     the content wrapper will resize flexibly based on its content
     */
    if (isOpen) {
      setContentWrapperHeight("auto");
    }
  };

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const { height } = contentRef.current.getBoundingClientRect();
      setContentWrapperHeight(`${height}px`);
    } else {
      setContentWrapperHeight("0px");
    }
  }, [isOpen]);

  useEffect(() => {
    /*
     Used to add CSS transition on content wrapper height only after
     first render - if we set the Accordion to start open,
     we don't want it to transition open on initial render
     */
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.toggler}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={contentWrapperId}
      >
        <span>{heading}</span>
        <div className={styles["icon-wrapper"]}>
          <AngleDownIcon
            style={{
              transform: `rotate(${isOpen ? -180 : 0}deg)`,
              transition: `transform ${transitionDuration}ms ease-out`
            }}
          />
        </div>
      </button>
      <div
        id={contentWrapperId}
        style={{
          height: contentWrapperHeight,
          transition: isMounted
            ? `height ${transitionDuration}ms ease-out`
            : null
        }}
        className={styles["content-wrapper"]}
        onTransitionEnd={handleTransitionEnd}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
