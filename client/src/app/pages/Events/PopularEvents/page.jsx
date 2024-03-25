"use client";
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Link from 'next/link';


const App = () => {
  const [popularEvents, setPopularEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getPopularEvents = async () => {

    setLoading(true);

    const apiUrl = `http://localhost:3001/event/getPopularEvent`;

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
      setPopularEvents(data.events);

      // Reset error state
      setError(null);
    } catch (error) {
      // If an error occurs during the fetch operation, log the error and set error state
      console.error('Error getting populr events:', error);
      setError(error.message);
    } finally {
      // Set loading state to false when the search operation completes
      setLoading(false);

    }
  };
  useEffect(() => {
    // Initial search or search parameter changes
    // Pass empty searchParams to trigger initial search
    getPopularEvents();
  }, [popularEvents]); // Empty dependency array ensures the effect runs only once after initial render

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
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Events:  </h2>

        <Grid container spacing={3}>
          {popularEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event._id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {event.Image && renderImage(event.Image.data, event.contentType)}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
                    {event.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial' }}>
                    <p><span className="font-semibold">Description:</span> {event.Description}</p>
                    <p><span className="font-semibold">Category:</span> {event.Category}</p>
                    <p><span className="font-semibold">Location:</span> {event.Location}</p>
                    <p><span className="font-semibold">Start Date:</span> {event.StartDateTime && new Date(event.StartDateTime).toLocaleDateString()}</p>
                    <p><span className="font-semibold">End Date:</span> {event.EndDateTime && new Date(event.EndDateTime).toLocaleDateString()}</p>
                    <p><span className="font-semibold">Number of Attendees:</span> {event.NumberOfAttendees}</p>
                    <p><span className="font-semibold">Price:</span> {event.Price}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="/pages/Events/BuyTicket">
                    <Button size="small">Buy This tiket</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default App;