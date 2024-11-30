import React from 'react'
import  rasm from '../assets/logo.png';
function Header() {
  return (
    <div>
      <nav className="flex justify-around items-center px-6 py-4 bg-black-900 text-white">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-2xl font-bold">
          <img src={rasm} alt="Logo" />
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-400">
              product
            </a>
            <a href="#" className="hover:text-blue-400">
              Team
            </a>
            <a href="#" className="hover:text-blue-400">
              Enterprise
            </a>
            <a href="#" className="hover:text-blue-400">
              Explore
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search DOML" className="w-[217px] h-[19] hidden sm:block px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"/>
          <button className="">Sign in</button>
          <button className="py-2 px-4 border border-gray-400 rounded shadow">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header;