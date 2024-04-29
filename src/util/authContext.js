import { createContext, useContext, useEffect, useState } from 'react';
import * as AuthService from './auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthService.initAuth();
  }, []);

  const login = ({ username, password }) => {
    return AuthService.login({ username, password }).then((user) =>
        setUser(user)
    );
  };

  const signup = ({ username, password }) => {
    return AuthService.signup({ username, password }).then((user) =>
        setUser(user)
    );
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
      <AuthContext.Provider
          value={{ user, isLoggedIn: !!user, login, signup, logout }}
      >
        {children}
      </AuthContext.Provider>
  );
}
