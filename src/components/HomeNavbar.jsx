import React, { useState } from 'react';
import { CircleUser, ChartPie, FolderClosed, User, NotebookTabs, Contact, Handshake } from 'lucide-react';


export default function HomeNavbar() {
  
   

  return (
    <nav
      className="fixed top-0 left-0 w-[250px] h-full flex flex-col items-start py-5 px-5 bg-white z-50"
      style={{
        boxShadow: '0px 8px 20px rgba(139, 69, 19, .50) solid',
      }}
    >
      <div className="flex items-center h-[3.5rem] max-w-full">
        <img
          src="/favicon.png"
          alt="Website Logo"
          className="w-[2.75rem] h-[2.75rem]"
        />
        <p className="pl-5 font-extrabold">ARCDO</p>
      </div>

      <button
        className="text-sm text-black rounded-lg bg-gray-200 bg-opacity-80 shadow-md px-10 py-3 hover:bg-yellow transition duration-300 mt-5 flex items-center mb-5"
        
      >
        <ChartPie className='h-5 w-5 mr-2'/> Overview
      </button>

      {/* Vertical Menu */}
      <ul className="flex flex-col space-y-6 mt-5">
        <li className="flex items-center mb-2">
          <NotebookTabs className="h-5 w-5 mr-2" />
          <a
            href="#"
            className="text-sm font-medium hover:text-yellow hover:transition duration-300"
            
          >
            HTE
          </a>
        </li>
        <li className="flex items-center ">
          <FolderClosed className="h-5 w-5 mr-2" />
          <a
            href="#"
            className="text-sm font-medium hover:text-yellow hover:transition duration-300"
            
          >
            MOAs
          </a>
        </li>
        <li className="flex items-center">
          <Contact className="h-5 w-5 mr-2" />
          <a
            href="#"
            className="text-sm font-medium hover:text-yellow hover:transition duration-300"
            
          >
            OJT Coordinators
          </a>
        </li>
        <li className="flex items-center">
          <Handshake className="h-5 w-5 mr-2" />
          <a
            href="#"
            className="text-sm font-medium hover:text-yellow hover:transition duration-300"
            
          >
            Industry Partners
          </a>
        </li>
        <li className="flex items-center">
          <User className="h-5 w-5 mr-2" />
          <a
            href="#"
            className="text-sm font-medium hover:text-yellow hover:transition duration-300"
          
          >
            Account
          </a>
        </li>
      </ul>

      {/* Account Placeholder (Profile picture and name) */}
      <div className="mt-auto w-full flex items-center space-x-3">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center">
          {/* Placeholder image for the profile picture */}
          <img src="/default-profile.jpg" alt="Profile" className="w-[35px] h-[35px] rounded-full object-cover" />
        </div>
        <span className="text-sm font-medium text-black">Admin</span>
      </div>


      
    </nav>
  );
}
