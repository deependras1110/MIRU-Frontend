import './tripcard.css'
import Activity from '../activity/Activity'
import { useState, useEffect} from 'react'
import { format } from 'date-fns'
import Moment from 'moment'; 

function TripCard(props) {
  const [activities, setActivities] = useState(props.data.activities)
  const date = Moment(props.data.date).format('MMM Do YYYY');
  return (
    <div className='tripcard-container'>
      <div className='tc-top'>
        <div className='tc-head'>{date}</div>
        <div className='tc-head'>{"Day-"+ (props.index + 1)}</div>
      </div>
      <div className='tc-title'>{props.data.dayTitle}</div>
      <div className='tc-desc'>
        {props.data.desc}
      </div>
      <div className='tc-bottom'>
          {
            props.data.activities.length !== 0 ? <>{activities.map((activity)=>{
              return <Activity activity={activity}/>
            })}</> : <></>
          }
      </div>
    </div>
  )
}

export default TripCard