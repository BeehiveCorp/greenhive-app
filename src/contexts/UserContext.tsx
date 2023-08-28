import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '@/services';

type UserContextType = {
  user?: User | null;
  logout: () => void;
  storeUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  const getStoredUser = async () => {
    const storedUser = await AsyncStorage.getItem('@user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      return;
    }

    setUser(null);
  };

  const logout = async () => {
    AsyncStorage.removeItem('@user');
    AsyncStorage.removeItem('@token');
    setUser(null);
  };

  const storeUser = async (userToStore: User) => {
    setUser(userToStore);
    await AsyncStorage.setItem('@user', JSON.stringify(userToStore));
  };

  useEffect(() => {
    getStoredUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, storeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used within a UserProvider');

  return context;
};
