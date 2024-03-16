"use client"
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { Icons } from '@/app/components/shared/Icons'
import Image from 'next/image'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Reservation = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col h-screen gap-10 mb-64'>
        <div className=' p-20 flex items-center justify-center border-b-2'>
          <h1 className='text-5xl'>Event Details</h1>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <h2>Get ready to experience a day filled with inspiring talks, informative sessions, and networking opportunities</h2>
          <div className='flex gap-4 items-center justify-center'>
            <Image className='object-contain' src={Icons.Info} width={20} height={20} alt='info' />
            <span>Date</span>
            <Image className='object-contain' src={Icons.Calendar} width={20} height={20} alt='calendar' />
            <span>2</span>
            <Image className='object-contain' src={Icons.Clock} width={20} height={20} alt='clock' />
            <span>No Date Selected</span>
          </div>
          <form class="w-80 mx-auto">
            <div className='flex gap-2 items-center mb-2'>
              <Image className='object-contain' src={Icons.Group} width={20} height={20} alt='group' />
              <span className='self-start'>Number of Attendees</span>
            </div>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-60 ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </form>
          <div className="border border-stone-200 rounded-md " >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div className='flex flex-col gap-2 w-80 rounded-xl'>
            <div className='flex self-start gap-2'>
              <Image className='object-contain' src={Icons.Clock} width={20} height={20} alt='time' />
              <span>Time</span>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Select the time"
              />
            </LocalizationProvider>
          </div>
          <button className="px-16 py-3 border-none rounded-xl bg-gray-900 text-white text-sm font-poppins focus:outline-none">Book Now</button>
        </div>
      </div>
      <Footer />
    </>


  )
}

export default Reservation