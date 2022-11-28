import './qtcard.css'
import useAudioPlayer from '../../useAudioPlayer';
import Play from '../buttons/Play';
import Pause from '../buttons/Pause';

function QtCard({ data }) {

    return (
        <div className='qtcard-container'>
            <div className="qtcard-top">
                <div className="qt-en">
                    {
                        data.en
                    }
                </div>
                <div className="qt-jp">
                    {
                        data.jp
                    }
                </div>
            </div>
            <div className="qtcard-bottom">
                <div className="qt-pronounce">
                    {
                        data.enPronounication
                    }
                </div>
                <div className="qt-controls">
                    <audio controls id="audio" className='qt-audio' controlsList='noplaybackrate nodownload'>
                        <source type="audio/wav" src={data.fileURL} />
                    </audio>
                  
                </div>
            </div>

            {/* <div>
            {
                data.en
            }
        </div>
        <div>
            <audio controls id= "audio" className='qt-audio' controlsList='noplaybackrate nodownload'>
                 <source type="audio/wav" src={data.fileURL}/>
            </audio>
           
        </div> */}
        </div>
    )
}

export default QtCard