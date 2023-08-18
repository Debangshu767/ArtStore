import React from 'react'
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='mt-40 flex flex-col md:flex-row gap-12 p-2 md:p-6  justify-center m-2  bg-slate-50'>
        <div className='ml-12 flex flex-col gap-2'>
            <h3 className='text-[#0E2368] font-semibold'>Contact Us</h3>
            <p className='text-[12px]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className='text-[12px]'>example2020@gmail.com</p>
            <p className='text-[12px]'>(904) 443-0343</p>
        </div>

        <div className='ml-12 flex flex-col gap-2'>
        <h3 className='text-[#0E2368] font-semibold'>More</h3>
            <p className='text-[12px]'>About Us</p>
            <p className='text-[12px]'>Products</p>
            <p className='text-[12px]'>Career</p>
            <p className='text-[12px]'>Contact Us</p>
        </div>

        <div className='flex flex-col md:flex-col-reverse md:justify-between gap-2  m-auto'> 
            <p className='text-[12px] md:mt-20 '>© 2022 Z3ro_Artworks</p>
            <div className='flex flex-row gap-4 m-auto'>
                <FiInstagram/>
                <FiLinkedin/>
                <FiGithub/>
                
            </div>
            <h3 className='hidden md:block text-[#0E2368] font-semibold m-auto text-center'>Social Links</h3>

        </div>


    </div>
  )
}

export default Footer