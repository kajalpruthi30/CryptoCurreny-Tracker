import React from 'react';

function Button({ text, outlined, onClick }) {
  return (
    <div
      className={`${outlined ? 'bg-black border-2 border-blue hover:bg-blue' : 'bg-blue hover:shadow-button font-bold'} text-white  py-0.5 px-1.5 cursor-pointer rounded-full transition duration-300 text-center font-bold`}
      style={{
        borderRadius: '3rem',
        transitionDuration: '300ms', 
        transitionProperty: 'box-shadow', 
        minWidth: '150px'
      }}
      onClick = {onClick}
    >
      {text}
    </div>
  );
}

export default Button;
