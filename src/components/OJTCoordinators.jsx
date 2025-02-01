import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function OJTCoordinators() {
  const [allCoordinators, setAllCoordinators] = useState([]); // Changed initial state to an empty array
  const [filteredCoordinators, setFilteredCoordinators] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ campus: "" });

  const itemsPerPage = 5;

  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API...");
        const response = await axios.get('http://localhost:3001/api/ojt_coordinator'); // Ensure backend endpoint is correct
        console.log("Fetched Data:", response.data); // Debugging: Check API response

        // Ensure response.data is an array before setting state
        if (Array.isArray(response.data)) {
          setAllCoordinators(response.data);
          setFilteredCoordinators(response.data); // Set initial data
          console.log("Data set successfully");
        } else {
          setAllCoordinators([]); // Handle unexpected response format
          setFilteredCoordinators([]);
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllCoordinators([]); // Handle API error
        setFilteredCoordinators([]);
      }
    };

    fetchData();
  }, []);

  // Filter Data
  const filteredDataResults = allCoordinators ? allCoordinators.filter((item) => {
    const matchesCampus = filters.campus ? item.campus.toLowerCase().includes(filters.campus.toLowerCase()) : true;
    return matchesCampus;
  }) : [];

  const totalPages = Math.ceil(filteredDataResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredDataResults.slice(startIndex, endIndex);

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

  return (
    <div className="bg-gray-50 md:ml-[250px] mt-10 p-7 min-h-screen overflow-auto">
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
              <th className="px-4 py-2 text-left border-b">NAME</th>
              <th className="px-4 py-2 text-left border-b">CAMPUS</th>
              <th className="px-4 py-2 text-left border-b">EMAIL</th>
              <th className="px-4 py-2 text-left border-b">OFFICE</th>
              <th className="px-4 py-2 text-left border-b">ASSIGNED STUDENTS</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2 border-t">{item.id || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.name || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.campus || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.email || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.office || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.assigned_students || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">No Data Available</td>
              </tr>
            )}
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
      <div className="flex justify-start items-center mt-4">
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
        <span className="text-gray-500">
          Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredCoordinators.length)}</b> of{" "}
          <b>{filteredCoordinators.length}</b>
        </span>
      </div>


    </div>
  );
}
