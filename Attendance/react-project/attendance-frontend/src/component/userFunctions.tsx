// userFunctions.ts
import { useState } from 'react';

interface User {
  email: string;
}

const useUserFunctions = () => {
  const [user, setUser] = useState<User | null>(null);

  const loginUser = (email: string, password: string): boolean => {
    // Simulate a successful login for demonstration purposes
    if (email === 'user@example.com' && password === 'password') {
      const newUser: User = { email };
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logoutUser = (): void => {
    setUser(null);
  };

  return { user, loginUser, logoutUser };
};

export default useUserFunctions;
