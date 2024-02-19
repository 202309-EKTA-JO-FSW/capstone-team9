import React from 'react';

const Header = () => {
    return (
        <nav className='bg-white border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center px-10 h-20'>
            <div className="flex items-center">
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
            </div>
            <div className="flex sm:flex-row gap-2 items-center">
                <button className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins  focus:outline-none">Back</button>
                <button className="w-btn-width h-9.5 px-0 py-2 border-none rounded-lg bg-gray-900 text-white text-sm font-poppins  focus:outline-none">Tickets</button>
            </div>
        </nav>
    );
};

export default Header;
