
import Button from '@/components/Button'
import Peact from 'react'

function Page() {
  return (
    <section className  = "padding-container flex flex-col gap-20 py-10 pb-0 md:gap-20 lg:py-10 xl:flex-row border-2 border-black "> 
    <div className="hero-map " />
    {/* Left */}
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
    <h1 className="text-lightpurple-10 bold-40 lg:bold-40 py-2 pb-10 italic">Log in to the Physics Bugle</h1>
    <h2 className="text-lightpurple-10 bold-4 pb-3 ">
    Email Address
    </h2>
    <input type="text" name="email" id="email" style={{ color: 'white' }} placeholder=" Enter your email"  required className='bg-gray-80'>
    </input>
    <br></br>
    <h2 className="text-lightpurple-10 bold-4 py-2 pb-3 ">
    Password
    </h2>
    <input type="text" name="email" id="email" placeholder=" Enter your password" required className='bg-gray-80'>
    </input>
    <br></br>
    <div className='py-2 flex relative'>
    <Button
          type="button"
          title="Log in"
          variant="btn_black"
          customHeight="custom-height-35"
          rounded=""
        //   customWidth='custom-width-755'
          font="font-Lato"
          />
          </div>
    </div>

  </section>

)
}

export default Page