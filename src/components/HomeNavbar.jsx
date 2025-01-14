import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChartPie, FolderClosed, User, NotebookTabs, Contact, Handshake, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminProfile from "./AdminProfile"; // Import the modal component

export default function HomeNavbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Overview");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // Modal state

  const navigate = useNavigate();

  const handleSignOutClick = () => {
    navigate("/login");
  };

  const menuItems = [
    { name: "Overview", icon: <ChartPie className="h-5 w-5" />, path: "/" },
    { name: "HTE", icon: <NotebookTabs className="h-5 w-5" />, path: "/hte" },
    { name: "MOAs", icon: <FolderClosed className="h-5 w-5" />, path: "/moas" },
    { name: "OJT Coordinators", icon: <Contact className="h-5 w-5" />, path: "/coordinator" },
    { name: "Industry Partners", icon: <Handshake className="h-5 w-5" />, path: "/partners" },
    { name: "Account", icon: <User className="h-5 w-5" />, path: "/account" },
  ];

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
      className="fixed top-0 left-0 w-[250px] h-full flex flex-col items-start py-5 px-5 z-50"
      style={{
        boxShadow: "0px 8px 20px rgba(139, 69, 19, .50) solid",
      }}
    >
      <div className="flex items-center h-[3.5rem] max-w-full">
        <img src="/favicon.png" alt="Website Logo" className="w-[2.75rem] h-[2.75rem]" />
        <p className="pl-5 font-extrabold">ARCDO</p>
      </div>

      <ul className="flex flex-col space-y-2 mt-5 w-full">
        {menuItems.map((item) => (
          <li key={item.name} className="w-full">
            <Link
              to={item.path}
              className={`flex items-center px-2 py-3 rounded-2xl w-full ${
                activeMenu === item.name ? "bg-gray-300 text-black" : "hover:bg-gray-200"
              } transition duration-300`}
            >
              <div className="bg-gray-300 p-2 rounded-lg mr-3">{item.icon}</div>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto w-full relative">
        <button
          onClick={toggleDropdown}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isDropdownOpen ? "bg-red-700" : "hover:bg-red-600"
          } transition duration-300`}
        >
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/default-profile.jpg" alt="Profile" className="w-[35px] h-[35px] rounded-full object-cover" />
          </div>
          <span className="text-sm font-medium text-black">Admin</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-100 bg-bg divide-y divide-gray-100 rounded-lg shadow w-44 top-[-50px] left-full ml-3">
            <ul className="py-2 text-sm text-white text-md font-medium">
              <li>
                <button
                  onClick={() => setModalOpen(true)} // Open modal
                  className="flex px-4 py-2 hover:text-yellow-500"
                >
                  <User className="h-5 w-5 mr-2" /> Account
                </button>
              </li>
              <li>
                <button
                  onClick={handleSignOutClick}
                  className="flex px-4 py-2 hover:text-yellow-500"
                >
                  <LogOut className="h-5 w-5 mr-2" /> Sign out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Render the modal */}
      <AdminProfile isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
}
