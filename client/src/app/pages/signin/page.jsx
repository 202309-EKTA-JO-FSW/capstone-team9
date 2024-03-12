// "use client"
// import React, { useState, useEffect } from 'react';
// import { Icons } from '../../components/shared/Icons';
// import Image from 'next/image';

// function SignInComponent() {

//   console.log("access SignInComponent")
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);

//   function handleSubmit(event) {
//     console.log("access sign in")
//     event.preventDefault(); // Prevent default form submission behavior
//     setIsSubmitting(true);
//     setError(null); // Clear any previous errors

//     try {
//       const response = fetch('http://localhost:3001/user/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       console.log("response" +response.ok)

//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }

//       const data =  response.json();
//       // Handle successful sign-in here (e.g., store token, redirect)
//       console.log('Sign-in successful:', data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
// <form onSubmit={handleSubmit}>

// <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//   <Image className='mx-auto h-10 w-auto' src={Icons.logo} alt="Eventure" />
//     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
//   </div>

//   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     <form className="space-y-6" action="#" method="POST">
//       <div>
//         <label  className="block text-sm font-medium leading-6 text-gray-900">Username</label>
//         <div className="mt-2">
//           <input id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
//         </div>
//       </div>

//       <div>
//         <div className="flex items-center justify-between">
//           <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
      
//         </div>
//         <div className="mt-2">
//           <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//         </div>
//       </div>

//       <div>
//         <button type="submit" disabled={isSubmitting} className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">{isSubmitting ? 'Signing In...' : 'Sign In'}</button>
//       </div>
//     </form>

//     <p className="mt-10 text-center text-sm text-gray-500">
//       Not a member?
//       <a href="#" className="font-semibold leading-6 text-gray-600 hover:text-gray-500"> Register Now</a>
//     </p>
//   </div>
// </div>
//     </form>
//   );
// }

// export default SignInComponent;


'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Icons } from '../../components/shared/Icons';
import Image from 'next/image';
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                Cookies.set('jwt', data.token);

                router.push('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <Image className='mx-auto h-10 w-auto' src={Icons.logo} alt="Eventure" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="user-name" className="sr-only">
                             Username
                            </label>
                            <input
                                id="user-name"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm mt-2">{error}</div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center text-black">
                    Don&apos;t have an account?{' '}
                    <Link href="/pages/signup">
                        <span className="font-medium text-gray-600 hover:text-gray-500 cursor-pointer">
                            Sign up
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;