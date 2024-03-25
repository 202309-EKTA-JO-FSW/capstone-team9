import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import eventInfo from './eventInfo'

const GET_EVENT_DETAILS_ENDPOINT = "http://localhost:3001/event/getEventDetials";


 export async function getStaticPaths() {

     const response = await fetch (GET_EVENT_DETAILS_ENDPOINT, options);
     const events = await response.json();
     const paths =events.results.map((event)=>(
         {
             params:{_id: event._id.toString()},

         } ));

     return {      
       paths,     
         fallback: false, // false or "blocking"
    };
 }

 export async function getStaticProps ({params}){
  const {_id} = params;
  const response = await fetch(`${GET_EVENT_DETAILS_ENDPOINT}/${_id}`);
  const event = await response.json();
  return{
    props:{
      event,
    },
  };
 }


 export default function Event({event}){
  return <eventInfo event={event} />
 }
