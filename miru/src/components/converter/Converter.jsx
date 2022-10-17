import CurrencyRow from '../currencyRow/CurrencyRow'
import './converter.css'
import { useState, useEffect } from 'react'
import {CgArrowsExchangeAltV} from 'react-icons/cg'

function Converter() {

  const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest"
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  var myHeaders = new Headers();
  myHeaders.append("apikey", "1nFOxqP10JJtYmTcQIjlgBoki1sTKWXp");

  var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
  };

 useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?base=JPY", requestOptions)
    .then(response => response.json())
    .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])

    })
 },[])

useEffect(()=>{
    if(fromCurrency !=null && toCurrency !=null){
        fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
},[fromCurrency, toCurrency])

function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className='converter-container'>
        <CurrencyRow currencyOptions={currencyOptions} selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount} />
        <CgArrowsExchangeAltV className='eg-icon'/>
        <CurrencyRow currencyOptions={currencyOptions} selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}/>


    </div>
  )
}

export default Converter