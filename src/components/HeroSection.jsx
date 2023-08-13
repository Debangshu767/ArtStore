import React from 'react'
import Slider from "react-slick";
import SliderItem from './SliderItem';

const HeroSection = () => {

    var settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 

        
      };

      const fillerContent = [
        {
          title: 'Mountain Scenery',
          image: 'https://source.unsplash.com/800x600/?mountain',
        },
        {
          title: 'Abstract Art',
          image: 'https://source.unsplash.com/800x600/?abstract',
        },
        {
          title: 'City Night Lights',
          image: 'https://source.unsplash.com/800x600/?city,night',
        },
        {
          title: 'Ocean Waves',
          image: 'https://source.unsplash.com/800x600/?ocean',
        },
        {
          title: 'Colorful Flowers',
          image: 'https://source.unsplash.com/800x600/?flowers',
        },
      ];

      return (
        <div className=' h-[500px] md:h-[650px] p-3 rounded-b-xl bg-gradient-to-t from-red-500 to-white'>
        <div className='  items-center justify-center'>
        <Slider  {...settings}>
          {fillerContent.map((item, index) => (
            <div key={index}>
              <SliderItem title={item.title} image={item.image} />
            </div>
          ))}
        </Slider>
        </div>
      </div>
  )
}

export default HeroSection