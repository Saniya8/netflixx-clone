import React from 'react'
import netflix from '../images/netflix.png';
import heroimg from "../images/heroimg.jpg";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Signin = () => {

    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroimg})` }}>
                <div>
                    <Link to="/">< img className='h-24 sm:h-40 cursor-pointer justify-start items-start' src={netflix} alt='netflix' /></Link>
                </div>

                <div className='flex items-center justify-center w-full pb-10'>

                    <div className='h-full  flex justify-center items-center flex-col flex-wrap space-x-0 p-14 bg-black bg-opacity-60 '>

                        <div className='flex  flex-col justify-start w-full gap-5 '>

                            <div className=' flex justify-start items-start text-white text-4xl '>
                                <h1>Sign In</h1>
                            </div>
                            <div className='flex flex-col flex-wrap gap-4 '>
                                <input className='rounded text-white bg-greyy py-3 px-4' placeholder='Email or Phone number' />
                                <input className='rounded text-white bg-greyy py-3 px-4' placeholder='Password' />
                            </div>
                            <div className='flex justify-center w-full items-center pt-5 '>
                                <button className="bg-red-600 w-full px-4 py-3  text-white text-sm sm:text-base hover:bg-red-700 rounded-md ">Sign In</button>
                            </div>
                            <div className='text-white flex flex-wrap text-sm w-full justify-between pb-10'>
                                <p><input type="checkbox" /> Remember me</p>
                                <p>Need help?</p>
                            </div>
                            <div className='text-white flex justify-between w-full  '>
                                <p>New to Netflix?</p>
                                <p className='hover:underline cursor-pointer'>Sign up now.</p>
                            </div>
                            <div className='text-white text-xs flex flex-wrap'>
                                <p>This page is protected by Google reCAPTCHA <br></br>
                                    to ensure you're not a bot.<span className='text-blue-700 cursor-pointer hover:underline'> Learn more.</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer className="bg-black" />
        </div>

    )
}

export default Signin