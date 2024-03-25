"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Jwt from 'jsonwebtoken';
import { Icons } from '../shared/Icons';
import Image from 'next/image';
const Header = () => {

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            const token = Cookies.get('jwt');
            if (token) {
                const decodedToken = Jwt.decode(token);
                const { _id, UserType } = decodedToken;               
                setUser({ id: _id, UserType: UserType });
            }

            
        }
    }, [user]);

    const handleLogout = () => {
        Cookies.remove('jwt');
        setUser(null);
        router.push('/');
    };

    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav className={`bg-white flex flex-col sm:flex-row justify-between items-center px-10 h-20 ${currentPath === "/pages/reservation" ? 'border-none' : 'border-b border-gray-200'}`}>
            <div className="flex items-center">
                {currentPath === "/pages/" ? (
                    <h1 className='logo text-black text-lg font-semibold font-poppins leading-9 mr-4'>Event Name</h1>
                ) : (
                    <>
                      <Link href="/"  className="hover:text-gray-700"> <Image className='mx-auto h-10 w-auto leading-9 mr-4' src={Icons.logo} alt="Eventure" /></Link> 
                        <ul className='flex gap-8 text-black'>
                            <li className='text-sm'>
                            <Link href="/pages/Events/SearchEvents"  className="hover:text-gray-700">Events</Link>
                            </li>
                            {user ? (
                                    <>
                                     {user.UserType === 1 && (
                                         <>

                            <li className='text-sm'>
                                <Link href="/pages/Events/AddEvents" className="hover:text-gray-700">ADD Events</Link>
                            </li>
                            <li className='text-sm'>
                                <Link href="/pages/Events/DeleteEvents" className="hover:text-gray-700">Delete Events</Link>
                            </li>
                            </>)}
                            </>):(<></>)}
                            <li className='text-sm'>
                                <a href="/pages/Events/FeaturedEvents" className="hover:text-gray-700">Featured</a>
                            </li>
                            <li className='text-sm'>
                                <a href="/pages/Events/PopularEvents" className="hover:text-gray-700">Popular</a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
            <div className="flex sm:flex-row gap-2 items-center">

                    {user ? (
                                    <>
                                     <Link id="tickets-link" href="/pages/Events/BuyTicket" className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none text-center">
                                        <span>
                                            Tickets
                                        </span>
                                    </Link>
                     <Link href="/pages/profile" className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none text-center">
                      <span>
                         Profile Settings
                             </span>
                     </Link>
                          <button
                              className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none text-center"
                                  onClick={handleLogout}
                          >
                             Sign out
                         </button>
                    </>
                            ) : (
                                <>
                                    <Link href="/pages/signin" className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none text-center">
                                        <span>
                                            Sign In
                                        </span>
                                    </Link>
                                    <Link href="/pages/signup" className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none text-center">
                                        <span>
                                            Sign Up
                                        </span>
                                    </Link>

                                </>
                            )}
            </div>
         
        </nav>

    );
};

export default Header;
