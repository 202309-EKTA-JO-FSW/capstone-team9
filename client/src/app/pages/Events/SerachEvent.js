// SerachEvent.js
import React, { useState } from 'react';

const SerachEvent = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberOfAttendees, setNumberOfAttendees] = useState('');
  const [Creator, setCreator] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the search parameters
    onSearch({
      location,
      startDate,
      endDate,
      NumberOfAttendees: numberOfAttendees,
      Creator,
    });
  };

  return (
    <div>
     <h1>Event Search : </h1>

      <label>Location:</label>
      <br />

      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
           <br />
      <label>Start Date:</label>
      <br />

      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <br />

      <label>End Date:</label>
      <br />

      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <br />

      <label>Number of Attendees:</label>
      <br />

      <input
        type="number"
        value={numberOfAttendees}
        onChange={(e) => setNumberOfAttendees(e.target.value)}
      />
      <br />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
/// search per night price :




};




export default SerachEvent;
