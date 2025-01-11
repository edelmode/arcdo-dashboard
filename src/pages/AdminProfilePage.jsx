import React, { useState } from "react";

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white w-3/4 shadow-lg rounded-md">
        <div className="flex">
          <div className="w-1/4 bg-gray-100 p-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`block w-full text-left px-4 py-2 ${
                activeTab === "profile" ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              Admin Profile
            </button>
            <button
              onClick={() => setActiveTab("user-access")}
              className={`block w-full text-left px-4 py-2 ${
                activeTab === "user-access" ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              User Access
            </button>
          </div>
          <div className="w-3/4 p-6">
            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Admin Profile</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Pretend not to be evil meow to be let out intently stare at the same.
                </p>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Business Name</label>
                    <input
                      type="text"
                      placeholder="Ex. ABC Pvt. Ltd."
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Business Logo</label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Image</span>
                      </div>
                      <button className="text-sm text-blue-500 hover:underline">Change</button>
                      <button className="text-sm text-red-500 hover:underline">Remove</button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Primary Contact No.</label>
                    <input
                      type="text"
                      placeholder="+91 | Ex. 99999 99999"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
            {activeTab === "user-access" && (
              <div>
                <h2 className="text-xl font-semibold">User Access</h2>
                <p>Manage user access settings here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
