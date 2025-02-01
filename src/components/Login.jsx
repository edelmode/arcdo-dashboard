import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleOverviewPageClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/overview");
  };

  const handleCreateAccountClick = () => {
    navigate("/createaccount"); // Navigate to CreateAccount page
  };

  return (
    <div className="h-screen bg-gradient-to-br from-red-900 to-red-600 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to Account</h2>
        <p className="text-center text-gray-600 mb-6">Please enter your email and password to continue</p>
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
            <label className="text-sm font-medium text-gray-700 flex justify-between">
              Password
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </label>
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
            className="w-full bg-amber-400 text-white py-2 rounded-md hover:bg-amber-200 transition"
            onClick={handleOverviewPageClick}
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? 
          <button onClick={handleCreateAccountClick} className="text-blue-500 hover:underline ml-1">
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
