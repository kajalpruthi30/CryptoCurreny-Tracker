import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import {convertNumbers} from "../../../functions/convertNumbers"
import { Link } from 'react-router-dom';

function List({coin}) {
  return (

    <Link to = {`/coin/${coin.id}`}>
    <tr className='sm:text-[80%] md:text-[80%] lg:text-[85%] flex justify-between items-center hover:bg-darkgrey transition-colors duration-300 rounded-md'>
      <td className ='flex items-center gap-2 w-[24%] md:w-[22%] text-left sm:gap-0.5 md:gap-[0.7rem] lg:gap-[0.8rem]'>
          <img src={coin.image} className='h-3.5 w-3.5 sm:w-2 sm:h-2 md:h-2.5 md:w-2.5 lg:w-2.5 lg:h-2.5'/>
          <div>
            <p className='text-lg font-bold uppercase sm:text-sm md:text-sm lg:text-sm' style={{ letterSpacing: '1px' }}>{coin.symbol}</p>
            <Tooltip title="Coin Name" arrow><p className='text-grey'>{coin.name}</p></Tooltip>
          </div>
      </td>

      <td className=' w-[18%] text-left'>

        <Tooltip title="Price Change in 24hrs" arrow>
          <div className={`sm:min-w-[70px] md:min-w-[90px] inline-block min-w-[100px] text-center border-2 py-0.5 px-1.5 sm:px-[0.8rem] sm:py-[0.3rem] font-bold hover:text-white transition-colors duration-300 ${coin.price_change_percentage_24h > 0 ? 'text-green border-green hover:bg-green' : 'text-red border-red hover:bg-red'}`} style={{borderRadius: '20px'}}>
              {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        </Tooltip>

      </td>

    <Tooltip title="Current Price" arrow>
      <td className='flex gap-1 lg:gap-0.5 items-center my-2 w-[15%] text-left'>
        <div className={`min-w-[30px] sm:hidden md:hidden border-2 rounded-full h-2 w-2 flex justify-center items-center text-lg hover:text-white transition-colors duration-300 !important ${coin.price_change_percentage_24h > 0 ? 'text-green border-green hover:bg-green' : 'text-red border-red hover:bg-red'}`}>
          {coin.price_change_percentage_24h > 0 ? <TrendingUpRoundedIcon/> : <TrendingDownRoundedIcon/>}
        </div>

        <h3 className={`text-lg sm:text-sm md:text-sm lg:text-sm font-bold ${coin.price_change_percentage_24h > 0 ? 'text-green' : 'text-red'}`}>
          ${coin.current_price.toLocaleString()}
        </h3>

      </td>
    </Tooltip>  


    <td className='w-[15%] text-right md:text-left md:w-[17%] sm:hidden'>
      <Tooltip title="Total Volume" placement='bottom-end'>
        <p className='text-white '>${coin.total_volume.toLocaleString()}</p>
      </Tooltip>
    </td>

    <td className='w-[18%] text-right md:text-left'>
      {/* For large screens */}
      <Tooltip title="Market Cap">
        <p className='text-white sm:hidden'>${coin.market_cap.toLocaleString()}</p>
      </Tooltip>

      {/* For small screens */}
      <Tooltip title="Market Cap">
        <p className='hidden text-white sm:block'>${convertNumbers(coin.market_cap)}</p>
      </Tooltip>
    </td>

    </tr>
    </Link>
  )
}

export default List
