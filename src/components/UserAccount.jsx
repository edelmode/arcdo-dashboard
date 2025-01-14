import React from 'react';


export default function UserAccountDashboard() {
  

  return (
    <div className=" ml-[250px] mt-5 p-5 h-screen overflow-hidden">
      
      {/* Main Content */}
        <h2 className="text-2xl font-semibold mb-6 mt-20">Admin Profile</h2>
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="public\download.jpg"
              alt="User Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Billy Kaplan</h3>
              <p className="text-gray-500">ARCDO ADMIN</p>
            </div>
            <button className="ml-auto text-blue-500 hover:underline">Edit</button>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Email Address</p>
              <p className="text-lg">example@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-600">College</p>
              <p className="text-lg">College of Engineering</p>
            </div>
            <div>
              <p className="text-gray-600">Campus</p>
              <p className="text-lg">Main</p>
            </div>
            <div>
              <p className="text-gray-600">Position</p>
              <p className="text-lg">Secretary</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-600">Owner's Phone</p>
              <p className="text-lg">097756751823</p>
            </div>
          </div>
          <button className="text-blue-500 hover:underline mt-4">Edit</button>
        </section>
    </div>
  );
}
