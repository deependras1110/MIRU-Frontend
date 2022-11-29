import React from 'react'
import { IoMdCall } from 'react-icons/io'
import DiCard from '../../components/diCard/DiCard'
import { dorms } from '../../data/dorms'
import { RiHotelFill } from 'react-icons/ri'

function DormInformation() {
  return (
    <div className='di-container'>
        <div className='page-head'>
            <RiHotelFill/>
            <div className='page-head-txt'>Dorm Information</div>
        </div>
        <div className='di-cards'>
            {
                dorms.map((d) => {
                    return <DiCard data={d}/>
                })
            }
        </div>
        
    </div>
  )
}

export default DormInformation