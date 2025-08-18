import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on component mount
    const username = localStorage.getItem("username");
    setIsAuthenticated(!!username);
    console.log("Auth check on mount:", { isAuthenticated: !!username, username });

    // Sync authentication status across tabs
    const checkAuth = () => {
      const updatedUsername = localStorage.getItem("username");
      setIsAuthenticated(!!updatedUsername);
      console.log("Auth synced across tabs:", { isAuthenticated: !!updatedUsername, username: updatedUsername });
    };
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const login = (username) => {
    if (!username) {
      console.error("Login failed: No username provided");
      return;
    }
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
    console.log("Login successful:", { username });
  };

  const logout = () => {
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    console.log("Logout successful");
  };

  const register = (username) => {
    if (!username) {
      console.error("Register failed: No username provided");
      return;
    }
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
    console.log("Register successful:", { username });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};