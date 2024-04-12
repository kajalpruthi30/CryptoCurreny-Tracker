import React from 'react'
import Drawer from "./Drawer"
import Button from '../Button'
import { Link } from 'react-router-dom'
function Header() {
  return (

    <div className='flex items-center py-1.5 px-3 sticky top-0 left-0 sm:py-0.5 md:py-0.5 sm:px-1 md:px-1 bg-black z-1000'>
      <h1 className='font-bold sm:text-2xl'>CryptoTracker<span className='text-blue'>.</span></h1>

      {/* For normal screen */}
      <div className='flex items-center justify-end gap-1.5 w-full text-grey text-lg sm:hidden md:hidden'>
        <Link to='/'><p className='hover:text-white transition-colors duration-300'>Home</p></Link>
        <Link to='/compare'><p className='hover:text-white transition-colors duration-300'>Compare</p></Link>
        <Link to='/dashboard'><Button text={"Dashboard"}></Button></Link>
      </div>

      <Drawer/>
    </div>
  )
}

export default Header
