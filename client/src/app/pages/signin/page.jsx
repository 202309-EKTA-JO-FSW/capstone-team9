"use client"
import React, { useState, useEffect } from 'react';
import { Icons } from '../../components/shared/Icons';
import Image from 'next/image';

function SignInComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    console.log("access sign in")
    event.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true);
    setError(null); // Clear any previous errors

    try {
      const response = fetch('http://localhost:3001/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log("response" +response.ok)

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data =  response.json();
      // Handle successful sign-in here (e.g., store token, redirect)
      console.log('Sign-in successful:', data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<div>
<form onSubmit={handleSubmit}>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image className='mx-auto h-10 w-auto' src={Icons.logo} alt="Eventure" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
          <input id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
        </div>
        <div className="mt-2">
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">{isSubmitting ? 'Signing In...' : 'Sign In'}</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-gray-600 hover:text-gray-500"> Register Now</a>
    </p>
  </div>
</div>
    </form>
    </div>
  );
}

export default SignInComponent;