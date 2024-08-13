import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
    return(
        <nav className="flexBetween max-container padding-container relative z-30 py-5 "> 
        {/* //Link to home page */}
        <div className='relative flexBetween gap-9'>
        <Link href="/">
        <Image src ="/logonew.svg" alt="logo" width={170} height={30} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
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

        <Image
            src = "/menubar.png" 
            alt ="menu"
            width={32}
            height ={32}
            className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default Navbar