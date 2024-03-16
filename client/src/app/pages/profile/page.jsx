"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Image from 'next/image';
import { Icons } from '../../components/shared/Icons';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Jwt from 'jsonwebtoken';
const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();
  const token = Cookies.get('jwt');

  async function fetchUserInfo() {
    const decodedToken = Jwt.decode(token);
    
    let id = 0;
    if(decodedToken!=null){
      id =decodedToken.id
    }

    try {
      const response = await fetch(`http://localhost:3001/user/getuserDetials/${id}`,{
        headers: {
           'authorization': `${token}`
      },
      });
      if (!response.ok) {
        console.log(response);
        Cookies.remove('jwt');
        setUserInfo(null);
        router.push('/');
        throw new Error('Failed to fetch user info');
      }
      const userData = await response.json();
      setUserInfo(userData);
    } catch (error) {
      console.error(error);
    }
  }

 

  useEffect(() => {
    fetchUserInfo();
  }, [userInfo]);

  return (
    <div className='flex gap-10'>
      <Sidebar />
      <div className='text-black flex flex-col gap-12 pt-5'>
        <div>
          <h1 className='text-2xl font-normal'>Profile Information</h1>
          <p className='text-gray-500 text-sm'>Edit Profile Details</p>
        </div>
        <Image alt='profile' className='rounded-full content-center object-cover' src={Icons.Profile} height={80} width={80} />
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

export default Profile;