import React from 'react'
import Button from './Button';
import Image from 'next/image';
type DivProps ={
    title : string;
    variant?: 'btn_white' | 'btn_dark_purple' | 'btn_gray' | 'btn_gray_border'| 'btn_black';
    customHeight?: string;
    customWidth?:string;
    font?: string;
    margin?:string;
    rounded?:string;
    backgroundImage?:string;
    padding?:string;
    author?:string;
}

const Div = ({title,variant,customHeight,customWidth,font,margin,rounded,backgroundImage,padding,author}: DivProps) => {
  return (
    <div className={` justify-end items-center flex flex-row flex-wrap flexCenter mx-6 border pb-32 cursor-pointer ${rounded} ${customHeight} ${customWidth} space-y-0`}>
        <div className={`w-full max-container padding-container py-32 pb-10 m-0 cursor-pointer ${backgroundImage} bg-cover bg-no-repeat space-y-0 rounded-md`}>
        </div>
        <label className='cursor-pointer z-20 py-10 bold-16 text-lightpurple-10 text-center flexCenter max-w-[100px] '> {title} </label>
    </div>
  )
}

export default Div