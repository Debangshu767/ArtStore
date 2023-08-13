import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiPaintBucketFill } from 'react-icons/pi';
import { BsCartDash } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';



const Navbar = () => {
  return (
    <div className='p-2 flex flex-row justify-between items-center gap-4'>
      <div className='flex flex-row items-center gap-1'>
        <h1 className='text-red-400 font-black text-4xl'>
          <PiPaintBucketFill />
        </h1>
        <h1 className='hidden md:block text-red-400 font-black text-3xl md:text-4xl md:my-auto'>
          ArtStore
        </h1>
      </div>
      <div className='flex flex-row w-full max-w-[800px] items-center gap-2'>
        <input
          className='border-2 border-red-400 rounded-full  p-1 px-4 placeholder:mx-3 w-full'
          placeholder='Search..'
          type='text'
        />
        <button className='bg-red-400 md:text-xl text-white p-2 rounded-full '>
          <AiOutlineSearch />
        </button>
       <div className=' flex flex-row ml-4'>
       <button className='text-xl text-red-400  p-2 rounded-full hover:bg-rose-100 '> <BsCartDash/> </button>
       <button className='text-xl text-red-400  p-2 rounded-full hover:bg-rose-100 '> <BiSolidUserCircle/> </button>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
