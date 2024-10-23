import React, { createContext, useState } from "react";

// Create a context with default values
export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

// Create a provider
const AuthProvider = ({ children }) => {
  // State to track whether user is authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    console.log("Logging in ...");
    setIsAuthenticated(true);
    console.log("User is authenticated", true);
  };

  const logout = () => {
    console.log("Logging out ...");
    setIsAuthenticated(false);
    console.log("User is logged out", true);
  };

  // Return the context provider with its value and children
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
