
import { PanelsTopLeft, Star, Sun, RotateCcw, CirclePlus, Search } from 'lucide-react';


export default function NavbarTopConfigurationPage() {
    
    return (
        <nav className="fixed top-0 w-full flex items-center px-5 sm:px-10  z-50 ml-[250px]  h-[4rem] max-w-full overflow-hidden">
                
            
            <ul className="hidden sm:flex sm:flex-row lg:mr-10 items-center space-x-10">
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                       
                    >
                        <PanelsTopLeft className="h-5 w-5 mr-2" />
                    </button>
                </li>
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                        
                    >
                        <Star className="h-5 w-5 mr-2" />
                    </button>
                </li>
                
                {/* Search Bar */}
                <li className="flex items-center rounded-2xl border border-gray-300">
                    <div className="flex items-center">
                        <Search className="h-5 w-5 mr-2 text-gray-600 ml-2" />
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
                        
                    >
                        <Sun className="h-5 w-5 mr-2" />
                    </button>
                </li>
                <li>
                    <button 
                        className="text-md text-gray-600 hover:text-yellow hover:transition duration-300"
                        
                    >
                        <RotateCcw className="h-5 w-5 mr-2" />
                    </button>
                </li>
                <li className="relative">
                    <button 
                        
                        className="text-md text-gray-600 hover:text-yellow"
                    >
                        <CirclePlus className="h-5 w-5 mr-2" />
                    </button>

                   
                </li>
            </ul>

        </nav>
    );
}
