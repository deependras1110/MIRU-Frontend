import './emergencycontact.css'
import { IoMdCall } from 'react-icons/io';
import { studyAbroadContacts } from '../../data/studyAbroadContacts';
import EContactCard from '../../components/econtactCard/EContactCard';

function EmergencyContacts() {
  return (
    <div className='ec-container'>
        <div className='page-head'>
            <IoMdCall/>
            <div className='page-head-txt'>Emergency Contacts</div>
        </div>
        <div className="ec-contacts">
              {
                studyAbroadContacts.map((c) => <EContactCard data={c}/>)
              }
        </div>
        
    </div>
  )
}

export default EmergencyContacts