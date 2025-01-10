import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CircleUser,
  ChartPie,
  FolderClosed,
  User,
  NotebookTabs,
  Contact,
  Handshake,
} from 'lucide-react';

export default function HomeNavbar() {
  const [activeMenu, setActiveMenu] = useState('Overview'); // Default active menu

  const menuItems = [
    { name: 'Overview', icon: <ChartPie className="h-5 w-5 mr-2" />, path: '/' },
    { name: 'HTE', icon: <NotebookTabs className="h-5 w-5 mr-2" />, path: '/hte' },
    { name: 'MOAs', icon: <FolderClosed className="h-5 w-5 mr-2" />, path: '/moas' },
    { name: 'OJT Coordinators', icon: <Contact className="h-5 w-5 mr-2" />, path: '/coordinators' },
    { name: 'Industry Partners', icon: <Handshake className="h-5 w-5 mr-2" />, path: '/partners' },
    { name: 'Account', icon: <User className="h-5 w-5 mr-2" />, path: '/account' },
  ];

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

      {/* Vertical Menu */}
      <ul className="flex flex-col space-y-6 mt-5 w-full">
        {menuItems.map((item) => (
          <li key={item.name} className="w-full">
            <Link
              to={item.path}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center px-3 py-4 rounded-lg w-full ${
                activeMenu === item.name
                  ? 'bg-gray-300 text-black'
                  : 'hover:bg-gray-200'
              } transition duration-300`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Account Placeholder */}
      <div className="mt-auto w-full flex items-center space-x-3">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center">
          <img
            src="/default-profile.jpg"
            alt="Profile"
            className="w-[35px] h-[35px] rounded-full object-cover"
          />
        </div>
        <span className="text-sm font-medium text-black">Admin</span>
      </div>
    </nav>
  );
}
