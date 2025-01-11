import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-800 to-purple-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-96">
        <div className="text-yellow-500 text-6xl mb-4">404</div>
        <p className="text-gray-600 mb-6">Looks like you’ve got lost...</p>
        <button
          onClick={() => window.history.back()}
          className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
