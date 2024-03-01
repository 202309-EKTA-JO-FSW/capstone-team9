"use client"
import React, { useState, useEffect } from 'react';


function SignInComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true);
    setError(null); // Clear any previous errors

    // try {
    //   const response = await fetch('http://localhost:3001/user/signin', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`API request failed with status ${response.status}`);
    //   }

    //   const data = await response.json();
    //   // Handle successful sign-in here (e.g., store token, redirect)
    //   console.log('Sign-in successful:', data);
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (

<form onSubmit={handleSubmit}>
    <div className='flex gap-10'>
    <div className='text-black flex flex-col gap-12 pt-5'>
      <div>
        <h1 className='text-2xl font-normal'>Sign in</h1>
      </div>
      <div className='grid grid-cols-3 gap-7'>

      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} required/>
      
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </button>
      </div>
    </div>
  </div>
    </form>
  );
}

export default SignInComponent;