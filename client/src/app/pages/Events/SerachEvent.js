import React, { useState, useEffect } from 'react';

const SerachEvent = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    Title: '',
    StartDateTime: '',
    EndDateTime: '',
    NumberOfAttendees: '',
  });
  const [searchDelay, setSearchDelay] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    if (searchDelay) {
      clearTimeout(searchDelay);
    }
    setSearchDelay(setTimeout(() => onSearch(formData), 30)); // Debounce search with a delay of 500ms
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}> Sort by : </h1>

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
          name="StartDateTime"
          value={formData.StartDateTime}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required // Add required attribute
        />
      </div>

      <div className="flex-1 mr-2">
        <label className="block text-sm font-medium text-gray-600">End Date:</label>
        <input
          type="date"
          name="EndDateTime"
          value={formData.EndDateTime}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required // Add required attribute
        />
      </div>

      <div className="flex-1 mr-2">
        <label className="block text-sm font-medium text-gray-600">Number of Attendees:</label>
        <input
          type="number"
          name="NumberOfAttendees"
          value={formData.NumberOfAttendees}
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
