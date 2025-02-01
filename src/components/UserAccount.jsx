import React from 'react';

export default function UserAccountDashboard() {
  return (
    <div className="bg-gray-50 md:ml-[250px] mt-10 p-7 min-h-screen overflow-auto">

        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 mt-3 text-center sm:text-left">Admin Profile</h2>

        {/* User Profile Section */} 
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8 flex flex-col sm:flex-row items-center sm:items-start space-x-4 sm:space-x-6">
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
    
  );
}
