import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; 

export default function OJTCoordinators() {
  const allCoordinators = [
    { id: "001", name: "John Doe", campus: "Main", contact: "john.doe@example.com", office: "Room 101", assignedStudents: 25, status: "Active" },
    { id: "002", name: "Jane Smith", campus: "West", contact: "jane.smith@example.com", office: "Room 202", assignedStudents: 18, status: "On Leave" },
    { id: "003", name: "Mark Lee", campus: "East", contact: "mark.lee@example.com", office: "Room 303", assignedStudents: 30, status: "Retired" },
    { id: "004", name: "Alice Brown", campus: "Main", contact: "alice.brown@example.com", office: "Room 102", assignedStudents: 22, status: "Active" },
    { id: "005", name: "Robert White", campus: "South", contact: "robert.white@example.com", office: "Room 104", assignedStudents: 15, status: "Active" },
    // Add more coordinators as needed
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ campus: "" });

  const totalPages = Math.ceil(allCoordinators.length / itemsPerPage);

  // Apply filters
  const filteredCoordinators = allCoordinators.filter((coordinator) => {
    const matchesCampus = filters.campus
      ? coordinator.campus.toLowerCase() === filters.campus.toLowerCase()
      : true;

    return matchesCampus;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCoordinators = filteredCoordinators.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const resetFilters = () => {
    setFilters({ campus: "" });
    setCurrentPage(1);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600";
      case "On Leave":
        return "bg-yellow-100 text-yellow-600";
      case "Retired":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
        <div className="bg-gray-50 md:ml-[300px] mt-10 p-7 min-h-screen overflow-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 mt-3">OJT Coordinators</h1>
          <div className="mb-3">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 bg-gray-50 border border-gray-200 rounded-lg p-2 w-full sm:w-fit">
              {/* Filter Icon */}
              <div className="flex items-center">
                <i className="fas fa-filter text-black mr-2"></i>
                <span className="text-sm text-black">Filter by</span>
              </div>

              {/* Divider (Hidden on Small Screens) */}
              <div className="hidden sm:block h-6 border-r border-gray-300"></div>

              {/* Campus Dropdown */}
              <div className="w-full sm:w-auto">
                <select
                  value={filters.campus}
                  onChange={(e) => setFilters({ campus: e.target.value })}
                  className="w-full sm:min-w-[120px] px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                >
                  <option value="" disabled>Campus</option>
                  <option value="Main">Main</option>
                  <option value="West">West</option>
                  <option value="East">East</option>
                  <option value="South">South</option>
                </select>
              </div>

              {/* Divider (Hidden on Small Screens) */}
              <div className="hidden sm:block h-6 border-r border-gray-300"></div>

              {/* Reset Filters Button */}
              <button 
                onClick={resetFilters} 
                className="w-full sm:w-auto px-4 py-2 text-red-700 rounded-md shadow-sm hover:bg-gray-200 flex items-center justify-center"
              >
                <i className="fas fa-undo mr-2 text-red-700"></i>  
                Reset Filters
              </button>
            </div>
          </div>


        {/* Table Section */}
      <div className="flex-grow h-full mt-1 overflow-x-auto">
        <table className="min-w-full h-auto border-collapse mt-3 hidden md:table">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="px-4 py-2 text-left border-b">ID</th>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Campus/branch/college</th>
              <th className="px-4 py-2 text-left border-b">Contact Email</th>
              <th className="px-4 py-2 text-left border-b">Office</th>
              <th className="px-4 py-2 text-left border-b">Assigned Students</th>
              <th className="px-4 py-2 text-left border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentCoordinators.map((coordinator, index) => (
              <tr
                key={coordinator.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border-t">{coordinator.id}</td>
                <td className="px-4 py-2 border-t">{coordinator.name}</td>
                <td className="px-4 py-2 border-t">{coordinator.campus}</td>
                <td className="px-4 py-2 border-t">{coordinator.contact}</td>
                <td className="px-4 py-2 border-t">{coordinator.office}</td>
                <td className="px-4 py-2 border-t">{coordinator.assignedStudents}</td>
                <td className={`px-4 border-t rounded-full inline-block py-1 mt-1 mb-2 text-center ${getStatusColor(coordinator.status)}`}>
                  {coordinator.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View (Cards) */}
        <div className="md:hidden">
          {currentCoordinators.map((coordinator, index) => (
            <div key={coordinator.id} className={`border border-gray-200 p-4 mb-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="flex justify-between">
                <div className="font-bold">{coordinator.name}</div>
                <div className={`px-4 rounded-full py-1 ${getStatusColor(coordinator.status)}`}>
                  {coordinator.status}
                </div>
              </div>
              <div className="mt-2">
                <strong>ID:</strong> {coordinator.id}
              </div>
              <div className="mt-2">
                <strong>Campus:</strong> {coordinator.campus}
              </div>
              <div className="mt-2">
                <strong>Contact:</strong> {coordinator.contact}
              </div>
              <div className="mt-2">
                <strong>Office:</strong> {coordinator.office}
              </div>
              <div className="mt-2">
                <strong>Assigned Students:</strong> {coordinator.assignedStudents}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-3">
        <div className="flex space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-lg hover:bg-gray-200"
          >
            ←
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-lg hover:bg-gray-200 mr-2"
        >
          →
        </button>
        </div>
        <span className="text-gray-500">
          Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredCoordinators.length)}</b> of{" "}
          <b>{filteredCoordinators.length}</b>
        </span>
      </div>



    </div>
  );
}


