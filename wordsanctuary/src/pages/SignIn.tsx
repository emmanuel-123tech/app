import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useRoleColor } from '../hooks/useRoleColor';

interface SignInProps {
  selectedRole: string | null;
}

const SignIn: React.FC<SignInProps> = ({ selectedRole }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { gradient, buttonColor } = useRoleColor(selectedRole);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      navigate('/verification');
    }
  };

  return (
    <div className={`min-h-screen w-full ${gradient} flex flex-col items-center`}>
      <div className="mt-10 mb-8">
        <Logo size="sm" />
      </div>

      <div className="flex-grow w-full flex flex-col justify-end animate-slide-up">
        <Card className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign in</h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your email address to receive a one-time passcode
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6"
            />

            <div className="flex flex-col space-y-4 mt-4">
              <Button 
                color={buttonColor} 
                fullWidth 
                onClick={handleSubmit}
                disabled={!email.trim()}
              >
                Get Code
              </Button>

              <div className="text-center text-sm">
                <span className="text-gray-600">New to the training process? </span>
                <a href="#" className={`text-${buttonColor} font-medium`}>
                  Register
                </a>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;