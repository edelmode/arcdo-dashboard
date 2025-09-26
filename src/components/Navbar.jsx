import React, { useState, useRef, useEffect } from "react";
import {
  RotateCcw,
  CirclePlus,
  Search,
  Settings,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavbarTopConfigurationPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For controlling the search bar visibility
  const settingsMenuRef = useRef(null); // Reference to the settings menu

  // Extract page names from location.pathname
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const defaultPage = "ARCDO"; // Default page name
  const currentPage =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].toUpperCase() : "";

  // Close the settings menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
        setIsSettingsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigation function to the AddData page
  const handleAddClick = () => {
    navigate("/add ");
  };

  return (
    <nav className="fixed bg-white top-0 flex items-center px-3 sm:px-10 z-50 h-[4rem] w-full ">
      {/* Address Bar */}
      <div
        className={`flex items-center text-sm font-medium text-gray-700 ${
          currentPage ? "ml-16 sm:ml-[250px] mr-2 sm:mr-0" : "ml-16 sm:ml-0 mr-2 sm:mr-0"
        }`}
      >
        <span className="mr-2">{decodeURIComponent(defaultPage)}</span>
        {currentPage && (
          <>
            <span className="text-gray-500">/</span>
            <span className="ml-2 font-bold">{decodeURIComponent(currentPage)}</span>
          </>
        )}
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center">
        {/* Search Bar for Desktop */}
        <div className="hidden lg:flex items-center rounded-2xl border border-gray-300 mr-5">
          <Search
            className="h-5 w-5 mr-2 text-black ml-2 hover:text-red-800 transition duration-300"
            onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle the search visibility
          />
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-2xl text-md text-black focus:outline-none focus:ring-2 focus:ring-red-800-400"
            />
          )}
        </div>

        {/* Icons for Desktop */}
        <ul className="hidden lg:flex items-center space-x-5">
          <li>
            <button className="text-md text-black hover:text-red-800 transition duration-300">
              <RotateCcw className="h-5 w-5" />
            </button>
          </li>
          <li>
            <button
              className="text-md text-black hover:text-red-800 transition duration-300"
              onClick={handleAddClick} // Navigate to AddData page when clicked
            >
              <CirclePlus className="h-5 w-5" />
            </button>
          </li>
        </ul>

        {/* Settings Menu for Small Devices */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
            className="text-md text-black hover:text-red-800 transition duration-300"
          >
            <Settings className="h-6 w-6" />
          </button>
          {isSettingsMenuOpen && (
            <div
              ref={settingsMenuRef} // Attach the reference to the settings menu
              className="absolute right-3 top-12 bg-white rounded-lg shadow-lg p-3"
            >
              <ul className="space-y-3">
                <li>
                  <button className="flex items-center text-black hover:text-red-800 transition duration-300">
                    <RotateCcw className="h-5 w-5 mr-2" />
                    <span>Reset</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center text-black hover:text-red-800 transition duration-300" onClick={handleAddClick}>
                    <CirclePlus className="h-5 w-5 mr-2" />
                    <span>Add Item</span>
                    
                  </button>
                </li>
                {/* Search icon inside settings */}
                <li>
                  <button
                    className="flex items-center text-black hover:text-red-800 transition duration-300"
                    onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search visibility on click
                  >
                    <Search className="h-5 w-5 mr-2" />
                    <span>Search</span>
                  </button>
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder="Search..."
                      className="mt-2 px-4 py-2 rounded-2xl text-md text-black focus:outline-none focus:ring-2 focus:ring-red-800-400"
                    />
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
