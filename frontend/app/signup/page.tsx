'use client';
import Button from '@/components/Button'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios
      .post(
        "http://127.0.0.1:8000/api/users/",
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          re_password: repassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        router.push("/email-confirmation");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res)
    setLoading(false)
    ;
    
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <section className="padding-container flex flex-col gap-20 py-10 pb-0 md:gap-20 lg:py-10 xl:flex-row border-2 border-black ">
        <div className="hero-map " />
        {/* Left */}
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
          <h1 className="text-lightpurple-10 bold-40 lg:bold-40 py-2 pb-10">
            Join the Journey!
          </h1>
          <h2 className="text-lightpurple-10 bold-4 pb-3 ">First Name</h2>
          <input
            type="text"
            name="first_name"
            id="first_name"
            style={{ color: "white", height: "30px", width: "600px" }}
            placeholder=" Enter your first name"
            required
            className="bg-gray-80"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <h2 className="text-lightpurple-10 bold-4 pb-3 ">Last Name</h2>
          <input
            type="text"
            name="last_name"
            id="last_name"
            style={{ color: "white", height: "30px", width: "600px" }}
            placeholder=" Enter your Last name"
            required
            className="bg-gray-80"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <br></br>
          <h2 className="text-lightpurple-10 bold-4 pb-3 ">Email Address</h2>

          <input
            type="text"
            name="email"
            id="email"
            style={{ color: "white", height: "30px", width: "600px" }}
            placeholder=" Enter your email"
            required
            className="bg-gray-80"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <h2 className="text-lightpurple-10 bold-4 py-2 pb-3 ">Re-Password</h2>
          <input
            type="password"
            name="repassword"
            id="repassword"
            placeholder=" Enter your password"
            style={{ color: "white", height: "30px", width: "600px" }}
            required
            className="bg-gray-80"
            onChange={(e) => setRepassword(e.target.value)}
          ></input>

          <br></br>
          <div className="py-2 flex relative">
            <Button
              type="submit"
              title="Sign Up"
              variant="btn_black"
              customHeight="custom-height-35"
              rounded=""
              // customWidth='custom-width-755'
              font="font-Lato"
            />
          </div>
          <div className="relative flex flexCenter right-[-370px] top-[-90px]">
            <Image
              src="/atom.svg"
              alt="menu"
              width={450}
              height={280}
              className="absolute top-[-250px] "
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default Page