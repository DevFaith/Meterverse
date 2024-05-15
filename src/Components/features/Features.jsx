import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
    {
        name: "Captivating Videos",
        icon: (
            <FaCameraRetro className="text-5xl text-primary 
              group-hover:text-black duration-300" />
        
        ),
        link: "#",
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        aosDelay: "300",
    },

    {
        name: "Safe Transactions",
        icon: (
            <GiNotebook className="text-5xl text-primary 
              group-hover:text-black duration-300" />
        
        ),
        link: "#",
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        aosDelay: "500",
    },

    {
        name: "Experience Reality",
        icon: (
            <SlNote className="text-5xl text-primary 
              group-hover:text-black duration-500" />
        
        ),
        link: "#",
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        aosDelay: "700",
    },
];

const Features = () => {
  return (
    <>
    <div className='container py-14 sm:min-h-[600px]'>
        <div >
            <h1 data-aos="fade-up" 
            className='text-3xl font-semibold text-center
               sm:text-4xl mb-12'>Why Choose Us</h1>

               {/* card section  */}
               <div className='grid grid-cols-1 sm:grid-cols-2 gap-10
                  md:grid-cols-3'>
                    {FeaturesData.map((data,index) => (
                        <div key={index} data-aos="fade-up"
                          data-aos-delay={data.aosDelay}
                        className='text-center group space-y-3 sm:space-y-6
                          p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary
                           to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white
                            hover:text-black rounded-lg duration-300'>
                            <div> {data.icon} </div>
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
                            <a href={data.link} className='inline-block text-lg font-semibold
                              py-3 text-primary group-hover:text-black duration-300'>Learn More</a>
                           </div>
                    ))}
                
               </div>
              
        </div>
    </div>
    </>
  )
}

export default Features;