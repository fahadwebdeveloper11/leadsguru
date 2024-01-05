import React from 'react'
import logo from "../../../assets/logosvg.svg"
import { Link } from 'react-router-dom'
import { navbarLinks } from '../../../constants/Navbar_Links'
import Button from '../../Common/Button'
const Navbar = () => {
    
  return (
    <div className='w-full bg-white'>
        <nav className='w-[80%] mx-auto flex justify-between items-center py-2'>
            <div className='h-20 '>
                <img src={logo} alt="" className='w-full h-full'/>
            </div>
            <div>
                {navbarLinks.map((link) => (
                    <Link to={link.path} className='mx-4 text-[#26292c] text-lg font-medium'>
                    {link.element}
                    </Link>
                ))}
            </div>
            <div>
               <Button data={"Login/Signup"} classNames={"hover:text-black hover:bg-[#ffa8ae] duration-500 py-3 font-medium px-5 text-lg"}/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar