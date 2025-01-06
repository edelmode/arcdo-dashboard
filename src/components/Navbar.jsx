import { useState } from 'react';
import { PanelsTopLeft, Star, Sun, RotateCcw, CirclePlus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NavbarTopConfigurationPage() {
    // State for managing mobile menu toggle
    const [isOpen, setIsOpen] = useState(false); 

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navigate = useNavigate(); // Initialize navigate

    const handleFetchingButtonClick = () => {
      navigate("/fetching-page");  // Redirect to the Fetching page
    };

    const handlePetCamButtonClick = () => {
        navigate("/petcam-page");  // Redirect to the PetCam page
    };

    const handleLandingPageClick = () => {
        navigate("/");  // Redirect to the Landing page
    };

    const handleGalleryButtonClick = () => {
        navigate("/gallery-page");  // Redirect to the Gallery page
    };

    const handleDashboardButtonClick = () => {
        navigate("/dashboard-page");  // Redirect to the Dashboard page
    };

    const handleAccountButtonClick = () => {
        navigate("/account");  // Redirect to the User Account page
    };

    return (
        <nav className="fixed top-0 w-full flex items-center px-5 sm:px-10 bg-white z-50 ml-[250px]  h-[4rem] max-w-full">
                
            {/* Desktop Menu with Icons */}
            <ul className="hidden sm:flex sm:flex-row lg:mr-10 items-center space-x-10">
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                        onClick={handlePetCamButtonClick}
                    >
                        <PanelsTopLeft className="h-6 w-6" />
                    </button>
                </li>
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                        onClick={handleDashboardButtonClick}
                    >
                        <Star className="h-6 w-6" />
                    </button>
                </li>
                
                {/* Search Bar */}
                <li className="flex items-center rounded-2xl border border-gray-300">
                    <div className="flex items-center">
                        <Search className="h-6 w-6 text-gray-600 ml-2" />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="px-4 py-2 ml-2 rounded-2xl text-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                </li>
                
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                        onClick={handleFetchingButtonClick}
                    >
                        <Sun className="h-6 w-6" />
                    </button>
                </li>
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                        onClick={handleGalleryButtonClick}
                    >
                        <RotateCcw className="h-6 w-6" />
                    </button>
                </li>
                <li className="relative">
                    <button 
                        onClick={toggleDropdown} 
                        className="text-md text-gray-600 hover:text-yellow"
                    >
                        <CirclePlus className="h-6 w-6" />
                    </button>

                   
                </li>
            </ul>

        </nav>
    );
}
