'use client';

import React from 'react'
import Link from 'next/link';

type ButtonProps ={
    type : 'button' | 'submit';
    title : string;
    variant?: 'btn_white' | 'btn_dark_purple' | 'btn_gray' | 'btn_gray_border'| 'btn_black';
    customHeight?: string;
    customWidth?:string;
    font?: string;
    margin?:string;
    rounded?:string;
    color?:string;
    newPath?:string;
    onClick?: () => void;
}

const Button = ({type,title,variant,customHeight,customWidth,font,margin,rounded,color, newPath, onClick}: ButtonProps) => {

  return (

    <button onClick={onClick} className={`flexCenter cursor-pointer gap-3 border ${font} ${rounded} ${color}  ${variant} ${customHeight} ${customWidth} ${font} ${margin}`}
    type={type} >
        <label className='flex-wrap cursor-pointer whitespace-nowrap'> {title} </label>
    </button>
  )
}

export default Button