import Image from 'next/image';
import React from 'react';
import { Icons } from '../shared/Icons';

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col gap-4 items-start absolute top-20 left-0 w-80 h-full bg-gray-200 z-10 p-4">
                <div className="flex flex-col items-start gap-6 w-full">
                    <div className="flex items-center cursor-pointer">
                        <Image width={20} height={20} src={Icons.Back} />
                    </div>
                    <h2 className='text-black'>Account Setting</h2>
                </div>

                <ul className="flex flex-col gap-5">
                    <li className='flex items-center cursor-pointer text-black gap-2'>
                        <Image width={20} height={20} src={Icons.User} />
                        Profile Information
                    </li>

                    <li className='flex items-center cursor-pointer text-black gap-2'>
                        <Image width={20} height={20} src={Icons.Wallet} />
                        Payments Methods
                    </li>

                    <li className='flex items-center cursor-pointer text-black gap-2'>
                        <Image width={20} height={20} src={Icons.Security} />
                        Security
                    </li>

                    <li className='flex items-center cursor-pointer text-black gap-2'>
                        <Image width={20} height={20} src={Icons.Event} />
                        Event
                    </li>

                    <li className='flex items-center cursor-pointer text-black gap-2'>
                        <Image width={20} height={20} src={Icons.Notification} />
                        Notifications
                    </li>

                    <li className='flex items-center cursor-pointer text-black gap-2'>
                        <Image width={20} height={20} src={Icons.Attendence} />
                        Add Attendees
                    </li>
                </ul>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Logout</button>
        </>
    );
};

export default Sidebar;
