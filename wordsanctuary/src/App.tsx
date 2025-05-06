import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import RoleSelection from './pages/RoleSelection';
import SignIn from './pages/SignIn';
import Verification from './pages/Verification';

function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route 
          path="/role-selection" 
          element={<RoleSelection setSelectedRole={setSelectedRole} />} 
        />
        <Route 
          path="/sign-in" 
          element={<SignIn selectedRole={selectedRole} />} 
        />
        <Route 
          path="/verification" 
          element={<Verification selectedRole={selectedRole} />} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;