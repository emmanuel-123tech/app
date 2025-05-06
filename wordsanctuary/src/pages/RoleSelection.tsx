import React from 'react';
import Logo from '../components/Logo';
import RoleButton from '../components/RoleButton';

interface RoleSelectionProps {
  setSelectedRole: (role: string) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ setSelectedRole }) => {
  const roles = [
    'Executive Assistant',
    'Assistant HOD',
    'HOD',
    'Minister',
    'Pastor'
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 to-purple-900 flex flex-col items-center p-6">
      <div className="mt-10 mb-8 animate-fade-in">
        <Logo size="md" />
      </div>

      <div className="max-w-md w-full text-center animate-slide-up">
        <h1 className="text-white text-xl font-bold mb-2">WORD SANCTUARY TRAINING</h1>
        <p className="text-white text-sm mb-8">
          Welcome to the first stage in your next level of leadership.
          Click below on the level of training you are going for.
        </p>

        <div className="flex flex-col space-y-4">
          {roles.map((role) => (
            <RoleButton key={role} role={role} onClick={setSelectedRole} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;