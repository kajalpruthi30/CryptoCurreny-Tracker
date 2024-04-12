import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div className='flex justify-center items-center w-full h-[70vh] bg-black text-blue z-1000'>
        <CircularProgress />
    </div>
  )
}

export default Loader
