import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserAccountDashboard() {
  

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




  return (
    <div className="flex min-h-screen bg-gray-100 font-montserrat">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6 mt-20">What to Do?</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={handleFetchingButtonClick}
              className="text-gray-600 hover:text-yellow hover:transition duration-300"
            >
              Fetching Device
            </button>
          </li>
          <li>
            <button
              onClick={handleGalleryButtonClick}
              className="text-gray-600 hover:text-yellow hover:transition duration-300"
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={handlePetCamButtonClick}
              className="text-gray-600 hover:text-yellow hover:transition duration-300"
            >
              See Your Dog
            </button>
          </li>
          <li>
            <button
              onClick={handleDashboardButtonClick}
              className="text-gray-600 hover:text-yellow hover:transition duration-300"
            >
              Dog Emotions Analysis
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-8">
        <h2 className="text-2xl font-semibold mb-6 mt-20">My Profile</h2>
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="public\download.jpg"
              alt="User Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Billy Kaplan</h3>
              <p className="text-gray-500">Bulbasaur's Owner</p>
            </div>
            <button className="ml-auto text-blue-500 hover:underline">Edit</button>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Pet Name</p>
              <p className="text-lg">Bulbasaur</p>
            </div>
            <div>
              <p className="text-gray-600">Age</p>
              <p className="text-lg">5 Years Old</p>
            </div>
            <div>
              <p className="text-gray-600">Sex</p>
              <p className="text-lg">Male</p>
            </div>
            <div>
              <p className="text-gray-600">Dog Breed</p>
              <p className="text-lg">Shih Tzu</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-600">Owner's Phone</p>
              <p className="text-lg">097756751823</p>
            </div>
          </div>
          <button className="text-blue-500 hover:underline mt-4">Edit</button>
        </section>
      </main>
    </div>
  );
}
