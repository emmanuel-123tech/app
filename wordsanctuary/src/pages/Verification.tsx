import React, { useState } from 'react';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Button from '../components/Button';
import VerificationInput from '../components/VerificationInput';
import { useRoleColor } from '../hooks/useRoleColor';

interface VerificationProps {
  selectedRole: string | null;
}

const Verification: React.FC<VerificationProps> = ({ selectedRole }) => {
  const [code, setCode] = useState('');
  const { gradient, buttonColor } = useRoleColor(selectedRole);

  const handleVerification = () => {
    // In a real app, this would verify the code with a backend
    console.log('Verifying code:', code);
    // Navigate to dashboard or next screen
  };

  const handleResend = () => {
    // Resend verification code logic
    console.log('Resending code');
  };

  return (
    <div className={`min-h-screen w-full ${gradient} flex flex-col items-center`}>
      <div className="mt-10 mb-8">
        <Logo size="sm" />
      </div>

      <div className="flex-grow w-full flex flex-col justify-end animate-slide-up">
        <Card>
          <h1 className="text-2xl font-bold text-center mb-6">Account Verification</h1>
          <p className="text-center text-gray-600 mb-8">
            4-digit verification code has been sent to your email.
          </p>

          <div className="mb-8">
            <VerificationInput length={4} onChange={setCode} />
          </div>

          <div className="text-center text-sm mb-6">
            <span className="text-gray-600">Didn't receive the code? </span>
            <button
              onClick={handleResend}
              className={`text-${buttonColor} font-medium`}
            >
              Resend it
            </button>
          </div>

          <Button
            color={buttonColor}
            fullWidth
            onClick={handleVerification}
            disabled={code.length !== 4}
          >
            Enter Code
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Verification;