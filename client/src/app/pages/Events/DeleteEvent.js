import React, { useState, useEffect } from 'react';

const EventForm = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null); // State for delete success message

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/event/getEvents');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.events); // Set the events array from the response
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCheckboxChange = (event) => {
    const eventId = event.target.value;
    setSelectedEvents((prevSelectedEvents) =>
      prevSelectedEvents.includes(eventId)
        ? prevSelectedEvents.filter((id) => id !== eventId)
        : [...prevSelectedEvents, eventId]
    );
  };

  const handleDeleteSelectedEvents = async () => {
    try {
      await Promise.all(
        selectedEvents.map(async (id) => {
          await fetch(`http://localhost:3001/event/deleteaEvent/${id}`, {
            method: 'DELETE',
          });
        })
      );
      // Remove the deleted events from the events array
      setEvents((prevEvents) =>
        prevEvents.filter((event) => !selectedEvents.includes(event._id))
      );
      // Clear the selected events array
      setSelectedEvents([]);
      // Set delete message
      setDeleteMessage('Selected events deleted successfully!');
    } catch (error) {
      console.error('Error deleting selected events:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>List of Events</h1>
      {deleteMessage && <div style={{ color: 'green' }}>{deleteMessage}</div>} {/* Display delete success message with green color */}
      <button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleDeleteSelectedEvents}>Delete Selected Events</button> {/* Black button with white text */}
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <input
              type="checkbox"
              value={event._id}
              checked={selectedEvents.includes(event._id)}
              onChange={handleCheckboxChange}
            />
            <label>{event.Title}</label>
            <p>Category: {event.Category}</p>
            <p>Description: {event.Description}</p>
            <p>Location: {event.Location}</p>
            {/* Add more event details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventForm;
