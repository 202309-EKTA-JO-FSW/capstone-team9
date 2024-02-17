"use client"
import React, { useState, useEffect } from 'react';

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
    <div>
      <div>
        <h2>User Info</h2>
        <p>Full Name: {userInfo?.FullName}</p>
        <p>Email: {userInfo?.Email}</p>
        <p>Nationality: {userInfo?.Nationality}</p>
        <p>Date of Birth: {userInfo?.DateOfBirth}</p>
      </div>
    </div>
  );
};

export default Page;
