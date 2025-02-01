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
    <div className="p-10 ml-[260px] mt-2 mr-5 flex flex-col h-screen overflow-hidden">
      <h1 className="text-5xl font-semibold mb-6 mt-5">OJT Coordinators</h1>

      {/* Filters */}
      <div className="mb-3">
        <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-2 w-fit">
          <div>
            <i className="fas fa-filter text-black mr-3 ml-3"></i>
            <span className="text-sm text-black">Filter by</span>
          </div>
          <div className="h-6 border-r border-gray-300 mx-4"></div>

          {/* Campus Filter */}
          <input
            placeholder="Campus"
            type="text"
            value={filters.campus}
            onChange={(e) => setFilters({ ...filters, campus: e.target.value })}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
          />

          {/* Reset Filters */}
          <button onClick={resetFilters} className="px-4 py-2 text-red-700 rounded-md shadow-sm hover:bg-gray-200 flex items-center">
            <i className="fas fa-undo mr-2 text-red-700"></i> Reset Filters
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-grow h-full mt-1 overflow-hidden">
        <table className="w-full h-auto border-collapse mt-3">
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
      </div>

      {/* Pagination */}
      <div className="flex justify-start items-center">
        <button onClick={handlePrevious} disabled={currentPage === 1} className="px-3 py-1 border rounded-lg hover:bg-gray-200">←</button>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="px-3 py-1 border rounded-lg hover:bg-gray-200 mr-2">→</button>
        <span className="text-gray-500">Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredDataResults.length)}</b> of <b>{filteredDataResults.length}</b></span>
      </div>
    </div>
  );
}
