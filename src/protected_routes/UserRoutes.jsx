import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Ensure the correct path

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  return user ? <Outlet /> : navigate('/login');
};

export default ProtectedRoute;
