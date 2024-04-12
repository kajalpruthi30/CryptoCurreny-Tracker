import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function PriceToggle({priceType, handlePriceTypeChange}) {

  return (

    <div className='flex justify-center items-center my-1'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={(e, value) => handlePriceTypeChange(e, value)}
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },

        // Inline styles for small screens
        '@media (max-width: 800px)': {
          "& .css-ueukts-MuiButtonBase-root-MuiToggleButton-root": {
            padding: '4px !important',
            fontSize: '0.6rem !important',
          }
        }
      }}
    >
      <ToggleButton value="prices">Price</ToggleButton>
      <ToggleButton value="market_caps">Market Cap</ToggleButton>
      <ToggleButton value="total_volumes">Total Volume</ToggleButton>
     
    </ToggleButtonGroup>
    </div>
  );
}