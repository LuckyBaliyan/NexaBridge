import React from 'react';

const Button = ({type='',text='',onClick,className=''}) => {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`}>
        {text}
    </button>
  );
}


export default Button