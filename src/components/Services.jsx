import React from 'react'
import { MdDesignServices } from 'react-icons/md';
import { DiIllustrator } from 'react-icons/di';
import { SiCanva } from 'react-icons/si';
import { BiSolidLandscape } from 'react-icons/bi';


const Services = () => {
  return (
    <>

    <h1 className='mt-14 text-red-400 text-3xl p-2 font-bold text-center uppercase'>- Explore -</h1>
    

    <div className='flex flex-wrap m-2 gap-6  justify-center'>

        <button className=' w-[45%] md:w-[20%] flex flex-col gap-3 items-center bg-slate-50 p-4 rounded-lg shadow-lg shadow-slate-300 hover:shadow-slate-400'>
        <h1 className='text-9xl text-red-400 '><MdDesignServices/></h1>
        <h2 className='text-sm text-slate-500 capitalize font-bold p-2' >Digital Illustriations</h2>
        </button>
        <button className='w-[45%] md:w-[20%] flex flex-col gap-3 items-center bg-slate-50 p-4 rounded-lg shadow-lg shadow-slate-300 hover:shadow-slate-400'>
        <h1 className='text-9xl text-red-400 '><DiIllustrator/></h1>
        <h2 className='text-sm text-slate-500 capitalize font-bold p-2' >Vector Designs</h2>
        </button>
        <button className='w-[45%] md:w-[20%] flex flex-col gap-3 items-center bg-slate-50 p-4 rounded-lg shadow-lg shadow-slate-300 hover:shadow-slate-400'>
        <h1 className='text-9xl text-red-400 '><SiCanva/></h1>
        <h2 className='text-sm text-slate-500 capitalize font-bold p-2' >Canva Designs</h2>
        </button>
        <button className='w-[45%] md:w-[20%] flex flex-col gap-3 items-center bg-slate-50 p-4 rounded-lg shadow-lg shadow-slate-300 hover:shadow-slate-400'>
        <h1 className='text-9xl text-red-400 '><BiSolidLandscape/></h1>
        <h2 className='text-sm text-slate-500 capitalize font-bold p-2' >Background Art</h2>
        </button>




    </div>
    
    </>
  )
}

export default Services