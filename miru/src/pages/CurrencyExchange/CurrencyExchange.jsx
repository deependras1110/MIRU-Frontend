import React from 'react'
import {RiExchangeDollarLine} from 'react-icons/ri'
import Converter from '../../components/converter/Converter'


function CurrencyExchange() {
  return (
    <div className='ce-container'>
        <div className='page-head'>
            <RiExchangeDollarLine/>
          <div className='page-head-txt'>Currency Converter</div>
        </div>
        <Converter/>

    </div>
  )
}

export default CurrencyExchange