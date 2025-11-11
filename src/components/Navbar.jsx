
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import {Link} from 'react-router-dom'


const Navbar = () => {
   const [open, setOpen] = useState(false);
  return (
     <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md fixed w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700"> Career Compass</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        
        <Link to='/' className="hover:text-blue-600 cursor-pointer">Home</Link>
        <li className="hover:text-blue-600 cursor-pointer">Roadmaps</li>
        <li className="hover:text-blue-600 cursor-pointer">AI Guidance</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* Buttons – Desktop */}
      <div className="hidden md:flex space-x-3">
         <Link to='/login' className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition" >
        
         Login
        
        </Link>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-3xl text-blue-700" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <li>Home</li>
            <li>Roadmaps</li>
            <li>AI Guidance</li>
            <li>About</li>
            <li>Contact</li>
            <div className="flex space-x-4 pt-4">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">Login</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sign Up</button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar