import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Loader from '../components/Common/Loader'
import { coinObject } from '../functions/coinObject'
import List from "../components/Dashboard/List"
import CoinInfo from '../components/Coin/CoinInfo'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import LineChart from '../components/Coin/LineChart'
import SelectDays from '../components/Coin/SelectDays'
import {settingChartData} from '../functions/settingChartData'
import PriceToggle from '../components/Coin/PriceToggle'

function Coin() {

  const {id} = useParams();
  const[loading, setLoading] = useState(false);
  const[coinData, setCoinData] = useState();
  const[days, setDays] = useState(30);
  const[chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [priceType, setPriceType] = useState('prices');


  // useEffect(() => {
  //   if(id){
  //     getData();
  //   }
  // }, [id])

  // For the first Time
  const getData = async () => {
    // Getting details of individual coin
    setLoading(true);
    const data = await getCoinData(id);
    if(data){
      coinObject(setCoinData, data);
      // getting data according of individual coin
      const prices = await getCoinPrices(id, days, priceType);
      if(prices){
        settingChartData(setChartData, prices);
      }
      setLoading(false);
    }
  }

  // Handling Days change for select days Component
  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    
    // Getting day data for individual coin
    const data = await getCoinPrices(id, event.target.value, priceType);
    if(data){
      settingChartData(setChartData, data)
      setLoading(false);
    }
  }


  // Handling Price type Change for toggle price Component
  const handlePriceTypeChange = async (event, newValue) => {
    setLoading(true);
    setPriceType(newValue);

    // Choosing price type of individual coin
    const pricesType = await getCoinPrices(id, days, newValue);

    if(pricesType){
      settingChartData(setChartData, pricesType)
      setLoading(false);
    }
  };



  return (
    <div>
      {loading ? <Loader/> : (
        <>
        <div className='bg-darkgrey rounded-md mx-auto px-1 w-[90%] '>
            {/* {coinData && <List coin = {coinData} />} */}
        </div>

        <div className='bg-darkgrey rounded-md my-1.5 mx-auto px-1.5 py-2 w-[90%]'>
          {/* <SelectDays days={days} handleDaysChange={handleDaysChange} className='mb-1'/> */}
          {/* <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/> */}
          {/* <LineChart chartData={chartData} priceType={priceType} multiAxis={false}/> */}
        </div>

        <div className='bg-darkgrey rounded-md mx-auto px-1.5 py-1.5 w-[90%]'>
          {/* {coinData && <CoinInfo heading={coinData.name} desc={coinData.desc} />} */}
        </div>
        </>
      )}
    </div>
  )
}

export default Coin
