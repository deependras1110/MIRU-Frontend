import { __esModule } from 'react-lottie'
import './econtactcard.css'
import { IoMdCall } from 'react-icons/io';

function EContactCard({data}) {
  return (
    <div className='eccard-container'>
            <div className="eccard-top">
                {
                    data.name
                }
            </div>
           <div className="eccard-desc">
                {
                    data.desc
                }
           </div>
           <div className='ec-call'>
                <div className="call-left">

                </div>
                <div className="call-right">
                    <a className = "cr" href={"tel:" + data.number}>
                        <IoMdCall className='cr-icon'/>
                        {data.number}
                    </a>
                </div>
            </div>

            
    </div>
  )
}

export default EContactCard