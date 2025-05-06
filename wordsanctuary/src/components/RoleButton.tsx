import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RoleButtonProps {
  role: string;
  onClick: (role: string) => void;
}

const RoleButton: React.FC<RoleButtonProps> = ({ role, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick(role);
    navigate('/sign-in');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white text-gray-800 font-medium py-3 px-6 rounded-md w-full max-w-xs 
                 hover:bg-gray-100 transition-colors duration-300 shadow-md"
    >
      {role}
    </button>
  );
};

export default RoleButton;