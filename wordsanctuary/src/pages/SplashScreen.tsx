import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to role selection after 2 seconds
    const timeout = setTimeout(() => {
      navigate('/role-selection');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-600 to-purple-900 flex items-center justify-center">
      <div className="animate-fade-in flex flex-col items-center">
        <Logo size="lg" />
      </div>
    </div>
  );
};

export default SplashScreen;