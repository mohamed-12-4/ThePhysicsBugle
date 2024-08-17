"use client"
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Button from './Button';
import {useState,useEffect} from 'react'

const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    return(
        <nav className="flexBetween max-container padding-container relative py-5 "> 
        {/* //Link to home page */}
        <div className='  relative flexBetween gap-9'>
        <Link href="/">
        <Image src ="/logonew.svg" alt="logo" width={170} height={5} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex ">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-18 text-lightpurple-10 flexCenter cursor-pointer pb-0 transition-all hover:text-purple-500'>
                    {link.label}
                </Link>
            )
        )
            }
        </ul>
        </div>

        <div className='lg:flexCenter hidden gap-4'>
            <Button
            type="button"
            title="Log In"
            variant="btn_black"
            rounded='rounded-md'
            customHeight="custom-height"
            customWidth='custom-width-90'
            font="font-Lato"
            newPath='/login'
            />
            
            <Button 
            type="button"
            title="Sign Up"
            variant="btn_dark_purple"
            rounded='rounded-md'
            customHeight="custom-height"
            font="font-Lato"
            newPath='/signup'
            />
        </div>

        {/* <button onClick={toggleMenu} className="xl:hidden">
        {isOpen ? (<Image
            src = "/close.svg" 
            alt ="close"
            width={50}
            height ={32}
            className="relative inline-block cursor-pointer lg:hidden"
            />) : (
                <Image
                src = "/menu.svg" 
                alt ="menu"
                width={100}
                height ={32}
                className="inline-block cursor-pointer right-[-20px] relative lg:hidden"   
                />
            )}
            </button>
            {isOpen && (
               <div className = "flex flex-row h-20 w-screen bg-gray-80 border-white fixed top-20 left-0 z-30 md:hidden" >
               <div className =" flex px-2 pb-3 space-y-1 sm:px-3">
               <ul>
                {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-18 text-lightpurple-10 flexCenter cursor-pointer pb-0 transition-all hover:text-purple-500'>
                    {link.label}
                </Link>
            )
        )
            }
        </ul>
                </div>
               </div>
            )} */}
      <button onClick={() => setIsOpen(true)} className="lg:hidden">
        <Image
          src="/menu.svg"
          alt="menu"
          width={90}
          height={32}
          className="inline-block cursor-pointer relative"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-90 transition-transform transform duration-300 ease-in-out lg:hidden">
          <div className='w-full flex flex-row h-16 relative bg-gray-80 '>
          <button
            onClick={() => setIsOpen(false)}
            className=" mb-8 relative right-[-550px] bottom-[-5px] "
          >
            <Image
              src="/close.svg"
              alt="close"
              width={50}
              height={32}
              className="cursor-pointer "
            />
          </button>
          <Link href="/" className='relative bottom-[-20px] left-[-20px]'>
            <Image src ="/logonew.svg" alt="logo" width={180} height={5} />
            </Link>

          </div>
          <ul className="flex flex-col relative left-[-200px] py-10 space-y-6 ">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full text-center">
                <Link href={link.href} passHref>
                  <span
                    onClick={() => setIsOpen(false)} 
                    className="text-lightpurple-10 text-xl hover:text-purple-500 transition-all cursor-pointer"
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
        </nav>
    )
}

export default Navbar