import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { loginApi, registerApi } from '../apis/Api'; // Ensure the correct path

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await loginApi(data);
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to a protected route
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const register = async (data) => {
    try {
      const response = await registerApi(data);
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to a protected route
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export const useAuth = () => useContext(AuthContext);
