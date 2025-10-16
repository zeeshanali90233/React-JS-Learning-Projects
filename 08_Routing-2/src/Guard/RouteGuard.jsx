import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const RouteGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      navigate('/');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default RouteGuard;