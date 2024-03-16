"use client"
import Image from 'next/image';
import React from 'react';
import { Icons } from '../shared/Icons';

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col h-screen"> {/* Set height to full */}
                <div className="flex flex-col gap-4 items-start w-80 bg-gray-200 z-10 p-4 h-screen">
                    <div className="flex flex-col items-start gap-6 w-full">
                        <div className="flex items-center cursor-pointer">
                            <Image alt='Back' width={20} height={20} src={Icons.Back} />
                        </div>
                        <h2 className='text-black'>Account Setting</h2>
                    </div>

                    <ul className="flex flex-col gap-5">
                        <li className='flex items-center cursor-pointer text-black gap-2'>
                            <Image alt='Back' width={20} height={20} src={Icons.User} />
                            Profile Information
                        </li>

                        <li className='flex items-center cursor-pointer text-black gap-2'>
                            <Image  alt='Wallet'width={20} height={20} src={Icons.Wallet} />
                            Payments Methods
                        </li>

                        <li className='flex items-center cursor-pointer text-black gap-2'>
                            <Image alt='Security' width={20} height={20} src={Icons.Security} />
                            Security
                        </li>

                        <li className='flex items-center cursor-pointer text-black gap-2'>
                            <Image alt='Event' width={20} height={20} src={Icons.Event} />
                            Event
                        </li>

                        <li className='flex items-center cursor-pointer text-black gap-2'>
                            <Image alt='Notification' width={20} height={20} src={Icons.Notification} />
                            Notifications
                        </li>

                        <li className='flex items-center cursor-pointer text-black gap-2'>
                            <Image alt='Attendence' width={20} height={20} src={Icons.Attendence} />
                            Add Attendees
                        </li>
                    </ul>
                    <div className='flex items-center cursor-pointer text-black gap-2'>
                    <Image alt='Logout' width={20} height={20} src={Icons.Logout} />
                    Logout
                    </div>
                </div>
            </div>
        </>
    );
};


export default Sidebar;
