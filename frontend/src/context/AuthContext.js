import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // optional: ping /me to validate token on refresh
  useEffect(() => {
    // fetch /api/auth/me -> if 401 then logout();
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
