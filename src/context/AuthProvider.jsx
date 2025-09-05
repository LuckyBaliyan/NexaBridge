import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  // Refresh / first visit pe localStorage check kare
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    const savedToken = localStorage.getItem("token");

    if (savedRole && savedToken) {
      setRole(savedRole); // refresh hone ke baad bhi role set ho jayega
    }
  }, []);

  const login = (userRole) => {
    setRole(userRole);
    localStorage.setItem("role", userRole);
    // token localStorage me pehle hi set ho raha hai tumhare Login.jsx me
  };

  const logout = () => {
    setRole(null);
    toast.success('sucessfully Logged out!');
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
