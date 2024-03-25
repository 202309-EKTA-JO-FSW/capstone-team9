"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomDropdown from './CustomDropdown'; // Import your dropdown component
const TicketPage = () => {
  const [NumberOfAttendees, setAttendees] = useState('');
  const [PurchasedDate, setDate] = useState('');
  const [time, setTime] = useState('');
  const [EventID, setEventId] = useState(null); // State to store the selected event ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/ticket/createTicket', {
        EventID, // Include the EventID in the request
        NumberOfAttendees,
        PurchasedDate,
        time
      });

      console.log('Ticket created:', response.data);

      setAttendees('');
      setDate('');
      setTime('');
      setEventId(null);
      toast.success('Ticket bought successfully!');
    } catch (error) {
      console.error('Error creating ticket:', error);
      toast.error('Error buying ticket. Please try again later.');
    }
  };

  // Callback function to handle event selection from the dropdown
  const handleEventSelection = (eventId) => {
    setEventId(eventId); // Update EventID state with the selected event's ID
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Buy Tickets</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Attendees:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={NumberOfAttendees}
            onChange={(e) => setAttendees(e.target.value)}
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            value={PurchasedDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Time:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <CustomDropdown onSelectEvent={handleEventSelection} />
       < br />
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Buy Tickets
        </button>
      </form>
      <ToastContainer /> {/* Toast container to display notifications */}

    </div>
  );
};

export default TicketPage;