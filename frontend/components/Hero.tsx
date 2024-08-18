'use client';
import React, {useState,useEffect} from 'react'
import Image from 'next/image';
import Button from './Button';
import { useSession } from 'next-auth/react';
const Hero = () => {

  const { data: session } = useSession();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() =>{
    const handleResize =() => {
      setIsMobile(window.innerWidth<=1000);
    };
    handleResize();
    window.addEventListener('resize',handleResize);
    return() => {
      window.removeEventListener('resize',handleResize);
    };
  },[]);
  
  return (
    <section className="padding-container flex flex-col gap-20 py-10 pb-0 md:gap-20 lg:py-10 xl:flex-row border-2 border-black ">
      <div className="hero-map " />
      {/* Left */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <h1 className="text-lightpurple-10 bold-40 lg:bold-40 py-2 italic">
          IGNITE YOUR PASSION FOR PHYSICS
        </h1>
        <p className="regular-16 my-6 text-lightpurple-10 xl:max-w-[520px] py-4">
          Dive deep into the wonders of the universe and unlock your potential
          for academic excellence and discovery.
        </p>
        <div>
          {!session && (
            <>
              <h2 className="text-lightpurple-10 bold-4 py-2 pb-3">
                Email Address
              </h2>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=" Enter your email"
                style={{ color: "white", height: "30px" }}
                required
                className="bg-gray-80"
              ></input>
              <br></br>
              <h2 className="text-lightpurple-10 bold-4 py-2 pb-3">Password</h2>

              <input
                type="text"
                name="email"
                id="email"
                placeholder=" Enter your password"
                style={{ color: "white", height: "30px" }}
                required
                className="bg-gray-80"
              ></input>
              <br></br>
              <div className="py-2 flex relative">
                <Button
                  type="button"
                  title="Log In"
                  variant="btn_black"
                  customHeight="custom-height-35"
                  rounded=""
                  customWidth="xl:custom-width-755"
                  font="font-Lato"
                  newPath="/login"
                />
              </div>
            </>
          )}
          {session && (
            <h1>Hi {`${session.user?.email}`}</h1>
          )}
        </div>
      </div>
      <div className="relative flex flex-col items-center flex-1 ">
        {!isMobile && (
          <Image
            src="/space.svg"
            alt="menu"
            width={450}
            height={280}
            className="inline-block relative "
          />
        )}
      </div>
    </section>
  );
}

export default Hero