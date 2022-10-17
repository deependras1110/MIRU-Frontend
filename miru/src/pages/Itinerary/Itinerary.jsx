import './itinerary.css'
import TripCard from '../../components/tripCard/TripCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {  BsCalendarEvent } from 'react-icons/bs';



function Itinerary() {
  const [tripdata, setTripdata] = useState([]);
  const serverURL = "http://localhost:8000/api/itineraryday"

  useEffect(()=>{
    axios.get(serverURL).then((res) => {
      setTripdata(res.data);
    })
  },[])

  return (
    <div className='itinerary-container'>
        <div className='page-head'>
          <BsCalendarEvent/>
          <div className='page-head-txt'>Itinerary</div>
        </div>
        <div className='current-day-card'></div>
        
        <div className='trip-cards'>
          {
            tripdata.length !== 0 ? 
            <>
            {
                tripdata.map((data, index ) => {
                  return <TripCard data={data} index={index}/>
                })
            }
            </> 
            : <div className='ser-err-msg'>Unable to get the trip info</div>
          }
            
        </div>
        
    </div>
  )
}

export default Itinerary