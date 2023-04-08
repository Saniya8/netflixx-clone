import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import heroimg from "../images/heroimg.jpg";
import Navbar from '../components/Navbar';


const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col flex-wrap bg-no-repeat sm:pb-40' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroimg})`, backgroundSize: 'cover'}}>
      <Navbar />
      <div className='flex flex-wrap justify-center items-center pt-32 sm:pt-44 px-10 space-y-4 flex-col gap-3'>
        <div>
          <h1 className='text-white text-3xl sm:text-5xl font-extrabold text-center font-sans'>Unlimited movies, TV shows and more.</h1>
        </div>
        <div>
          <h3 className='text-white text-xl sm:text-2xl text-center font-sans'>Watch anywhere. Cancel anytime.</h3>
        </div>
        <div className='py-4'>
          <h5 className='text-white text-base sm:text-xl  text-center font-sans'>Ready to watch? Enter your email to create or restart your membership.</h5>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-2 px-10 pb-14'>
        <div><input className='rounded border text-white bg-black bg-opacity-75 px-40 py-3 pl-2 w-full' placeholder='Email address' /></div>
        <div><button className="bg-red-600 text-white text-xl sm:text-2xl hover:bg-red-700 rounded box-border cursor-pointer px-6 py-2.5 flex">Get Started<div className='py-1'><IoIosArrowForward /></div></button></div>
      </div>
    </div>

  )
}

export default Hero