import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  color?: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  color = 'purple',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-300 text-center';
  const colorMap: Record<string, string> = {
    purple: 'bg-purple-700 hover:bg-purple-800 text-white',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    orange: 'bg-orange-600 hover:bg-orange-700 text-white',
  };
  
  const outlineColorMap: Record<string, string> = {
    purple: 'border-2 border-purple-700 text-purple-700 hover:bg-purple-100',
    blue: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-100',
    green: 'border-2 border-green-600 text-green-600 hover:bg-green-100',
    red: 'border-2 border-red-600 text-red-600 hover:bg-red-100',
    orange: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-100',
  };

  const variantClasses = variant === 'outline' 
    ? outlineColorMap[color] 
    : variant === 'secondary' 
      ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' 
      : colorMap[color];
  
  const widthClasses = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${widthClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;