import React, {useState, useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {get100Coins} from "../../../functions/get100Coins"

function SelectCoins({crypto1, crypto2, handleCoinChange}) {

   const[loading, setLoading] = useState('true');
   const[allCoins, setAllCoins] = useState([]);


   const style = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
        color: "var(--white)",
        },
        "&:hover": {
        "&& fieldset": {
            borderColor: "#3a80e9",
        },
     }
   } 

   useEffect(() => {
    fetchData();
   }, [])

   
  const fetchData = async() => {
    setLoading(true)
    const coins = await get100Coins();
    if(coins){
      setAllCoins(coins);
    }
    setLoading(false);
  }

  return (
    <div className='flex items-center gap-1.5 mx-1.5'>
      <p>Crypto1</p>  
      <Select
          sx={style}  
          value={crypto1}
          label="Crypto1"
          onChange={(e) => handleCoinChange(e, false)}
        >
          {allCoins.filter((item) => item.id != crypto2).map((coin, i) =>
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
        )}
        </Select>

        <p>Crypto2</p>  
      <Select
          sx={style}  
          value={crypto2}
          label="Crypto2"
          onChange={(e) => handleCoinChange(e, true)}
        >
          {allCoins.filter((item) => item.id != crypto1).map((coin) =>
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
        )}
        </Select>
    </div>
  )
}

export default SelectCoins
