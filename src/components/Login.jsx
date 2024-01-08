// src/components/Login.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm'; // Import the AuthForm component

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      // Send userData to the backend (Node.js + Express) using fetch or axios
      const response = await fetch('http://your-backend-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle the response, e.g., show success message or redirect to another page
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error, e.g., show error message to the user
    }
  };

  // Use AuthForm with login-specific configurations
  return (
    <AuthForm
      title="Login"
      fields={[
        {
          label: 'Email',
          type: 'email',
          ref: emailRef,
        },
        {
          label: 'Password',
          type: 'password',
          ref: passwordRef,
        },
      ]}
      onSubmit={handleLogin}
      buttonText="Login"
      bottomText={
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#2b31ce] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      }
    />
  );
};

export default Login;
