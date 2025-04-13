import React from 'react'
import GoogleMapReact from 'google-map-react';
import{
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLocationArrow,
    FaMobileAlt,
    FaYoutube,
    FaLinkedin,
    FaGithub,   
}from "react-icons/fa";

const FooterLinks = [
    {
        id:1,
        title:"Home",
        link: "/#",
    },

    {
        id:2,
        title:"About",
        link: "/#about",
    },

    {
        id:3,
        title:"Contact",
        link: "/#contact",
    },

    {
        id:4,
        title:"Blog",
        link: "/#blog",
    }
]

const defaultProps = {
    center: { lat: -1.2661249, lng: 36.7974347 },
    zoom: 11
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Footer = () => {
  return (
    <>
        <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
            <div data-aos="fade" className='container'>
                <div className='grid md:grid-cols-3 py-4'>
                    {/* company details  */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left
                          text-justify mb-3 flex items-center gap-3'>Meterverse</h1>
                          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in beatae praesentium, fugiat labore mollitia perspiciatis modi eos repellendus quaerat vel incidunt, amet id laborum, reprehenderit itaque nobis quo nisi.</p>
                    <br />
                    {/* contact section  */}
                    <div>
                        <div className='flex item-center gap-3 '>
                            <FaLocationArrow />
                            <p>Faith Waithera</p>
                        </div>
                        <div className='flex item-center gap-3 '>
                            <FaMobileAlt />
                            <p>+254 693 137 12</p>
                        </div>
                    </div>
                    {/* social media links  */}
                    <div className='flex items-center gap-6'>
                        <a href="#">
                        <FaFacebook className='text-3xl hover:text-primary
                          duration-300' />
                        </a>
                        <a href="#">
                        <FaTwitter className='text-3xl hover:text-primary
                          duration-300'/>
                        </a>
                        <a href="#">
                        <FaInstagram className='text-3xl hover:text-primary
                          duration-300'/>
                        </a>
                        <a href="#">
                        <FaYoutube className='text-3xl hover:text-primary
                          duration-300'/>
                        </a>
                        <a href="#">
                        <FaLinkedin className='text-3xl hover:text-primary
                          duration-300' />
                        </a>
                        <a href="#">
                        <FaGithub className='text-3xl hover:text-primary
                          duration-300'/>
                        </a>
                     
                    </div>
                    </div>

                    {/* footer link section  */}
                    <div className='grid  grid-cols-2 sm:grid-cols-3 col-span-2
                      md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3 '>Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.id} className='hover:translate-x-1 duration-300'>
                                            
                                            <a href={link.link} className='cursor-pointer hover:text-primary'>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3 '>Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.id} className='hover:translate-x-1 duration-300'>
                                            
                                            <a href={link.link} className='cursor-pointer hover:text-primary'>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3 '>Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map((link) => (
                                        <li key={link.id} className='hover:translate-x-1 duration-300'>
                                            
                                            <a href={link.link} className='cursor-pointer hover:text-primary'>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
            <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDNdPKUi_32y2rbx15sL8Yl73PjmlW8wZY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
        {...defaultProps.center}
          text="My Marker"
        />
      </GoogleMapReact>
        </div>
    </>
  )
}

export default Footer