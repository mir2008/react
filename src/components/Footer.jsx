import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex container mx-auto w-full h-[555px] gap-20 border-0 border-b-2 mb-5 flex items-center'>
        <p className='text-gray-500'>400 University Drive Suite 200 Coral  Gables,
          <br />FL 33134 USA</p>
        <ul className='flex flex-col w-[150px] gap-10  text-xl'>
          <li className='text-gray-300'>Links</li>
          <li>Home</li>
          <li>Shop </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className='flex flex-col w-[150px] gap-10 text-xl'>
          <li className='text-gray-300'>Help</li>
          <li>Payment Options</li>
          <li>Returns </li>
          <li>Privacy polices</li>
        </ul>
        <ul className='flex flex-col w-[150px] gap-10 text-xl'>
          <li className='text-gray-300'>Newsletter</li>
          <li><a href="" className='underline w-full'>Enter Your Email Address
            <a>SUBSCRIBE</a></a></li>
        </ul>
      </div>
      <div className='container mx-auto'>
        <p className='text-gray-400'>2022 Meubel House. All rights reverved</p>
      </div>
      </>
  )
}

export default Footer