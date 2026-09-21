import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full flex flex-col items-center pt-8 sm:pt-10 md:pt-[65px] pb-12 md:pb-16 relative z-20">
      
      {/* ---------------- MOBILE HERO PHOTO COLLAGE (< 768px) ---------------- */}
      <div className="block md:hidden w-full px-4 overflow-visible">
        {/* Visual axis wrapper: perfectly centered in the viewport */}
        <div className="w-full flex flex-col items-center select-none">
          
          {/* 1. Mobile Tagline centered above portrait */}
          <motion.p 
            className="hero-mobile-tagline w-full font-gochi text-[#bfbebe] text-[clamp(11.5px,3.1vw,13px)] sm:text-[14px] text-center select-none pointer-events-none mb-3 sm:mb-4 px-2 whitespace-nowrap"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            I’ve been creating things my whole life. Now i make them count
          </motion.p>

          {/* 2. Central Portrait Anchor: All 4 surrounding photos and the sticker are positioned proportionally relative to THIS container */}
          <div 
            className="hero-mobile-collage relative mx-auto mt-2 mb-10 sm:mb-12"
            style={{
              width: 'clamp(190px, 50.8vw, 218px)',
              aspectRatio: '458.6 / 321.3',
            }}
          >
            
            {/* Central Portrait Image */}
            <motion.div 
              className="w-full h-full z-10 overflow-hidden shadow-lg relative"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <img 
                src="/assets/hero-main-portrait.png" 
                alt="Tanishka Mahajan" 
                className="w-full h-full object-cover pointer-events-none" 
              />
            </motion.div>

            {/* Photo 1: Top-Left (Dog photo) - Figma: upper-left of central portrait */}
            <motion.div 
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              style={{
                left: '-39.1%',
                top: '-5.97%',
                width: '36.9%',
                height: '62.74%',
              }}
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="transform rotate-[-7.53deg] shrink-0" style={{ width: '86.5%', height: '91.3%' }}>
                <div className="w-full h-full border-[2.5px] sm:border-[3px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.35)] bg-[#191818]">
                  <img 
                    src="/assets/hero-photo-top-left.png" 
                    alt="" 
                    className="w-full h-[106%] object-cover object-top -mt-[6%]" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 2: Bottom-Left (Drawing photo) - Figma: lower-left, overlapping central portrait */}
            <motion.div 
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              style={{
                left: '-29.28%',
                top: '43.79%',
                width: '41.47%',
                height: '64.77%',
              }}
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            >
              <div className="transform rotate-[6.78deg] shrink-0" style={{ width: '88.8%', height: '91.1%' }}>
                <div className="w-full h-full border-[2.5px] sm:border-[3px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.35)] bg-[#191818]">
                  <img 
                    src="/assets/hero-photo-bottom-left.png" 
                    alt="" 
                    className="w-full h-[119%] object-cover object-top" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 3: Top-Right (Book/Mirror photo) - Figma: upper-right */}
            <motion.div 
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              style={{
                left: '102.42%',
                top: '-5.57%',
                width: '38.16%',
                height: '62.34%',
              }}
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            >
              <div className="transform rotate-[4.64deg] shrink-0" style={{ width: '91.6%', height: '93.9%' }}>
                <div className="w-full h-full border-[2.5px] sm:border-[3px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.35)] bg-[#191818]">
                  <img 
                    src="/assets/hero-photo-top-right.png" 
                    alt="" 
                    className="w-full h-[114%] object-cover object-top" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 4: Bottom-Right (Chopsticks/Food photo) - Figma: lower-right, overlapping central portrait */}
            <motion.div 
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              style={{
                left: '90.73%',
                top: '45.60%',
                width: '38.77%',
                height: '61.13%',
              }}
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            >
              <div className="transform rotate-[-8.01deg] shrink-0" style={{ width: '87.0%', height: '89.9%' }}>
                <div className="w-full h-full border-[2.5px] sm:border-[3px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.35)] bg-[#191818]">
                  <img 
                    src="/assets/hero-photo-bottom-right.png" 
                    alt="" 
                    className="w-full h-[155.7%] object-cover object-top -mt-[37%]" 
                  />
                </div>
              </div>
            </motion.div>

            {/* 4. Tanishka Mahajan Sticker Logo - Centered horizontally on the central portrait */}
            <div 
              className="absolute z-30 pointer-events-none"
              style={{
                left: '50%',
                top: '80.2%',
                width: '64.8%',
                height: '44.16%',
                transform: 'translateX(-50%)',
              }}
            >
              <motion.div 
                className="w-full h-full"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.95, 
                  ease: [0.34, 1.56, 0.64, 1] 
                }}
              >
                <img 
                  src="/assets/hero-name-sticker.svg" 
                  alt="Tanishka Mahajan" 
                  className="w-full h-full object-contain filter drop-shadow-md" 
                />
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* ---------------- DESKTOP HERO PHOTO COLLAGE (>= 768px) ---------------- */}
      <div className="hidden md:flex w-full justify-center items-center overflow-visible">
        <div className="hero-collage-unit">
          <div className="hero-collage-scaler">
            <div className="relative w-[824px] h-[418px] shrink-0 select-none">

              {/* 1. Handwritten Tagline (Fade in + move upward ~15px, 600ms ease-out) */}
              <motion.p 
                className="absolute left-[179.3px] top-[-10px] w-[458.6px] font-gochi text-[#bfbebe] text-[16px] text-center select-none z-30 pointer-events-none"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                I’ve been creating things my whole life. Now i make them count
              </motion.p>

              {/* 2. Main Central Portrait (Fade in + scale 0.97 -> 1, 800ms ease-out) */}
              <motion.div 
                className="absolute left-[179.3px] top-[19.2px] w-[458.6px] h-[321.3px] z-10 overflow-hidden shadow-lg"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <img 
                  src="/assets/hero-main-portrait.png" 
                  alt="Tanishka Mahajan" 
                  className="w-full h-full object-cover pointer-events-none" 
                />
              </motion.div>

              {/* 3. Four Surrounding Photos (Sequential stagger ~100ms, scale 0.95 -> 1) */}
              
              {/* Photo 1: Top-Left (Dog photo) */}
              <motion.div 
                className="absolute left-[0px] top-[0px] w-[169.2px] h-[201.6px] z-20 flex items-center justify-center pointer-events-none"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              >
                <div className="transform rotate-[-7.53deg] shrink-0">
                  <div className="w-[146.4px] h-[184.1px] border-[5px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.35)] bg-[#191818]">
                    <img 
                      src="/assets/hero-photo-top-left.png" 
                      alt="" 
                      className="w-full h-[106%] object-cover object-top -mt-[6%]" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* Photo 2: Bottom-Left (Drawing photo) */}
              <motion.div 
                className="absolute left-[45px] top-[159.9px] w-[190.2px] h-[208.1px] z-20 flex items-center justify-center pointer-events-none"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              >
                <div className="transform rotate-[6.78deg] shrink-0">
                  <div className="w-[169px] h-[189.5px] border-[5px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.35)] bg-[#191818]">
                    <img 
                      src="/assets/hero-photo-bottom-left.png" 
                      alt="" 
                      className="w-full h-[119%] object-cover object-top" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* Photo 3: Top-Right (Book/Mirror photo) */}
              <motion.div 
                className="absolute left-[649px] top-[1.3px] w-[175px] h-[200.3px] z-20 flex items-center justify-center pointer-events-none"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              >
                <div className="transform rotate-[4.64deg] shrink-0">
                  <div className="w-[160.3px] h-[188px] border-[5px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.35)] bg-[#191818]">
                    <img 
                      src="/assets/hero-photo-top-right.png" 
                      alt="" 
                      className="w-full h-[114%] object-cover object-top" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* Photo 4: Bottom-Right (Chopsticks/Food photo) */}
              <motion.div 
                className="absolute left-[595.4px] top-[165.7px] w-[177.8px] h-[196.4px] z-20 flex items-center justify-center pointer-events-none"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
              >
                <div className="transform rotate-[-8.01deg] shrink-0">
                  <div className="w-[154.7px] h-[176.6px] border-[4px] border-[#fdefef] rounded-[2px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.35)] bg-[#191818]">
                    <img 
                      src="/assets/hero-photo-bottom-right.png" 
                      alt="" 
                      className="w-full h-[155.7%] object-cover object-top -mt-[37%]" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* 4. Tanishka Mahajan Sticker Logo (Fade in + scale 0.92 -> 1 with spring overshoot, 500ms) */}
              <motion.div 
                className="absolute left-[263.6px] top-[276.9px] w-[297.2px] h-[141.9px] z-30 pointer-events-none"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.95, 
                  ease: [0.34, 1.56, 0.64, 1] 
                }}
              >
                <img 
                  src="/assets/hero-name-sticker.svg" 
                  alt="Tanishka Mahajan" 
                  className="w-full h-full object-contain filter drop-shadow-md" 
                />
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* 5. Intro Paragraph (Fade in + move upward ~10px, 500ms, starts after name sticker) */}
      <motion.div 
        className="w-full flex justify-center mt-3 md:mt-6 px-4 select-none"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.15, ease: 'easeOut' }}
      >
        <p className="hero-mobile-intro font-neue font-normal text-[#e2dddd] text-[13.5px] sm:text-[14.5px] md:text-[16px] leading-[1.45] md:leading-[1.35] text-center w-full max-w-[340px] sm:max-w-[420px] md:w-[504.465px] md:max-w-[calc(100vw-32px)] shrink-0">
          I’m a UX design student at MITID, curious about why people do what they<br className="hidden sm:inline" />
          do and how design can make things easier to navigate. I’ve always loved<br className="hidden sm:inline" />
          creating and experimenting and design gave that curiosity a direction,<br className="hidden sm:inline" />
          turning something I love into something meaningful for people.
        </p>
      </motion.div>

    </div>
  );
}
