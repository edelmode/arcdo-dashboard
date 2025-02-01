import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleOverviewPageClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/overview");
  };

  return (
    <div className="font-montserrat overflow-hidden h-screen bg-gradient-to-br from-pink-700 to-purple-900 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Create New Account</h2>
        <p className="text-center text-gray-600 mb-6">Please provide your email and your preferred password</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="sample@gmail.com"
              className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 flex justify-between">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-500 transition"
            onClick={handleOverviewPageClick}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
