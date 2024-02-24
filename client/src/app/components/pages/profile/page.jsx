"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../../layout/Sidebar';
import Image from 'next/image';
import { Icons } from '../../shared/Icons';

const Page = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`/api/user`);
        if (!response.ok) {
          throw new Error('Failed to fetch user info');
        }
        const userData = await response.json();
        setUserInfo(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className='flex gap-10'>
      <Sidebar />
      <div className='text-black flex flex-col gap-12 pt-5'>
        <div>
          <h1 className='text-2xl font-normal'>Profile Information</h1>
          <p className='text-gray-500 text-sm'>Edit Profile Details</p>
        </div>
        <Image className='rounded-full content-center object-cover' src={Icons.Profile} height={80} width={80} />
        <div className='grid grid-cols-3 gap-7'>

          <p>Full Name: </p>
          <p>{userInfo?.FullName || "John Doe"}</p>
          <span className='text-gray-500 text-sm'>Edit</span>

          <p>Location:</p>
          <p>{userInfo?.Address || "New York, USA"}</p>
          <span className='text-gray-500 text-sm'>Edit</span>

          <p>Email:</p>
          <p>{userInfo?.Email || "johndoe@email.com"}</p>
          <span className='text-gray-500 text-sm'>Edit</span>

          <p>Nationality: </p>
          <p>{userInfo?.Nationality || "American"}</p>
          <span className='text-gray-500 text-sm'>Edit</span>

          <p>Date of Birth:</p>
          <p>{userInfo?.DateOfBirth || "01/01/1990"}</p>
          <span className='text-gray-500 text-sm'>Edit</span>
        </div>
      </div>
    </div>

  );
};

export default Page;
