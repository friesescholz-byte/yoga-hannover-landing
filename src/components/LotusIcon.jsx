import React from 'react';

/**
 * Feines, elegantes Lotus-Symbol als persönliches Kennzeichen von Claudia Siegmund.
 * Schlichte, filigrane Vektorlinien statt kitschiger Deko.
 */
export default function LotusIcon({ className = "w-6 h-6 text-sage", strokeWidth = 1.25, ...props }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Zentrales Lotusblatt */}
      <path d="M24 8C21 16 20 25 24 35C28 25 27 16 24 8Z" />
      
      {/* Innere Blätter links und rechts */}
      <path d="M24 35C17 32 12 23 16 14C21 21 23 28 24 35Z" />
      <path d="M24 35C31 32 36 23 32 14C27 21 25 28 24 35Z" />
      
      {/* Äußere ausladende Blütenblätter */}
      <path d="M24 35C14 34 6 27 8 20C14 24 19 30 24 35Z" />
      <path d="M24 35C34 34 42 27 40 20C34 24 29 30 24 35Z" />
      
      {/* Sanfte Basis-Wasserlinie */}
      <path d="M12 37C18 39 30 39 36 37" opacity="0.6" />
      <path d="M16 41C20 42 28 42 32 41" opacity="0.4" />
    </svg>
  );
}
