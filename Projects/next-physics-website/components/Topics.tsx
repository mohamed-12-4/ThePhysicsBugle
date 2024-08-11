'use client';
import { TOPICS } from '@/constants'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image';
import React, {useState,useEffect} from 'react'

const Topics = () => {  
  const topics = ['Calculus 1', 'University Physics 1', 'General Chemistry 1', 'Linear Algebra', 'Calculus 2', 'University Physics 2', 'General Chemistry 2','Introduction to Computing with Python','Calculus 3'];
  const initialPostList =4;
  var count = 4;
  const totalPostList =topics.length;
  const incrementInitialPostList=2;
  const [visibleCount,setVisibleCount] = useState(initialPostList);
  const[items,setItems]=useState([])
  const handleLoadMore = () => {
    setVisibleCount((prevVisibleCount) => {
        const newCount = Math.min(prevVisibleCount + incrementInitialPostList, totalPostList);
        return newCount;
    });
};

  return (
    
    <section className="max-container padding-container flex flex-col py-16 z-30 ">
      <div className='flex-1 pb-14'>
      <h1 className="text-lightpurple-10 bold-26 lg:bold-32 italic">Embark on your Journey </h1>
      <p className='regular-16 my-6 text-lightpurple-10 xl:max-w-[520px]'> Select a topic that sparks your interest. </p>
      </div>
      <div className='relative flex-1 flex right-[-280px] xl:right-[-340px] xs:size-auto'>
       <Image src = "/rocket.svg"
         alt ="menu"
         width={330}
         height ={280}
         className="absolute top-[-250px] "
         />
      </div> 
      <div className='z-10'>
      <div>
      <div className='xl:hidden'>
      <ul className=" z-20 gap-12 lg:flex space-y-4 lg:space-y-0">
            {TOPICS.slice(0, visibleCount).map((link, index) => (
                <Link href={link.href}  key={link.key} className="regular-16 border border-lightpurple-10  text-lightpurple-10 cursor-pointer flexCenter transition-all hover:border-purple-500 hover:text-purple-500 px-4 py-1 pb-1 max-w-xs md:max-w-sm sm:max-w-md mx-auto">
                {link.label}
                </Link>
            ))}
        </ul>
        </div>
        <div className='hidden xl:block py-3'>
  <ul className="z-20 grid grid-cols-3 gap-12">
    {TOPICS.slice(0, totalPostList).map((link, index) => (
      <li key={link.key}>
        <Link href={link.href} className="regular-16 border border-lightpurple-10 text-lightpurple-10 cursor-pointer flexCenter transition-all hover:border-purple-500 hover:text-purple-500 px-4 py-1 pb-1">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>
        </div>
        <div className='py-10 xl:hidden flex justify-center'>
        {visibleCount < topics.length && (
                    <button onClick={handleLoadMore} className=' text-lightpurple-10 cursor-pointer transition-all border border-lightpurple-10 hover:text-purple-500 hover:border-purple-500 px-4 py-1 pb-1'>
                        Load More
                    </button>
                )}
        </div>
        </div>

      {/* <div className=" z-10 flex flex-wrap justify-center lg:justify-start gap-2 flex-col lg:flex-row">
            <Button
            type="button"
            title="Calculus 1"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            />
            <Button 
            type="button"
            title="Calculus 2"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            //margin="margin-20"
            />
            <Button 
            type="button"
            title="Calculus 3"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            //margin="margin-20"
            />
            <Button 
            type="button"
            title="University Physics 1"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            //margin="margin-20"
            />
            <Button 
            type="button"
            title="University Physics 2"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            //margin="margin-20"
            />
            <Button 
            type="button"
            title="General Chemistry 1"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            //margin="margin-20"
            />
            <Button 
            type="button"
            title="General Chemistry 2"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            //margin="margin-20"
            />
            <Button 
            type="button"
            title="Introduction to Computing with Python"
            variant="btn_black"
            customHeight="custom-height"
            //customWidth='custom-width-190'
            font="regular-16"
            />
            <Button 
            type="button"
            title="Differential Equation"
            variant="btn_black"
            customHeight="custom-height"
           customWidth='custom-width-190'
            font="regular-16"
            />
            <Button 
            type="button"
            title="Linear Algebra"
            variant="btn_black"
            customHeight="custom-height"
            customWidth='custom-width-190'
            font="regular-16"
            />
        </div> */}
           
        

    </section>
  )
}

export default Topics