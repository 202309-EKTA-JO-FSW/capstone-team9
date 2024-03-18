import React, { useState, useEffect } from 'react';
import SerachEvent from '../SerachEvent';
import SearchPerNight from '../Serachpernight';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchParams) => {
    // Replace this with your actual API endpoint and query parameters
    const apiUrl = `http://localhost:3001/search/searchEvent?${new URLSearchParams(searchParams)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching events:', error);
    }
  };

  const renderImage = (imageData, contentType) => {
    const uint8Array = new Uint8Array(imageData.data);
    const blob = new Blob([uint8Array], { type: contentType });
    const imageUrl = URL.createObjectURL(blob);
    return <img src={imageUrl} alt="Event Image" width='300' height='300' />;
  };

  return (
    <div>
      <SerachEvent onSearch={handleSearch} />
      {/* Display search results */}
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((event) => (
            <li key={event._id}>
              <h3>{event.Title}</h3>
              <p>Description: {event.Description}</p>
              <p>Category: {event.Category}</p>
              <p>Location: {event.Location}</p>
              <p>Start Date: {event.StartDateTime && new Date(event.StartDateTime).toLocaleDateString()}</p>
              <p>End Date: {event.EndDateTime && new Date(event.EndDateTime).toLocaleDateString()}</p>
              <p>Number of Attendees: {event.NumberOfAttendees}</p>
              <p>Price: {event.Price}</p>
              <p>Creator: {event.Creator}</p>
              {/* Render image if available */}
              {event.Image && renderImage(event.Image.data, event.contentType, 300, 300)}
            </li>
          ))}
          <SearchPerNight />
        </ul>
      </div>
    </div>
  );
};

export default App;
