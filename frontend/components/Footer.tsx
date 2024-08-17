import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FOOTER_LEARN_LINKS,FOOTER_RESOURCES_LINKS, FOOTER_SOCIALS_LINKS, TOPICS, SOCIALS } from '@/constants'
const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className=' padding-container max-container flex w-full flex-col gap-14'>
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
        <Link href ="/" className ="mb-10">
        <Image src ="logonew.svg" alt="logo" width={190} height={10}/>
        </Link>
        <ul className="regular-16 flex flex-col gap-4 text-gray-20">
        <div className='flex flex-col gap-5'>
      <h4 className='bold-20 text-lightpurple-10 whitespace-nowrap'> Learn More</h4>
      </div>
        {FOOTER_LEARN_LINKS.map((link) => (
              <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer transition-all hover:text-purple-500"
            >
              {link.label}
            </Link>
          ))}
          </ul>
        
        <ul className="regular-16 flex flex-col gap-4 text-gray-20 py-3 xl:py-0">
        <div className='flex flex-col gap-5'>
      <h4 className='bold-20 text-lightpurple-10 whitespace-nowrap'> Resources</h4>
      </div>
        {FOOTER_RESOURCES_LINKS.map((link) => (
              <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer transition-all hover:text-purple-500"
            >
              {link.label}
            </Link>
          ))}
          </ul>

          
          <ul className="regular-16 flex flex-col gap-4 text-gray-20 py-3 xl:py-0">
        <div className='flex flex-col gap-5'>
      <h4 className='bold-20 text-lightpurple-10 whitespace-nowrap'> Topics </h4>
      </div>
        {TOPICS.map((link) => (
              <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer transition-all hover:text-purple-500"
            >
              {link.label}
            </Link>
          ))}
          </ul>
          
      <div className='flex flex-col gap-5'>
      <h4 className='bold-20 text-lightpurple-10 whitespace-nowrap'> Socials </h4>
      
      <div className='flex flex-row gap-4'>
        {FOOTER_SOCIALS_LINKS.map((link) => (
              <a
              href={link.href}
              target="_blank" 
              key={link.key}
              className="cursor-pointer transition-all hover:text-purple-500 "
            >
                  <Image src={link.label} alt="logo" width={40} height={24} />
                  </a>
          ))}
          </div>
          </div>
          



        {/* <div className='flex flex-col gap-5'>
            <div className="flex flex-col gap-5">
              <FooterColumn title ={SOCIALS.title}>
               <ul className="regular-14 flex gap-4 text-lightpurple-10">
                {SOCIALS.links.map((link) => 
                <Link href="/" key={link}>
                  <Image src={link} alt="logo" width={24} height={24} />
                  
                </Link>
                )}
                </ul> 
              </FooterColumn>

            </div>
        </div>
 */}
      </div>
      </div>
    </footer>
  )
}
type FooterColumnProps ={
  title:string;
  children: React.ReactNode;
}
const FooterColumn = ({ title, children}: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold text-lightpurple-10 whitespace-nowrap'> {title}</h4>
      {children}
    </div>
  )
}

export default Footer