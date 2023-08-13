import React from 'react';

const SliderItem = ({ title, image }) => {
  return (
    <div className='relative flex items-center justify-center h-[450px] md:h-[600px] overflow-hidden rounded-xl'>
      <img
        src={image}
        alt={title}
        className='object-cover w-full h-[500px] md:h-[600px] rounded-lg'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100'></div>
      <div className='absolute inset-0 flex items-center justify-center text-red-100 text-4xl font-thin uppercase '>
        {title}
      </div>
    </div>
  );
};

export default SliderItem;