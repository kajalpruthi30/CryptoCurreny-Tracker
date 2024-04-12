import React, {useEffect, useState} from 'react'
import SelectCoins from "../components/Compare/SelectCoins"
import SelectDays from "../components/Coin/SelectDays"
import Loader from '../components/Common/Loader'
import List from "../components/Dashboard/List"
import PriceType from '../components/Coin/PriceToggle'
import LineChart from '../components/Coin/LineChart'
import CoinInfo from '../components/Coin/CoinInfo'
import { coinObject } from '../functions/coinObject'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import { settingChartData } from '../functions/settingChartData'


function Compare() {

  const[loading, setLoading] = useState(true);

  const [crypto1, setCrypto1] = useState('bitcoin');
  const [crypto2, setCrypto2] = useState('ethereum');

  const [crypto1Data, setCrypto1Data] = useState([]);
  const [crypto2Data, setCrypto2Data] = useState([]);

  const[days, setDays] = useState(30);
  const[priceType, setPriceType] = useState('prices');

  const[chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    getData();
  }, [])
  


  async function getData(){
    setLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if(data1){
      coinObject(setCrypto1Data, data1);
    }

    if(data2){
      coinObject(setCrypto2Data, data2);
    }

    if(data1 && data2){
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      console.log(prices1);
      console.log(prices2);

      if(prices1 && prices2){
        settingChartData(setChartData, prices1, prices2, crypto1Data.name, crypto2Data.name);
        setLoading(false)
      }
    }
  }

 
  // Whenever a coin changes, change its id as well as change it data and then change the graph
  // setCryptoData is for list component
  // setChartData is for chart component
   
  const handleCoinChange = async (e, isCoin2) => {

    setLoading(true);

    const selectedCrypto = e.target.value;

    // Update the selected cryptocurrency state
    if (isCoin2) {
      setCrypto2(selectedCrypto);
    } else {
      setCrypto1(selectedCrypto);
    }
  
    // Fetch coin data based on the selected cryptocurrency
    const data = await getCoinData(selectedCrypto);
    if (data) {
      // Update the corresponding cryptocurrency data state
      if (isCoin2) {
        coinObject(setCrypto2Data, data);
      } else {
        coinObject(setCrypto1Data, data);
      }
    }

    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    settingChartData(setChartData, prices1, prices2, crypto1Data.name, crypto2Data.name);

    setLoading(false);
  }

   
  // const handleDaysChange = async(e) =>{
  //   setLoading(true);
  //   setDays(e.target.value)
  //   const prices1 = await getCoinPrices(crypto1, e.target.value, priceType);
  //   const prices2 = await getCoinPrices(crypto2, e.target.value, priceType);
  //   settingChartData(setChartData, prices1, prices2, crypto1Data.name, crypto2Data.name)
  // }

  return (
    <div className='mx-auto w-[90%]'>
      {loading ? <Loader/> : (
         <>
         {/* Select Coins and Select Days */}
          <div className='flex my-1'>
            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange}/>
            {/* <SelectDays days={days} handleDaysChange={handleDaysChange} /> */}
          </div>

          {/* Lists */}
          <div className='bg-darkgrey rounded-md mt-3 px-1'>
            {crypto1Data && <List coin = {crypto1Data} />}
          </div>
          <div className='bg-darkgrey rounded-md mb-3 px-1'>
            {crypto2Data && <List coin = {crypto2Data} />}
         </div>

         {/* Chart */}
         <div className='my-4 px-1'>
            <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
         </div>

          {/* Description */}
         <div className='bg-darkgrey rounded-md py-1.5 my-1 px-1'>
          {crypto1Data && <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />}
         </div>
         <div className='bg-darkgrey rounded-md py-1.5 px-1'>
          {crypto2Data && <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />}
        </div>
         </>
      )}
    </div>
  )
}

export default Compare
