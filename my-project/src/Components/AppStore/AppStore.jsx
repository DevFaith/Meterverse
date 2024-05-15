import React from 'react'
import Appstore from '../../assets/appstore.png'
import Googleplay from '../../assets/googleplay.png'

const AppStore = () => {
  return (
    <>
    <div className='container py-10 sm:min-h-[400px] sm:grid
      sm:place-items-center'>
        <div className='space-y-6 max-w-xl max-auto'>
            <h1 data-aos="fade-up"  
            className='text-2xl text-center sm:text-4xl font-semibold'>Get started with our app</h1>
            <p data-aos="fade-up" data-aos-delay="300"
            className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam velit eligendi vel animi quis reiciendis, temporibus dolores cumque voluptatem in quidem voluptatibus, ducimus corporis nihil minus. Numquam, fugiat nobis.</p>
            <div className='flex flex-wrap justify-center gap-4 items-center'>
                <a href="#" data-aos="fade-up" data-aos-delay="500">
                    <img src={Appstore} alt="" className='max-w{150px} sm:max-w-[120px] md:max-w[200px]' />
                </a>
                <a href="#" data-aos="fade-up" data-aos-delay="700">
                    <img src={Googleplay} alt="" className='max-w{150px} sm:max-w-[120px] md:max-w[200px]' />
                
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppStore