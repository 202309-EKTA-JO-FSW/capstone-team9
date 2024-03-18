import React, { useState, useEffect } from 'react';

const EventSearchPerNight = () => {
  const [events, setEvents] = useState([]);
  const [priceRanges, setPriceRanges] = useState({
    lessThan50: false,
    between50And100: false,
    moreThan200: false,
  });
  const fetchEvents = async () => {
    try {
      const queryParams = new URLSearchParams({
        // Add other parameters as needed
        minPrice: priceRanges.lessThan50 ? 0 : undefined,
        maxPrice: priceRanges.between50And100 ? 100 : priceRanges.moreThan200 ? undefined : 50,
        moreThan200: priceRanges.moreThan200 ? 200 : undefined ,
        // Add other parameters here
      });
  
      const response = await fetch(`http://localhost:3001/search/searchEvent?${queryParams}`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  

  useEffect(() => {
    console.log('Fetching events with priceRanges:', priceRanges);
    fetchEvents();
  }, [priceRanges]);
  
  const handleCheckboxChange = (range) => {
    setPriceRanges((prevRanges) => ({
      ...prevRanges,
      [range]: !prevRanges[range],
    }));
  };

  return (
    <div>
      <h1>Event Search per Night : </h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={priceRanges.lessThan50}
            onChange={() => handleCheckboxChange('lessThan50')}
          />
          Price less than 50
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={priceRanges.between50And100}
            onChange={() => handleCheckboxChange('between50And100')}
          />
          Price between 50 and 100
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={priceRanges.moreThan200}
            onChange={() => handleCheckboxChange('moreThan200')}
          />
          Price more than 200
        </label>
      </div>

      {Object.values(priceRanges).some((value) => value) && (
  <div>
    <h2>Filtered Events</h2>
    <ul>
      {events.map((event) => (
        <li key={event._id}>{event.Title} {event.Category} {event.Location} - Price: {event.Price}</li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
};

export default EventSearchPerNight;
