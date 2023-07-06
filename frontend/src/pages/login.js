import React from 'react';
import Login from '../components/Login/login';

const LoginPage = ({ onLogin }) => {
  return (
   <Login onLogin={ onLogin } />
  );
};

export default LoginPage;
