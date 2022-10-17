import './activity.css'

function Activity(props) {
  return (
    <div className='activity-container'>
        <a  className='activity-link' target="_blank" href={props.activity.link}>
            {props.activity.name}
        </a>
        
    </div>
  )
}

export default Activity