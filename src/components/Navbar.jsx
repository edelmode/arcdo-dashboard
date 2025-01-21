import { PanelsTopLeft, Star, Sun, RotateCcw, CirclePlus, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


export default function NavbarTopConfigurationPage() {
    const location = useLocation();

    // Extract page names from location.pathname
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const defaultPage = "ARCDO"; // Default page name
    const currentPage = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].toUpperCase() : '';

    return (
        <nav className="fixed bg-white top-0 flex items-center px-5 sm:px-10 z-50 ml-[250px] h-[4rem] w-screen">
            {/* Address Bar */}
            

            <ul className="hidden sm:flex sm:flex-row lg:mr-10 items-center space-x-10">
                <li>
                    <button className="text-md text-black hover:text-red-800 hover:transition duration-300">
                        <PanelsTopLeft className="h-5 w-5 mr-2" />
                    </button>
                </li>
                <li>
                    <button className="text-md text-black hover:text-red-800 hover:transition duration-300">
                        <Star className="h-5 w-5 mr-2" />
                    </button>
                </li>

                <div className="flex items-center text-sm font-medium text-gray-700">
                    <span className="mr-2">{decodeURIComponent(defaultPage)}</span>
                    {currentPage && (
                        <>
                            <span className="text-gray-500">/</span>
                            <span className="ml-2 font-bold">{decodeURIComponent(currentPage)}</span>
                        </>
                    )}
                </div>

              
            </ul>

                {/* Right side (Search bar and icons) */}
                <ul className="flex items-center space-x-10" style={{ marginLeft: 'auto', marginRight: '250px' }}> {/* Custom margin for spacing */}
                {/* Search Bar */}
                <li className="flex items-center rounded-2xl border border-gray-300">
                    <div className="flex items-center">
                        <Search className="h-5 w-5 mr-2 text-black ml-2 hover:text-red-800 hover:transition duration-300" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 ml-2 rounded-2xl text-md text-black focus:outline-none focus:ring-2 focus:ring-red-800-400"
                        />
                    </div>
                </li>
                

                <li>
                    <button className="text-md text-black hover:text-red-800 hover:transition duration-300">
                        <Sun className="h-5 w-5 mr-2" />
                    </button>
                </li>
                <li>
                    <button className="text-md text-black hover:text-red-800 hover:transition duration-300">
                        <RotateCcw className="h-5 w-5 mr-2" />
                    </button>
                </li>
                <li className="relative">
                    <button className="text-md text-black hover:text-red-800">
                        <CirclePlus className="h-5 w-5 mr-2" />
                    </button>
                </li>
            </ul>
        </nav>
    );
}
