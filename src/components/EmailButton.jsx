import React, { useState } from 'react';

/**
 * Figma Master Component Set: Frame 75 (Component Set 421:192)
 * Variants: Property 1=Default (421:193) | Property 1=Variant2 (421:198 - copied state)
 */
export default function EmailButton({ email = "tanishka.mahajan@gmail.com", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const activeVariant = copied ? "Variant2" : "Default";

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email address"
      className={`content-stretch cursor-pointer flex flex-col gap-[10px] items-center relative w-[106px] group transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      data-node-id={copied ? "421:198" : "421:193"}
      data-name={`Property 1=${activeVariant}`}
    >
      <div className="h-[36px] relative shrink-0 w-full" data-node-id={copied ? "421:199" : "421:194"}>
        <div className="absolute h-[39px] left-[-2px] top-[-3px] w-[105px]">
          <div className="absolute inset-[-4.49%_-1.67%_-4.48%_-1.67%]">
            <img 
              alt="" 
              className="block max-w-none size-full object-contain" 
              src={copied ? "/assets/email-btn-copied.svg" : "/assets/email-btn-default.svg"} 
            />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-gochi leading-[normal] left-[46px] not-italic text-[#d8d1d1] group-hover:text-white text-[24px] text-center top-[3px] whitespace-nowrap transition-colors">
          email
        </p>
      </div>

      <p className={`[word-break:break-word] font-gochi leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white w-full transition-all duration-200 ${copied ? 'text-[#afcc0f] font-bold scale-110' : ''}`}>
        {copied ? 'copied!' : 'tap to copy'}
      </p>
    </button>
  );
}
