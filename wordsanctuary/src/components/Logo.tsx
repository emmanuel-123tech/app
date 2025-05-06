import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', color = 'white' }) => {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <div className="absolute rounded-full border-2 border-white w-full h-full flex items-center justify-center">
          <div className="relative w-3/4 h-3/4">
            {/* Globe icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white" />
            {/* Person figure */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-white" />
            <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full border-2 border-white transform -rotate-45" />
          </div>
        </div>
      </div>
      <div className={`text-${color} font-serif italic text-xl mt-2`}>Word Sanctuary</div>
    </div>
  );
};

export default Logo;