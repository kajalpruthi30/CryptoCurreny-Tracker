import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search, onSearchChange}) {

  return (
    <div className='flex items-center gap-1 px-1.5 py-1 text-grey m-1 rounded-3xl bg-darkgrey mx-auto w-[80%]'>
      <SearchRoundedIcon />
      <input className='bg-darkgrey focus:outline-none text-lg' 
             style={{width: '100%'}} placeholder='Search...'
             value={search}
             onChange={onSearchChange}/>
    </div>
  )
}

export default Search
