import { useMemo } from 'react';

type Role = string | null;

interface ColorScheme {
  primary: string;
  gradient: string;
  buttonColor: string;
}

export function useRoleColor(role: Role): ColorScheme {
  return useMemo(() => {
    switch (role) {
      case 'Executive Assistant':
        return {
          primary: 'purple-700',
          gradient: 'bg-gradient-to-b from-purple-600 to-purple-900',
          buttonColor: 'purple'
        };
      case 'Assistant HOD':
        return {
          primary: 'blue-700',
          gradient: 'bg-gradient-to-b from-blue-600 to-blue-900',
          buttonColor: 'blue'
        };
      case 'HOD':
        return {
          primary: 'green-700',
          gradient: 'bg-gradient-to-b from-green-600 to-green-900',
          buttonColor: 'green'
        };
      case 'Minister':
        return {
          primary: 'red-700',
          gradient: 'bg-gradient-to-b from-red-600 to-red-900',
          buttonColor: 'red'
        };
      case 'Pastor':
        return {
          primary: 'orange-700',
          gradient: 'bg-gradient-to-b from-orange-600 to-orange-900',
          buttonColor: 'orange'
        };
      default:
        return {
          primary: 'purple-700',
          gradient: 'bg-gradient-to-b from-purple-600 to-purple-900',
          buttonColor: 'purple'
        };
    }
  }, [role]);
}