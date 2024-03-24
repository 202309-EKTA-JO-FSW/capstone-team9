import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import '../../../style.css';

function CustomDropdown({ onSelectEvent }) {
  const [events, setEvents] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents =  () => {
    try {
      axios.get('http://localhost:3001/event/getEvents').then((response)=>{
        setEvents(response.data.events);
      });
     
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

// Dropdown component
const Dropdown = ({ options, onChange }) => {
  return (
    <select className="custom-dropdown" onChange={onChange}>
      {/* Map through options and create dropdown items */}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};



  const handleTitleSelect = ( event) => {
    const eventKey = event.target.value;

    const selectedEvent = events.find(event => event._id === eventKey);

    setSelectedTitle(selectedEvent?.Title);

    // Invoke onSelectEvent callback with the selected event's ID
    onSelectEvent(eventKey);
 
  };

  return (
    <div className="dropdown-container">
      <h1>Select Event</h1>
      <Dropdown options={events.map(event => ({ value: event._id, label: event.Title }))} onChange={handleTitleSelect} />

    </div>



  
  );
}

export default CustomDropdown;
