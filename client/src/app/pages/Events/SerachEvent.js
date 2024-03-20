import React, { useState } from 'react';

const SerachEvent = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    Title: '',
    startDate: '',
    endDate: '',
    numberOfAttendees: '',
    Creator: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Call the onSearch prop with the search parameters
    onSearch(formData);
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Event Search : </h1>

      <div className="flex-1 mr-2">
        <label className="block text-sm font-medium text-gray-600">Title:</label>
        <input
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required // Add required attribute
        />
      </div>

      <div className="flex-1 mr-2">
        <label className="block text-sm font-medium text-gray-600">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required // Add required attribute
        />
      </div>

      <div className="flex-1 mr-2">
        <label className="block text-sm font-medium text-gray-600">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required // Add required attribute
        />
      </div>

      <div className="flex-1 mr-2">
        <label className="block text-sm font-medium text-gray-600">Number of Attendees:</label>
        <input
          type="number"
          name="numberOfAttendees"
          value={formData.numberOfAttendees}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required // Add required attribute
        />
      </div>
           <br />
      <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>    </div>
  );
};

export default SerachEvent;
