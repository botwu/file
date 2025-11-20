import React from 'react';

interface BowIconProps {
  className?: string;
  color?: string;
}

export const BowIcon: React.FC<BowIconProps> = ({ className, color = "#ec4899" }) => (
  <svg 
    viewBox="0 0 100 60" 
    className={className} 
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M40,30 C20,30 10,10 10,10 C10,10 0,20 0,30 C0,40 10,50 10,50 C10,50 20,30 40,30 Z" />
    <path d="M60,30 C80,30 90,10 90,10 C90,10 100,20 100,30 C100,40 90,50 90,50 C90,50 80,30 60,30 Z" />
    <circle cx="50" cy="30" r="12" fill={color} />
    <circle cx="50" cy="30" r="8" fill="#fff" opacity="0.3" />
  </svg>
);