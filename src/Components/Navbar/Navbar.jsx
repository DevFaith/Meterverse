// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo1 from '../../assets/logo1.png'
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Darkmode from './Darkmode';

const NavLinks = [
    {   id:1,
        name:'Home',
        link:'#',
    },
    {   id:2,
        name:'Products',
        link:'#',
    },
    {   id:3,
        name:'Pricing',
        link:'#',
    },
    {   id:4,
        name:'Contacts',
        link:'#',
    },
];
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <div className='revelative z-[9999] text-black dark:text-white duration-300'>
        <div className='container py-2 md:py-0'>
            <div className='flex justify-between items-center'>
                {/* logo section  */}
                <div className='flex items-center gap-3'>
                    <img src={Logo1} alt="" className='h-16'/>
                <p className='text-3xl hidden sm:block '>VR <span className='font-bold'>World</span></p>
                </div>
                {/* desktop menu selection  */}
                
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {NavLinks.map(({id, name, link}) => {
                                return (
                                    <li key={id} className='py-4'>
                                        <a href={link}
                                        className='text-xl font-semibold
                                        hover:text-primary py-2 hover:border-b-2
                                        hover:border-secondary transition-colors 
                                        transition-duration-500'
                                        >{name}</a>
                                    </li>
                                )
                            })}
                            {/* darkmode features  */}
                            {/* <DarkMode /> */}
                        </ul>
                    </nav>
                    {/* mobile view sidebar  */}
                    <div className='flex justify-end items-center gap-3' >
       
                    <Darkmode />
                    <div className='md:hidden'>
                    {showMenu ? 
                        <HiMenuAlt1 onClick={toggleMenu}
                        className='cursor-pointer size={30}'/> :
                         <HiMenuAlt3 onClick={toggleMenu}
                         className='cursor-pointer size={30}'/>}
                    </div>
                        
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar