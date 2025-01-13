import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChartPie,
  FolderClosed,
  User,
  NotebookTabs,
  Contact,
  Handshake,
  Settings,
  LogOut,
} from 'lucide-react';

export default function HomeNavbar() {
  const location = useLocation(); // Get the current route
  const [activeMenu, setActiveMenu] = useState('Overview'); // Default active menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const menuItems = [
    { name: 'Overview', icon: <ChartPie className="h-5 w-5" />, path: '/' },
    { name: 'HTE', icon: <NotebookTabs className="h-5 w-5" />, path: '/hte' },
    { name: 'MOAs', icon: <FolderClosed className="h-5 w-5" />, path: '/moas' },
    { name: 'OJT Coordinators', icon: <Contact className="h-5 w-5" />, path: '/coordinators' },
    { name: 'Industry Partners', icon: <Handshake className="h-5 w-5" />, path: '/partners' },
    { name: 'Account', icon: <User className="h-5 w-5" />, path: '/account' },
  ];

  // Update active menu when the route changes
  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      setActiveMenu(currentItem.name);
    }
  }, [location, menuItems]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
      <ul className="flex flex-col space-y-2 mt-5 w-full">
        {menuItems.map((item) => (
          <li key={item.name} className="w-full">
            <Link
              to={item.path}
              className={`flex items-center px-2 py-3 rounded-2xl w-full ${
                activeMenu === item.name
                  ? 'bg-gray-300 text-black' // Active item styling
                  : 'hover:bg-gray-200'
              } transition duration-300`}
            >
              {/* Icon container with background */}
              <div className="bg-gray-300 p-2 rounded-lg mr-3">
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Account Section */}
      <div className="mt-auto w-full relative">
        <button
          onClick={toggleDropdown}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isDropdownOpen
              ? 'bg-red-700' // Keep hover effect when dropdown is open
              : 'hover:bg-red-600'
          } transition duration-300`}
        >
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="/default-profile.jpg"
              alt="Profile"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-black">Admin</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-100 bg-bg divide-y divide-gray-100 rounded-lg shadow w-44 top-[-100px] left-full ml-3">
            <ul className="py-2 text-sm text-white text-md font-medium">
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Navigating to Account settings...');
                  }}
                  className="flex px-4 py-2 hover:text-yellow-500"
                >
                  <User className="h-5 w-5 mr-2" /> Account
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Opening settings...');
                  }}
                  className="flex px-4 py-2 hover:text-yellow-500"
                >
                  <Settings className="h-5 w-5 mr-2" /> Settings
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Signing out...');
                  }}
                  className="flex px-4 py-2 hover:text-yellow-500"
                >
                  <LogOut className="h-5 w-5 mr-2" /> Sign out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
