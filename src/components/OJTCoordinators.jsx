import React, { useState } from "react";

export default function OJTCoordinators() {
  const allCoordinators = [
    { id: "001", name: "John Doe", campus: "Main", contact: "john.doe@example.com", office: "Room 101", assignedStudents: 25, status: "Active" },
    { id: "002", name: "Jane Smith", campus: "West", contact: "jane.smith@example.com", office: "Room 202", assignedStudents: 18, status: "On Leave" },
    { id: "003", name: "Mark Lee", campus: "East", contact: "mark.lee@example.com", office: "Room 303", assignedStudents: 30, status: "Retired" },
    { id: "004", name: "Alice Brown", campus: "Main", contact: "alice.brown@example.com", office: "Room 102", assignedStudents: 22, status: "Active" },
    { id: "005", name: "Robert White", campus: "South", contact: "robert.white@example.com", office: "Room 104", assignedStudents: 15, status: "Active" },
    // Add more coordinators as needed
  ];

  const itemsPerPage = 5;
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
    <div className="p-10 ml-[260px] mt-10 mr-5 flex flex-col h-[calc(100vh-4.5rem)] overflow-hidden">
      {/* Filter Section */}
      <div className="flex items-center space-x-4 mb-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Campus</label>
          <select
            value={filters.campus}
            onChange={(e) => setFilters({ campus: e.target.value })}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          >
            <option value="">All</option>
            <option value="Main">Main</option>
            <option value="West">West</option>
            <option value="East">East</option>
            <option value="South">South</option>
          </select>
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
              <th className="px-4 py-2 text-left border">ID</th>
              <th className="px-4 py-2 text-left border">Name</th>
              <th className="px-4 py-2 text-left border">Campus</th>
              <th className="px-4 py-2 text-left border">Contact</th>
              <th className="px-4 py-2 text-left border">Office</th>
              <th className="px-4 py-2 text-left border">Assigned Students</th>
              <th className="px-4 py-2 text-left border">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentCoordinators.map((coordinator, index) => (
              <tr
                key={coordinator.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border">{coordinator.id}</td>
                <td className="px-4 py-2 border">{coordinator.name}</td>
                <td className="px-4 py-2 border">{coordinator.campus}</td>
                <td className="px-4 py-2 border">{coordinator.contact}</td>
                <td className="px-4 py-2 border">{coordinator.office}</td>
                <td className="px-4 py-2 border">{coordinator.assignedStudents}</td>
                <td className={`px-4 py-2 border ${getStatusColor(coordinator.status)}`}>
                  {coordinator.status}
                </td>
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
          className={`px-3 py-1 border rounded-lg ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <span>
          Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredCoordinators.length)}</b> of <b>{filteredCoordinators.length}</b>
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded-lg ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}


