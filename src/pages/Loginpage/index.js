import React from 'react';
import LoginForm from '../../components/Forms/LoginForm';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login with', credentials)
    navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );

};

export default LoginPage;
