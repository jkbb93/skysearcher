import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";
import Button from "../Button";
import styles from "./GraphicPromo.module.css";

function GraphicPromo({
  src,
  alt,
  kicker,
  headline,
  strapline,
  buttonText,
  alignment = "flex-start",
  mobileAlignment: passedMobileAlignment,
  imgBrightness = 1,
  imgObjectPosition = "initial",
  onClick: handleClick,
  buttonColorScheme
}) {
  const mediaMatches = useMediaQuery(breakpoints.md);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick(event);
    }
  };

  const getAccessibilityAttributes = () => {
    if (typeof handleClick === "function") {
      return {
        onKeyDown: handleKeyDown,
        role: "button",
        tabIndex: 0
      };
    }

    return {};
  };

  const getAlignment = () => {
    const mobileAlignment = passedMobileAlignment || alignment;
    return mediaMatches ? alignment : mobileAlignment;
  };

  const getButtonColorSchemeClass = () => {
    switch (buttonColorScheme) {
      case "light": {
        return styles["button-light"];
      }
      case "dark": {
        return styles["button-dark"];
      }
      default:
        return "";
    }
  };

  return (
    <div
      className={styles.promo}
      style={{
        justifyContent: getAlignment()
      }}
      onClick={handleClick}
      {...getAccessibilityAttributes()}
    >
      <img
        src={src}
        alt={alt}
        style={{
          filter: `brightness(${imgBrightness})`,
          objectPosition: imgObjectPosition
        }}
      />
      <div
        style={{ color: src ? "#ffffff" : "inherit" }}
        className={styles.content}
      >
        {kicker && <span>{kicker}</span>}
        {headline && <h2>{headline}</h2>}
        {strapline && <p>{strapline}</p>}
        {mediaMatches && buttonText && (
          <Button className={`${styles.button} ${getButtonColorSchemeClass()}`}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default GraphicPromo;
