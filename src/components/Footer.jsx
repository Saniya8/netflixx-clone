import React from 'react'

const Footer = () => {
  return (
    <div className='font-sans font-semibold flex flex-col w-full h-full flex-wrap p-14'>

      <div className='flex gap-1 items-start sm:pl-28'>
        <p className='text-whitye text-base'>Questions? Call </p>
        <p className='text-whitye underline cursor-pointer text-base'>000-800-919-1694</p>
      </div>

      <div className='flex flex-col sm:flex-row flex-wrap sm:pl-28 sm:py-10 items-start sm:gap-52'>

        <ul className='underline text-whitye cursor-pointer text-sm space-y-3 pt-9 sm:pt-0'>
          <li>FAQ</li>
          <li>Media Centre</li>
          <li>Ways to Watch</li>
          <li>Cookie Preferences</li>
          <li>Speed Test</li>
        </ul>

        <ul className='underline text-whitye cursor-pointer text-sm space-y-3 pt-6 sm:pt-0'>
          <li>Help Centre</li>
          <li>Investor Relations</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Legal Notices</li>
        </ul>

        <ul className='underline text-whitye cursor-pointer text-sm space-y-3 pt-6 sm:pt-0'>
          <li>Account</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>Only on Netflix</li>
        </ul>

      </div>

      <div className='flex flex-col flex-wrap justify-start items-start sm:pl-28 pt-10 sm:pt-0 space-y-5'>
        <button className="text-white bg-transparent border cursor-default rounded-md w-32 py-1.5">English</button>
        <p className='text-whitye'>Netflix India</p>
      </div>

    </div>
  )
}

export default Footer