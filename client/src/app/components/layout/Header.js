"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav className={`bg-white flex flex-col sm:flex-row justify-between items-center px-10 h-20 ${currentPath === "/pages/reservation" ? 'border-none' : 'border-b border-gray-200'}`}>
            <div className="flex items-center">
                {currentPath === "/pages/reservation" ? (
                    <h1 className='logo text-black text-lg font-semibold font-poppins leading-9 mr-4'>Event Name</h1>
                ) : (
                    <>
                        <h1 className='logo text-black text-lg font-semibold font-poppins leading-9 mr-4'>EventMast</h1>
                        <ul className='flex gap-8 text-black'>
                            <li className='text-sm'>
                                <a href="#" className="hover:text-gray-700">Events</a>
                            </li>
                            <li className='text-sm'>
                                <a href="#" className="hover:text-gray-700">Upcoming</a>
                            </li>
                            <li className='text-sm'>
                                <a href="#" className="hover:text-gray-700">Popular</a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
            <div className="flex sm:flex-row gap-2 items-center">
                {currentPath === "/pages/reservation" ? (
                    <button className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none">Buy Tickets</button>
                ) : (
                    <>
                        <button className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none">Back</button>
                        <button className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none">Tickets</button>
                    </>
                )}
                
                <Link href='/accounts/signin'><button className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins focus:outline-none">Signin</button></Link>
            </div>
        </nav>

    );
};

export default Header;
