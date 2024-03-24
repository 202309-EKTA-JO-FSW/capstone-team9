import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

function CustomDropdown({ onSelectEvent }) { // Receive onSelectEvent as a prop
  const [events, setEvents] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/event/getEvents');
      setEvents(response.data.events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleTitleSelect = (eventKey, event) => {
    const selectedEvent = events.find(event => event._id === eventKey);
    setSelectedTitle(selectedEvent?.Title);

    // Invoke onSelectEvent callback with the selected event's ID
    onSelectEvent(eventKey);
  };

  return (
    <div className="container mt-4">
      <Dropdown onSelect={handleTitleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedTitle || 'Select Event'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {events.map(event => (
            <Dropdown.Item key={event._id} eventKey={event._id}>{event.Title}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CustomDropdown;
