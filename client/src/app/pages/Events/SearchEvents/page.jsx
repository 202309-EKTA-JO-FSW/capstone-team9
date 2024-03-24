"use client";

import React, { useState, useEffect } from 'react';
import SerachEvent from '../SerachEvent';
import SearchPerNight from '../Serachpernight';
import Link from "next/link";
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'; // Import Material-UI components

function SearchEvents() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async (searchParams) => {
    setLoading(true);
    const apiUrl = `http://localhost:3001/search/searchEvent?${new URLSearchParams(searchParams)}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setSearchResults(data);
      setError(null);
    } catch (error) {
      console.error('Error searching events:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    handleSearch({});
  }, []);

  const renderImage = (imageData, contentType) => {
    if (imageData && imageData.data) {
      const uint8Array = new Uint8Array(imageData.data);
      const blob = new Blob([uint8Array], { type: contentType });
      const imageUrl = URL.createObjectURL(blob);
      return <CardMedia component="img" src={imageUrl} alt="Event Image" height="140" />;
    } else {
      return <p>No image available</p>;
    }
  };

  return (
    <div className="container mx-auto px-10 sm:px-8 py-8">
      <SerachEvent onSearch={handleSearch} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Event Details:  </h2>
        <Grid container spacing={3}>
          {searchResults.map((event) => (
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

    </div>
  );
};

export default SearchEvents;
