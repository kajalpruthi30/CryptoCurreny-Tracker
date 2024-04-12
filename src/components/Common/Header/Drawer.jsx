import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='hidden sm:flex md:flex justify-end items-center w-full'>
        <IconButton onClick={()=> setOpen(true)} className='px-0'><MenuRoundedIcon className='text-white px-0'/></IconButton>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className='bg-black h-full text-grey w-[40vw] block pt-1.5 pl-1'>
          <Link to='/'><p className='hover:text-white transition-colors duration-300 py-0.5'>Home</p></Link>
          <Link to='/'><p className='hover:text-white transition-colors duration-300 py-0.5'>Compare</p></Link>
          <Link to='/'><p className='hover:text-white transition-colors duration-300 py-0.5'>Dashboard</p></Link>
      </div>
        </Drawer>
    </div>
  );
}