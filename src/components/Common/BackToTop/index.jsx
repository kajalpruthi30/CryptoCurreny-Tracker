import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function BackToTop() {

  let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  return (
    <div className='fixed flex justify-center items-center bottom-0.5 right-0.5 w-2.5 h-2.5 border-2 border-blue rounded-full m-1 cursor-pointer hover:bg-blue' id='topBtn' onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon className='text-blue hover:text-white'/>
    </div>
  )
}

export default BackToTop
