"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import NextJsCarousel from './components/Carousel/Carousel'


export default function Home() {

  const [eventsSlider, setEventsSlider] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);

  const router = useRouter();

  async function fetchEventsSlider() {
   
    try {
      const response = await fetch(`http://localhost:3001/event/getSliderEvent`);
      if (!response.ok) {
        setEventsSlider([]);
        throw new Error('Failed to fetch Slider');
      }
      const eventsSliderData = await response.json();
      setEventsSlider(eventsSliderData.events);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchEventsSlider();
  }, [eventsSlider]);


  async function fetchPopularEvents() {
   
    try {
      const response = await fetch(`http://localhost:3001/event/getPopularEvent`);
      if (!response.ok) {
        setPopularEvents([]);
        throw new Error('Failed to fetch Popular Events');
      }
      const popularEventsData = await response.json();
      setPopularEvents(popularEventsData.events);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchPopularEvents();
  }, [popularEvents]);

  async function fetchFeaturedEvents() {
   
    try {
      const response = await fetch(`http://localhost:3001/event/getFeaturedEvent`);
      if (!response.ok) {
        setFeaturedEvents([]);
        throw new Error('Failed to fetch Featured Events');
      }
      const featuredEventsData = await response.json();

      setFeaturedEvents(featuredEventsData.events);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchFeaturedEvents();
  }, [featuredEvents]);

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
   
   <div className='bg-gradient-to-r'>    
       <NextJsCarousel eventsSlider={eventsSlider}/>

<div class="bg-gray-900 justify-between py-3 px-6 mx-6 rounded-xl">
<Link  href={{
            pathname:  '/movies',
            query: { MovieCategory:'popular' },
          }}  key={'popular_list'}> 
  <h2 className='text-gray-300 text-lg font-bold text-center hover:text-white'>Popular Events</h2></Link>
  </div>
      <ul className="flex flex-wrap justify-center">
     
          {popularEvents.map((event) => (

<li key={event._id} className="bg-white rounded-lg shadow-md p-6">
<Link href='#'>
<h3 className="text-xl font-semibold mb-4">{event.Title}</h3>
<p className="mb-2"><span className="font-semibold">Description:</span> {event.Description}</p>
<p className="mb-2"><span className="font-semibold">Category:</span> {event.Category}</p>
<p className="mb-2"><span className="font-semibold">Location:</span> {event.Location}</p>
<p className="mb-2"><span className="font-semibold">Start Date:</span> {event.StartDateTime && new Date(event.StartDateTime).toLocaleDateString()}</p>
<p className="mb-2"><span className="font-semibold">End Date:</span> {event.EndDateTime && new Date(event.EndDateTime).toLocaleDateString()}</p>
<p className="mb-2"><span className="font-semibold">Number of Attendees:</span> {event.NumberOfAttendees}</p>
<p className="mb-2"><span className="font-semibold">Price:</span> {event.Price}</p>
{event.Image && renderImage(event.Image.data, event.contentType)}
</Link>
</li>

           
          ))}
     
        </ul>

        <div className="bg-gray-900 justify-between py-3 px-6 mx-6 rounded-xl">
        <Link  href={{
            pathname: '/movies',
            query: { MovieCategory:'top_rated' },
          }}  key={'top_rated_list'}> 
          <h2 className='text-gray-300 text-lg font-bold text-center hover:text-white'>Featured Events</h2>
          </Link>
  </div>
      <ul className="flex flex-wrap justify-center">
     
          {featuredEvents.map((event) => (
          <li key={event._id} className="bg-white rounded-lg shadow-md p-6">
          <Link href='#'>
          <h3 className="text-xl font-semibold mb-4">{event.Title}</h3>
          <p className="mb-2"><span className="font-semibold">Description:</span> {event.Description}</p>
          <p className="mb-2"><span className="font-semibold">Category:</span> {event.Category}</p>
          <p className="mb-2"><span className="font-semibold">Location:</span> {event.Location}</p>
          <p className="mb-2"><span className="font-semibold">Start Date:</span> {event.StartDateTime && new Date(event.StartDateTime).toLocaleDateString()}</p>
          <p className="mb-2"><span className="font-semibold">End Date:</span> {event.EndDateTime && new Date(event.EndDateTime).toLocaleDateString()}</p>
          <p className="mb-2"><span className="font-semibold">Number of Attendees:</span> {event.NumberOfAttendees}</p>
          <p className="mb-2"><span className="font-semibold">Price:</span> {event.Price}</p>
          {event.Image && renderImage(event.Image.data, event.contentType)}
          </Link>
          </li>
          ))} 
        </ul>
    </div>
  );
}


// export async function getServerSideProps(context){
//   const eventsSliderResponse = await fetch (
//    `http://localhost:3001/event/getSliderEvent`
//    );
//   const eventsslider = await eventsSliderResponse.json();

//   const popularEventsResponse = await fetch (
//     `http://localhost:3001/event/getPopularEvent`,
//     options
//     );
//    const popularevents = await popularEvents.json();

   
//    const featuredEventsResponse = await fetch (
//     `http://localhost:3001/event/getFeaturedEvent`,
//     options
//     );
//    const featuredevents = await featuredEventsResponse.json();

//   return{
//     props: {
//       eventsSlider: eventsslider.results.slice(0, 12) || [],
//       popularEvents: popularevents.results.slice(0, 12) || [],
//       featuredEvents: featuredevents.results.slice(0, 12) || []
//     }
//   }
// }