import React from 'react'
import netflix from '../images/netflix.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-around">
            <div>
                <img className='w-full h-24 sm:h-32' src={netflix} alt='netflix' />
            </div>

            <div className='flex gap-2 sm:gap-4 pr-4'>
                <button className="text-white bg-transparent text-sm sm:text-base border-white border cursor-default rounded-md px-3 sm:px-6 py-1 sm:py-1.5">English</button>
                <Link to="/signin"><button className="bg-red-600 text-white text-sm sm:text-base hover:bg-red-700 rounded-md px-2 sm:px-5 py-1 sm:py-1.5">Sign In</button></Link>
            </div>
        </div >
    )
}

export default Navbar