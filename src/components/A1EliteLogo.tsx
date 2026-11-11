import React from 'react';

interface A1EliteLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const A1EliteLogo: React.FC<A1EliteLogoProps> = ({
  className = '',
  size = 40,
  showText = false,
  textColor = 'text-white',
  subtextColor = 'text-[#D4AF37]'
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Circular Lion Crest Seal */}
      <div
        className="relative shrink-0 rounded-full flex items-center justify-center shadow-md select-none"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          aria-label="A1 Elite Service & Properties Logo"
        >
          <defs>
            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="25%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF2A3" />
              <stop offset="75%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#E5A91E" />
            </linearGradient>
            <linearGradient id="goldLion" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE58F" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B3861B" />
            </linearGradient>
            <radialGradient id="innerBlack" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#26080E" />
              <stop offset="70%" stopColor="#140306" />
              <stop offset="100%" stopColor="#080102" />
            </radialGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#D4AF37" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Outer Gold Ornamental Ring */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="url(#goldRim)" strokeWidth="3" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.8" />

          {/* Dark Royal Core */}
          <circle cx="50" cy="50" r="44" fill="url(#innerBlack)" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#goldRim)" strokeWidth="1" opacity="0.6" />

          {/* House Roof Peak / Shield Motif overarching the Lion */}
          <path
            d="M 28 36 L 50 20 L 72 36 L 68 39 L 50 25 L 32 39 Z"
            fill="url(#goldRim)"
            filter="url(#goldGlow)"
          />

          {/* Roaring Lion Head Profile Silhouette (Official A1 Elite Seal) */}
          <g transform="translate(22, 28) scale(0.56)" fill="url(#goldLion)" filter="url(#goldGlow)">
            {/* Mane & Crown */}
            <path d="M 45 6 C 36 2, 25 7, 18 16 C 12 24, 9 34, 10 44 C 11 50, 14 56, 17 62 C 15 67, 12 73, 9 78 C 17 76, 25 74, 30 69 C 34 76, 42 81, 50 82 C 48 76, 47 70, 48 64 C 54 67, 61 67, 67 64 C 70 60, 72 55, 73 50 C 76 50, 80 47, 81 44 C 83 39, 81 34, 77 32 C 77 27, 74 22, 69 19 C 64 16, 58 15, 52 16 C 50 12, 48 9, 45 6 Z" />
            
            {/* Lion Snout & Jaws (Roar) */}
            <path d="M 69 32 C 74 33, 80 36, 84 41 C 80 45, 74 46, 68 44 C 71 49, 69 55, 63 58 C 58 60, 52 59, 47 55 C 47 51, 49 47, 53 45 C 49 44, 46 41, 46 37 C 46 32, 51 28, 57 28 C 61 28, 65 30, 69 32 Z" fill="#FFE58F" />
            
            {/* Piercing Eye */}
            <ellipse cx="61" cy="33" rx="2.5" ry="1.8" fill="#140306" />
            <circle cx="61.5" cy="32.5" r="0.8" fill="#FFF" />

            {/* Whiskers / Chin Beard */}
            <path d="M 64 54 C 68 59, 73 63, 80 65 C 74 67, 67 66, 61 63 Z" fill="url(#goldRim)" />
          </g>

          {/* Golden Foundation Pedestal */}
          <path
            d="M 26 80 L 74 80 L 71 83 L 29 83 Z"
            fill="url(#goldRim)"
          />
        </svg>
      </div>

      {/* Optional Company Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold text-sm sm:text-base tracking-tight uppercase leading-tight ${textColor}`}>
            A1 ELITE SERVICE
          </span>
          <span className={`text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-semibold ${subtextColor}`}>
            & PROPERTIES LIMITED
          </span>
        </div>
      )}
    </div>
  );
};
