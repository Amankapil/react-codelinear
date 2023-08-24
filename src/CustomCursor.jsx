import React, { useEffect, useState } from "react";
import "./main.css"; // Import the CSS file for custom cursor styles

const CustomCursor = ({
  isButtonHovered,
  isimgHovered,
  isdrag,
  handleimgHover,
  handledrag,
  handleButtonHover,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOutsideWindow, setIsOutsideWindow] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOutDocument = (e) => {
      if (e.relatedTarget === null) {
        setIsOutsideWindow(true);
      }
    };

    const handleMouseEnterDocument = () => {
      setIsOutsideWindow(false);
      setIsVisible(true);
    };

    const handleScroll = () => {
      handleButtonHover(false); // Reset button click state when scrolling
      handleimgHover(false); // Reset button click state when scrolling
    };
    const handleClick = () => {
      handleButtonHover(false); // Reset button click state when scrolling
      handleimgHover(false); // Reset button click state when scrolling
      handledrag(false); // Reset button click state when scrolling
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOutDocument);
    document.addEventListener("mouseenter", handleMouseEnterDocument);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOutDocument);
      document.removeEventListener("mouseenter", handleMouseEnterDocument);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={`cursor${isOutsideWindow ? " outside" : ""}${
        isVisible ? " visible" : ""
      }${isdrag ? " dragg" : ""}${isButtonHovered ? " button-hovered" : ""}${
        isimgHovered ? " img-hovered" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
