import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-t-3xl md:rounded-xl shadow-lg p-8 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Card;