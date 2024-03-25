import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddEventForm = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
    StartDateTime: '',
    EndDateTime: '',
    Category: '',
    Location: '',
    Image: '',
    Featured: false,
    Popular: false,
    Price: 0,
    NumberOfAttendees: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  // this part to diplay image
  const [imageFile, setImageFile] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['Title', 'Description', 'StartDateTime', 'EndDateTime', 'Category', 'Location'];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      toast.error(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('Title', formData.Title);
      formDataWithImage.append('Description', formData.Description);
      formDataWithImage.append('StartDateTime', formData.StartDateTime);
      formDataWithImage.append('Image', imageFile);
      formDataWithImage.append('EndDateTime', formData.EndDateTime);
      formDataWithImage.append('Category', formData.Category);
      formDataWithImage.append('Location', formData.Location);
      formDataWithImage.append('Featured', formData.Featured);
      formDataWithImage.append('Popular', formData.Popular);
      formDataWithImage.append('Price', formData.Price);
      formDataWithImage.append('NumberOfAttendees', formData.NumberOfAttendees);

      const response = await fetch('http://localhost:3001/event/addNewEvent', {
        method: 'POST',
        body: formDataWithImage,
      });

      if (!response.ok) {
        throw new Error('Failed to add event');
      }

      const responseData = await response.json();
      const imagePath = responseData.imagePath;
      console.log('Image path:', imagePath);

      // Handle success, e.g., show a success message or redirect
      console.log('Event added successfully:', responseData);
      toast.success('Event added successfully');

      // Reset the form after successful submission
      setFormData({
        Title: '',
        Description: '',
        StartDateTime: '',
        EndDateTime: '',
        Location: '',
        Image: '',
        Featured: false,
        Popular: false,
        Price: 0,
        NumberOfAttendees: 0,
      });
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error adding event:', error.message);
      toast.error(`Error adding event: ${error.message}`);

    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Add New Event : </h2>
        <br />
        <div className="mb-4 flex">
          {/* Title input */}
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
          {/* Description input */}
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium text-gray-600">Description:</label>
            <input
              type="text"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required // Add required attribute
            />
          </div>
        </div>
          <br />

          <label>Start Date:</label>
          <input 
          type="date"
           name="StartDateTime"
            value={formData.StartDateTime} 
            onChange={handleChange} 
            className="mt-1 p-2 w-full border rounded-md"
            required/>
          <br />
          <label>End Date:</label>
          <input 
            type="date" 
            name="EndDateTime" 
            value={formData.EndDateTime} 
            onChange={handleChange} 
            className="mt-1 p-2 w-full border rounded-md"
            required/>
          <br />
          <label>Category:</label>
          <input 
            type="text"
            name="Category" 
            value={formData.Category} 
            onChange={handleChange} 
            className="mt-1 p-2 w-full border rounded-md"
            required
            />

          <br />
          <label htmlFor="Image" className="block text-sm font-medium text-gray-700">
            Image:{' '}
          </label>
          <input
            type="file"
            id="Image"
            name="Image"
            onChange={handleImageChange}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          />
          <br />

          <label>Location:</label>

          <input 
          type="text"
             name="Location"
             value={formData.Location}
             onChange={handleChange}
             className="mt-1 p-2 w-full border rounded-md"
            required />

          <br />

          <label>Price:</label>
          <input
            type="Number"
            name="Price"
            value={formData.Price} 
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
             />

          <br />
          <label>NumberOfAttendees:</label>
          <input 
            type="Number"
            name="NumberOfAttendees"
            value={formData.NumberOfAttendees}
             onChange={handleChange} 
             className="mt-1 p-2 w-full border rounded-md"
            required
             />
          <br />

          <label>
            Featured:
            <input
              type="checkbox"
              name="Featured"
              checked={formData.Featured}
              onChange={handleCheckboxChange}
              
            />
          </label>
          <br />
          <label>
            Popular:
            <input
              type="checkbox"
              name="Popular"
              checked={formData.Popular}
              onChange={handleCheckboxChange}
            
            />
          </label>
          <br />

          {/* Add other input fields for the event properties */}
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Add Event
          </button>
      </form>
    </div>
  );
};

export default AddEventForm;
