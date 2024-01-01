// src/components/Signup.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import AuthForm from './AuthForm'; // Assuming you have a shared AuthForm component

const SignUp = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = async () => {
    const userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      // Send userData to the backend (Node.js + Express) using fetch or axios
      const response = await fetch('http://your-backend-url/signup', {
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
      console.error('Error during signup:', error);
      // Handle error, e.g., show error message to the user
    }
  };

  return (
    <AuthForm
      title="Sign Up"
      fields={[
        {
          label: 'Username',
          type: 'text',
          ref: usernameRef,
        },
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
      onSubmit={handleSignup}
      buttonText="Sign Up"
      bottomText={
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      }
    />
  );
};

export default SignUp;
