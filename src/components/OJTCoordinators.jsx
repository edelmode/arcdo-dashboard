import React, { useState } from "react";

export default function OJTCoordinatorDashboard() {
  const allData = [
    { id: "001", name: "John Doe", campus: "Main Campus", contact: "john.doe@email.com", office: "Room 101", status: "Active" },
    { id: "002", name: "Jane Smith", campus: "North Campus", contact: "jane.smith@email.com", office: "Room 202", status: "On Leave" },
    { id: "003", name: "Mike Johnson", campus: "South Campus", contact: "mike.johnson@email.com", office: "Room 303", status: "Retired" },
    { id: "004", name: "Emily Clark", campus: "Main Campus", contact: "emily.clark@email.com", office: "Room 104", status: "Active" },
    { id: "005", name: "David Wilson", campus: "East Campus", contact: "david.wilson@email.com", office: "Room 205", status: "On Leave" },
    { id: "006", name: "Sarah Brown", campus: "Main Campus", contact: "sarah.brown@email.com", office: "Room 106", status: "Retired" },
    // Add more coordinator data as needed
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    campus: "",
  });

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  // Apply campus filter
  const filteredData = allData.filter((item) => {
    return filters.campus
      ? item.campus.toLowerCase().includes(filters.campus.toLowerCase())
      : true;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetFilters = () => {
    setFilters({ campus: "" });
    setCurrentPage(1);
  };

  return (
    <div className="p-5 ml-[260px] mt-[4.5rem] mr-5 flex flex-col h-[calc(100vh-4.5rem)]">
      {/* Filter Section */}
      <div className="flex items-center space-x-4 mb-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Campus</label>
          <input
            type="text"
            value={filters.campus}
            onChange={(e) => setFilters({ ...filters, campus: e.target.value })}
            placeholder="Search campus..."
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600"
        >
          Reset Filters
        </button>
      </div>

      {/* Table Section */}
      <div className="flex-grow overflow-auto mb-3">
        <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm h-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border">Coordinator ID</th>
              <th className="px-4 py-2 text-left border">Name</th>
              <th className="px-4 py-2 text-left border">Campus</th>
              <th className="px-4 py-2 text-left border">Contact</th>
              <th className="px-4 py-2 text-left border">Office</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.campus}</td>
                <td className="px-4 py-2 border">{item.contact}</td>
                <td className="px-4 py-2 border">{item.office}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        <span>
          Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredData.length)}</b> of <b>{filteredData.length}</b>
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
