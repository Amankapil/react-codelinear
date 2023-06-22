import React, { useEffect, useState } from 'react';
import './main.css'; // Import the CSS file for custom cursor styles

const CustomCursor = () => {
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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOutDocument);
    document.addEventListener('mouseenter', handleMouseEnterDocument);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOutDocument);
      document.removeEventListener('mouseenter', handleMouseEnterDocument);
    };
  }, []);

  return (
    <div
      className={`cursor${isOutsideWindow ? ' outside' : ''}${
        isVisible ? ' visible' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
