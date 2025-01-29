import React from 'react';

export default function UserAccountDashboard() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar - Assuming it's part of the layout */}
      <aside className="w-64 hidden sm:block bg-gray-100 p-5">
        {/* Sidebar content here */}
      </aside>

      {/* Main Content */}
      <div className="mt-3 flex-1 p-5 sm:p-8 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-6 mt-10 sm:mt-5">Admin Profile</h2>

        {/* User Profile Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 flex sm:flex-row flex-col items-center sm:items-start space-x-4 sm:space-x-6">
          <img
            src="/download.jpg"
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0" // Proper size and margin for both small and large screens
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mt-2 sm:mt-0">Billy Kaplan</h3>
            <p className="text-gray-500 mt-1 sm:mt-0">ARCDO ADMIN</p>
          </div>
          <button className="ml-auto text-blue-500 hover:underline mt-4 sm:mt-0">Edit</button>
        </section>

        {/* Personal Information Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[ 
              { label: "Email Address", value: "example@gmail.com" },
              { label: "Campus", value: "Main" },
              { label: "Owner's Phone", value: "097756751823" },
              { label: "College", value: "College of Engineering" },
              { label: "Position", value: "Secretary" },
            ].map((item, index) => (
              <div key={index} className="p-2">
                <p className="text-gray-600">{item.label}</p>
                <p className="text-lg">{item.value}</p>
              </div>
            ))}
          </div>
          <button className="text-blue-500 hover:underline mt-4">Edit</button>
        </section>
      </div>
    </div>
  );
}
