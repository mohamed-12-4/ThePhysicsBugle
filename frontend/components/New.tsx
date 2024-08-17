import React from 'react'
import Image from 'next/image';
import Button from './Button';
import Div from './Div';
const New = () => {
  return (
    <section className="max-container flex flex-col py-16 z-30 ">
    <div className='relative flex justify-center items-center pb-14'>
  {/* <div className='absolute flex  '>
    <Image 
      src="/glowborder.svg"
      alt="menu"
      width={330}
      height={280}
      className="z-10"
    />
  </div> */}
  <div className='absolute flex top-[-30px] '>
  <h1 className="text-lightpurple-10 bold-26 lg:bold-32 italic z-20 ">
    New Courses
  </h1>
  </div>
</div>
<div className='hide-scrollbar gap-10 flex w-full items-start justify-start overflow-x-auto h-[650px] lg:g-[-400px] xl:h-[650px]'>
<div className=' relative flex-1 flexCenter top-[-50px] xl:mx-10'>
<div className=' flex-1 flex flex-col items-center'>
  <Image 
    src="/astro.svg"
    alt="menu"
    width={230}
    height={280}
    className="z-10"
  />
  <Div 
    title="University Physics 1"
    rounded='rounded-md'
    customHeight="custom-height-337"
    customWidth='custom-width-300'
    font="font-Lato"
    backgroundImage="bg-bg-img-4"
    margin='margin-0'
    padding='padding-0'
  />
</div>
<div className='flex-1 flex flex-col items-center'>
  <Image 
    src="/astro.svg"
    alt="menu"
    width={230}
    height={280}
    className="z-10"
  />
  <Div 
    title="Calculus 1"
    author="Adel H. Al-yoorby"
    rounded='rounded-md'
    customHeight="custom-height-337"
    customWidth='custom-width-300'
    font="font-Lato"
    backgroundImage="bg-bg-img-5"
    margin='margin-0'
    padding='padding-0'
  />
</div>
<div className='flex-1 flex flex-col items-center'>
  <Image 
    src="/astro.svg"
    alt="menu"
    width={230}
    height={280}
    className="z-10"
  />
  <Div 
    title="Linear Algebra"
    author="Adel H. Al-yoorby"
    rounded='rounded-md'
    customHeight="custom-height-337"
    customWidth='custom-width-300'
    font="font-Lato"
    backgroundImage="bg-bg-img-6"
    margin='margin-0'
    padding='padding-0'
  />
</div>
    </div>
    </div>


    </section>
  )
}

export default New