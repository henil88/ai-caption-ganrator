import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // check once on load
    setIsAuthenticated(!!localStorage.getItem("username"));

    // keep in sync across tabs
    const checkAuth = () =>
      setIsAuthenticated(!!localStorage.getItem("username"));
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const login = (username) => {
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  const register = (username) => {
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
