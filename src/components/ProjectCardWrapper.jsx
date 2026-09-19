import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ProjectCardWrapper({ children, className = '', ...props }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} ${isHovered ? 'hide-cursor' : ''}`}
      {...props}
    >
      {children}
      {isHovered && createPortal(
        <div
          className="fixed pointer-events-none z-[999999] top-0 left-0"
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
            willChange: 'transform',
          }}
        >
          <img
            src="/assets/custom-arrow-cursor.png"
            alt="Custom Cursor"
            className="w-14 h-14 object-contain select-none block"
          />
        </div>,
        document.body
      )}
    </div>
  );
}
