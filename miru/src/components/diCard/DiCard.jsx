import './dicard.css'
import { IoIosNavigate } from 'react-icons/io'

function DiCard({data}) {
  return (
    <div className='di-cardcontainer'>
        <div className="di-cardtop">
            <div className="di-name">
                {
                    data.name
                }
            </div>
            <div className="di-city">
                {
                    data.city
                }
            </div>
        </div>
        <div className="di-cardbottom">
            <div className="left">
                <a href={data.dormLink}> Dorm Website</a>
            </div>
            <div className="right">
                <a href={data.mapLink}><IoIosNavigate className='navigate-icon'/></a>
            </div>
        </div>

    </div>
  )
}

export default DiCard