"use client";
import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import Link from 'next/link';

function NextJsCarousel({eventsSlider}) {

  const renderImage = (imageData, contentType) => {
    if (imageData && imageData.data) {
      const uint8Array = new Uint8Array(imageData.data);
      const blob = new Blob([uint8Array], { type: contentType });
      const imageUrl = URL.createObjectURL(blob);
      return <img src={imageUrl} className="rounded-2xl relative max-w-[1000px] h-[600px]"  alt="Event Image"  height="500px" />;
    } else {
      return <p>No image available</p>;
    }
  };

    return ( 
        <div> 
          <Carousel autoPlay> 
          {eventsSlider.map((event) => (
            <Link href='#'>
            <div key={event.id} className=' my-2'>
                 {event.Image && renderImage(event.Image.data, event.contentType)}
                   <p className="text-xl absolute -mt-16 z-50 bg-white py-1 text-black text-bold px-20 left-[290px] rounded-3xl">{event.Title}</p> 
                    
            </div>
            </Link>
          ))}
        
 
          </Carousel> 
        </div> 
    ); 
}

export default NextJsCarousel;