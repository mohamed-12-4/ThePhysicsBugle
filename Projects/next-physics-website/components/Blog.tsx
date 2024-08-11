import React from 'react'
import Button from './Button';
import Image from 'next/image';
import Div from './Div';
interface blogProps {
  Border?: string;
  backgroundImage?:string;
  
}

const Articles = ({Border, backgroundImage}:blogProps) => {
  return(
    <div className={` xl:justify-center h-full w-full min-w-[1100px] flex bg-cover bg-no-repeat lg:rounded-r-5xl 2x:rounded-r-5xl`}>
       <Div 
        title="COSMIC MICROWAVE BACKGROUND"
        author="Adel H. Al-yoorby"
        rounded='rounded-md'
        customHeight="custom-height-337"
        customWidth='custom-width-300'
        font="font-Lato"
        backgroundImage="bg-bg-img-2"
        margin='margin-0'
        padding='padding-0'
        >
        </Div>
        
        <Div 
        title="BERNOULLI'S PRINCIPLE"
        author="Adel H. Al-yoorby"
        rounded='rounded-md'
        customHeight="custom-height-337"
        customWidth='custom-width-300'
        font="font-Lato"
        backgroundImage="bg-bg-img-3"
        margin='margin-0'
        padding='padding-0'
        >
        </Div>
        </div>
  )
}
const Blog = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col ">
    <div className=' pb-14 flex-col flexCenter'>
    <h1 className="text-lightpurple-10 bold-26 lg:bold-32 italic flexCenter ">Physics Insights </h1>
    <p className='regular-16 my-6 max-w-[520px] text-lightpurple-10 xl:max-w-[520px] text-center'> Blast off into the world of physics with our blog, where every post is a rocket launch into the wonders of mechanics, electromagnetism, and the mysteries of the cosmos.  </p>
    </div>
    <div className=" hide-scrollbar flex h-[340px] w-full items-start justify-start gap-10 overflow-x-auto h-[450px] lg:g-[-400px] xl:h-[450px]">
    <Articles />
    </div>
    </section>
  )
}

export default Blog