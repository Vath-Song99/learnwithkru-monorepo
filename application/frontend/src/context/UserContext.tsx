import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserContextType {
  user: any; // Define the type of user object as per your application's schema
  setUser: (userData: any) => void; // Define setUser function type
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState<any>(null); // Define the type of user state

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setUserAndStore = (userData: any) => {
    setUser(userData);
    console.log("in context data:",userData)
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserAndStore }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
