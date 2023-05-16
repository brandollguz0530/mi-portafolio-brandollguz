import React from 'react'
//images
import Logo from "../assets/logo.svg" 
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <header className=' py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* LOGO */}
          <a href="https://api.whatsapp.com/send?phone=+50588696072&text=Hola%20estoy%20usando%20WhatsApp" target='_blank'>
            <img className='w-[50px] h-[50px] bg-gradient-to-r from-purple-700 via-blue-700 to-pink-500 rounded-md p-2 border-[3px] border-purple-950 transition duration-300 transform hover:scale-110 focus:scale-110' src={Logo} alt="" />
          </a>
          
          <Link to='work'>
          <button  className='btn btn-sm transition duration-300 transform hover:scale-110 focus:scale-110'>Work with me</button>
          </Link>
          
        </div>
      </div>
    </header>
  )
}

export default Header