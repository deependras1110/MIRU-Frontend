import './quicktranslation.css'
import { TbLanguage } from 'react-icons/tb';
import { audioFiles } from '../../data/audioFiles';
import QtCard from '../../components/QtCard/QtCard';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function QuickTranslation() {
 const [searchInput, setSearchInput] = useState("");
 const [filteredFiles, setFilteredFiles] = useState(audioFiles)

 const searchAudios = (searchValue) => {
        setSearchInput(searchValue)
        const filteredData = audioFiles.filter(item => 
            item.en.toLowerCase().includes(searchValue.toLowerCase())
        )
       setFilteredFiles(filteredData)
 }

  return (
    <div className='qt-container'>
        <div className='page-head'>
            <TbLanguage/>
            <div className='page-head-txt'>Quick Translation</div>
            
        </div>
        <div className="qt-sbcontainer">

            <AiOutlineSearch/>
            <input className="qt-searchbar" placeholder='Search By English Phrase' onChange={ (e) => searchAudios(e.target.value)} />

        </div>
        
        <div className="qt-cards">
            {
                filteredFiles.map((a) => {
                    return <QtCard data={a}/>
                })
            }
        </div>
    </div>
  )
}

export default QuickTranslation