import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function Grid({coin}) {

  return (

    <Link to = {`/coin/${coin.id}`}>
    <div className={`w-[350px] h-[350px] md:w-[320px] md:h-[320px] bg-darkgrey border-2 border-darkgrey rounded-md px-1.5 py-2 transition-colors duration-300 ${coin.price_change_percentage_24h > 0 ? 'hover:border-green' : 'hover:border-red'}`}>

      <div className='flex items-center gap-1'>
        <img src={coin.image} className='h-3.5 w-3.5'/>
        <div>
          <p className='text-lg font-bold uppercase' style={{ letterSpacing: '1px' }}>{coin.symbol}</p>
          <p className='text-grey'>{coin.name}</p>
        </div>
      </div> 

      <div className='flex gap-1 items-center my-2'>
        <div className={`border-2 rounded-full py-0.5 px-1.5 text-center font-bold hover:text-white transition-colors duration-300 ${coin.price_change_percentage_24h > 0 ? 'text-green border-green hover:bg-green' : 'text-red border-red hover:bg-red'}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
      
        <div className={` border-2 rounded-full h-2 w-2 flex justify-center items-center text-lg hover:text-white transition-colors duration-300 ${coin.price_change_percentage_24h > 0 ? 'text-green border-green hover:bg-green' : 'text-red border-red hover:bg-red'}`}>
         {coin.price_change_percentage_24h > 0 ? <TrendingUpRoundedIcon/> : <TrendingDownRoundedIcon/>}
        </div>
      </div>

      <div className=''>
        <h3 className={`text-lg font-bold ${coin.price_change_percentage_24h > 0 ? 'text-green' : 'text-red'}`}>
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className='text-grey mt-1'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
        <p className='text-grey mt-1'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
      </div>

    </div>
    </Link>
  )
}

export default Grid
