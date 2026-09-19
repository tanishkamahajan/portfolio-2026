import React from 'react';

/**
 * Figma Component: Badge (Group 26 / Frame 59)
 * Node ID: 421:85
 * Properties: border-dashed #acacac, bg-white, rounded-[10.31px], text #111010
 */
export default function Badge({ text = "UX Designer", rotate = "-4.82deg", className = "" }) {
  return (
    <div 
      className={`inline-block select-none ${className}`}
      style={{ transform: `rotate(${rotate})` }}
      data-node-id="421:85"
    >
      <div 
        className="bg-white border-[#acacac] border-[1.289px] border-dashed flex h-[31px] items-center justify-center pl-[27.06px] pr-[20.62px] py-[6.44px] rounded-[10.31px] shadow-sm transition-transform duration-200 hover:scale-105"
        data-node-id="421:86"
      >
        <span 
          className="font-neue font-medium text-[#111010] text-[16px] whitespace-nowrap"
          data-node-id="421:87"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
