import React from 'react'
import Image5 from '../../assets/image5.png'
import { BiPlayCircle } from 'react-icons/bi'

const Banner2 = ({togglePlay}) => {
  return (
    <>
    <div className='py-12 sm:py-0 relative'>
        <div className='container min-h-[620px] flex items-center'>
            <div className='grid  grid-cols-1 sm:grid-cols-2 gap-8
                place-items-center'>
            
                {/* text content section  */}
                <div className='order-2 sm:order-1  lg:pr-20 relative'>
                <div className='relative z-10 space-y-5' >
                <h1 data-aos="fade-up" data-aos-delay="300" className='text-4xl font-semibold'>GET READY TO ENJOY VR <br /> <span className='bg-clip-text text-trasparent
                   bg-gradient-to-r  from-primary to-secondary text-teal-300'>Movies WITH OUR PLATFORM</span></h1>
               <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam, <br /> saepe molestiae deleniti laudantium minima iste rem maxime? Nihil, dicta magnam <br /> soluta sit dolores minus incidunt culpa veritatis architecto!</p>
               <div className='flex gap-6'>
                <button data-aos="fade-up" data-aos-delay="500"className='primary-btn'>Get Started</button>
                <button data-aos="fade-up" data-aos-delay="900" onClick={togglePlay} className='flex items-center gap-2'>{''}
                   <BiPlayCircle className='text-3xl'/>See Demo</button>
               </div>
               {/* background color blob  */}
               <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary
                  to-secondary rounded-full absolute bottom-[-200px] left-[300px] opacity-50 blur-3xl'></div>
              
                </div>
                
              </div>

                  {/* image section  */}
                  <div data-aos="fade-up" className='order-2 sm:order-1'>
                    <img src={Image5} alt="" className='relative max-w-[400px]
                       '/>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Banner2