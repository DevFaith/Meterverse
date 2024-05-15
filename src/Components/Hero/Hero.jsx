import React from 'react'
import Image2Png from '../../assets/image2.png'
import { BiPlayCircle } from 'react-icons/bi'

const Hero = ({togglePlay}) => {
  return (
    <>
       <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 
           overflow-hidden">
            <div className="container min-h-[520px] flex items-center">
              {/* hero text section  */}
              <div className='order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30'>
                <h1 data-aos="fade-up" data className='text-4xl font-semibold'>GET READY TO ENJOY VR <br /> <span className='bg-clip-text text-trasparent
                   bg-gradient-to-r  from-primary to-secondary text-teal-300'>GAMES WITH OUR PLATFORM</span></h1>
               <p data-aos="fade-up" data-aos-delay="300" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam, <br /> saepe molestiae deleniti laudantium minima iste rem maxime? Nihil, dicta magnam <br /> soluta sit dolores minus incidunt culpa veritatis architecto!</p>
               <div className='flex gap-6'>
                <button data-aos="fade-up" data-aos-delay="500"
                className='primary-btn'>Get Started</button>
                <button data-aos="fade-up" data-aos-delay="700"onClick={togglePlay}
                className='flex items-center gap-2'>{''}
                   <BiPlayCircle className='text-3xl'/>See Demo</button>
               </div>
              
              </div>
              {/* Image selection  */}
              <div data-aos="fade-up" data-aos-offset= "0" className='order-1 sm:order-2'>
                <img src={Image2Png} alt="" />
              </div>
              </div>
              {/* animated blob  */}
              <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary
                  to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'></div>
              </div> 
    </>
  )
}

export default Hero