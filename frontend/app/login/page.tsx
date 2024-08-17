'use client'
import Button from '@/components/Button'
// import Peact, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
function Page() {
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

  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      console.log("Success");
      router.push("/");
    }
  };
  return (
    <section className="padding-container flex flex-col gap-20 py-10 pb-0 md:gap-20 lg:py-10 xl:flex-row border-2 border-black ">
      <form onSubmit={handleSubmit}>
        <div className="hero-map " />
        {/* Left */}
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
          <h1 className="text-lightpurple-10 bold-40 lg:bold-40 py-2 pb-10 italic">
            Log in to the Physics Bugle
          </h1>
          <h2 className="text-lightpurple-10 bold-4 pb-3 ">Email Address</h2>
          <input
            type="text"
            name="email"
            id="email"
            style={{ color: "white", height: "30px", width: "600px" }}
            placeholder=" Enter your email"
            required
            className="bg-gray-80"
          ></input>
          <br></br>
          <h2 className="text-lightpurple-10 bold-4 py-2 pb-3 ">Password</h2>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" Enter your password"
            style={{ color: "white", height: "30px", width: "600px" }}
            required
            className="bg-gray-80"
          ></input>
          <br></br>
          <div className="py-2 flex relative">
            <Button
              type="submit"
              title="Log In"
              variant="btn_black"
              customHeight="custom-height-35"
              rounded=""
              // customWidth='custom-width-755'
              font="font-Lato"
            />
          </div>
          <div className="relative flex flexCenter right-[-700px] top-[-90px]">
          {!isMobile && (<Image src = "/atom.svg"
         alt ="menu"
         width={600}
         height ={280}
         className="absolute top-[-250px] "
         />)}
          </div>
        </div>
      </form>
    </section>
  );
}

export default Page