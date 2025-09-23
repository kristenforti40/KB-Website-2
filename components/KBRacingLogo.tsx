
import React from 'react';

const KBRacingLogo = () => {
  return (
    <div className="flex items-center">
      {/* Monogram and Subtext */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div style={{ width: '85px', height: '85px' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
            {/* Teal Circle */}
            <circle cx="50" cy="50" r="48" stroke="#00AAB5" strokeWidth="3.5" fill="none" />
            
            {/* The letter 'B' in teal, positioned slightly right. Drawn first to be "behind" */}
            <text 
              x="54" 
              y="68" 
              fontFamily="EB Garamond, serif" 
              fontSize="70" 
              fontWeight="bold" 
              fill="#00AAB5" 
              textAnchor="middle"
            >
              B
            </text>

            {/* The letter 'K' in black, positioned slightly left to overlap B */}
            <text 
              x="46" 
              y="68" 
              fontFamily="EB Garamond, serif" 
              fontSize="70" 
              fontWeight="bold" 
              fill="black" 
              textAnchor="middle"
            >
              K
            </text>
          </svg>
        </div>
        <span className="font-serif text-[10px] font-semibold text-stone-800 tracking-widest -mt-4">
          KERI BRION TRAINER
        </span>
      </div>
      
      {/* "RACING" text */}
      <div className="ml-1">
        <span className="font-serif text-3xl font-bold text-stone-900 tracking-[0.15em]">
          RACING
        </span>
      </div>
    </div>
  );
};

export default KBRacingLogo;