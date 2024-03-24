"use client";

import React, { useState, useEffect } from 'react';
import SerachEvent from '../SerachEvent';
import SearchPerNight from '../Serachpernight';
import Link from "next/link"

function SearchEvents  ()  {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSearch = async (searchParams) => {

    setLoading(true);

    const apiUrl = `http://localhost:3001/search/searchEvent?${new URLSearchParams(searchParams)}`;

    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);

      // Check if the response is successful
      if (!response.ok) {
        // If response is not ok, throw an error
        throw new Error('Failed to fetch events');
      }

      // Parse the JSON response
      const data = await response.json();

      // Update the search results state with the fetched data
      setSearchResults(data);

      // Reset error state
      setError(null);
    } catch (error) {
      // If an error occurs during the fetch operation, log the error and set error state
      console.error('Error searching events:', error);
      setError(error.message);
    } finally {
      // Set loading state to false when the search operation completes
      setLoading(false);
      console.log('Search Parameters:', searchParams);

    }
  };
  useEffect(() => {
    // Initial search or search parameter changes
    // Pass empty searchParams to trigger initial search
    handleSearch({});
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const renderImage = (imageData, contentType) => {
    if (imageData && imageData.data) {
      const uint8Array = new Uint8Array(imageData.data);
      const blob = new Blob([uint8Array], { type: contentType });
      const imageUrl = URL.createObjectURL(blob);
      return <img src={imageUrl} alt="Event Image" width="300" height="300" />;
    } else {
      return <p>No image available</p>;
    }
  };

  return (
    <div className="container mx-auto px-10 sm:px-8 py-8">
      <SerachEvent onSearch={handleSearch} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Event Details:  </h2>
        <div>
          {searchResults && searchResults.length > 0 ? (

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((event) => (
                <Link href={`/Events/SearchEvents/${event._id}`} key={event._id}>

                <li key={event._id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.Title}</h3>
                  <p className="mb-2"><span className="font-semibold">Description:</span> {event.Description}</p>
                  <p className="mb-2"><span className="font-semibold">Category:</span> {event.Category}</p>
                  <p className="mb-2"><span className="font-semibold">Location:</span> {event.Location}</p>
                  <p className="mb-2"><span className="font-semibold">Start Date:</span> {event.StartDateTime && new Date(event.StartDateTime).toLocaleDateString()}</p>
                  <p className="mb-2"><span className="font-semibold">End Date:</span> {event.EndDateTime && new Date(event.EndDateTime).toLocaleDateString()}</p>
                  <p className="mb-2"><span className="font-semibold">Number of Attendees:</span> {event.NumberOfAttendees}</p>
                  <p className="mb-2"><span className="font-semibold">Price:</span> {event.Price}</p>
                  {event.Image && renderImage(event.Image.data, event.contentType)}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

                </li>
                </Link>

              ))}
            </ul>

          ) : (
            <p>No search results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;

