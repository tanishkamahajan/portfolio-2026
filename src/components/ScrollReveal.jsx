import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  y = 30, 
  delay = 0, 
  duration = 0.6, 
  className = "", 
  style = {} 
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
