import React, { useState } from "react";

export default function HTEDashboard() {
  const allData = [
    { id: "00001", company: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "2019-09-04", business: "Electric", validity: "Completed" },
    { id: "00002", company: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "2019-05-28", business: "Book", validity: "Processing" },
    { id: "00003", company: "Jasmine Lee", address: "452 Main St. Suite 12", date: "2020-01-15", business: "Consulting", validity: "Completed" },
    { id: "00004", company: "Michael Harris", address: "301 Elm St. Apt. 22", date: "2019-08-30", business: "Retail", validity: "On Hold" },
    { id: "00005", company: "Sarah Carter", address: "123 Pine Ave. Suite 8B", date: "2020-11-19", business: "Food Services", validity: "Rejected" },
    { id: "00006", company: "William Jones", address: "984 Maple St. Building 3", date: "2021-02-03", business: "Tech", validity: "Processing" },
    { id: "00007", company: "Emma Wilson", address: "17 Oak Lane", date: "2021-07-12", business: "Education", validity: "Completed" },
    { id: "00008", company: "James Brown", address: "456 Cedar Rd.", date: "2022-03-23", business: "Healthcare", validity: "Processing" },
    { id: "00009", company: "Alice Johnson", address: "789 Pine St.", date: "2022-12-10", business: "Finance", validity: "Completed" },
    { id: "00010", company: "Robert Smith", address: "321 Birch Rd.", date: "2023-01-18", business: "Logistics", validity: "On Hold" },
    { id: "00011", company: "David Wilson", address: "654 Oak Ave.", date: "2023-02-25", business: "Marketing", validity: "Processing" },
    { id: "00012", company: "Laura Martinez", address: "567 Willow Dr.", date: "2023-03-14", business: "Technology", validity: "Completed" },
    { id: "00013", company: "Sophia Davis", address: "101 Maple Ln.", date: "2023-04-30", business: "Education", validity: "Rejected" },
    { id: "00014", company: "Chris Brown", address: "404 Elm St.", date: "2023-05-12", business: "Healthcare", validity: "Processing" },
    { id: "00015", company: "Emily Clark", address: "202 Pine Ave.", date: "2023-06-20", business: "Finance", validity: "Completed" },
    { id: "00016", company: "Daniel White", address: "300 Cedar Blvd.", date: "2023-07-07", business: "Logistics", validity: "On Hold" },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    date: "",
    business: "",
    validity: "",
  });

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  // Apply filters
  const filteredData = allData.filter((item) => {
    const matchesDate = filters.date
      ? item.date.startsWith(filters.date) // Compare YYYY-MM
      : true;
    const matchesBusiness = filters.business
      ? item.business.toLowerCase().includes(filters.business.toLowerCase())
      : true;
    const matchesValidity = filters.validity
      ? item.validity === filters.validity
      : true;

    return matchesDate && matchesBusiness && matchesValidity;
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
    setFilters({ date: "", business: "", validity: "" });
    setCurrentPage(1);
  };

  const getValidityColor = (validity) => {
    switch (validity) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Processing":
        return "bg-purple-100 text-purple-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      case "On Hold":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-5 ml-[260px] mt-[4.5rem] mr-5 flex flex-col h-[calc(100vh-4.5rem)]">
      {/* Filter Section */}
      <div className="flex items-center space-x-4 mb-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date (Month, Year)</label>
          <input
            type="month"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nature of Business</label>
          <input
            type="text"
            value={filters.business}
            onChange={(e) => setFilters({ ...filters, business: e.target.value })}
            placeholder="Search business..."
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">MOA Validity</label>
          <select
            value={filters.validity}
            onChange={(e) => setFilters({ ...filters, validity: e.target.value })}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="On Hold">On Hold</option>
            <option value="Rejected">Rejected</option>
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
              <th className="px-4 py-2 text-left border">COMPANY</th>
              <th className="px-4 py-2 text-left border">ADDRESS</th>
              <th className="px-4 py-2 text-left border">DATE</th>
              <th className="px-4 py-2 text-left border">NATURE OF BUSINESS</th>
              <th className="px-4 py-2 text-left border">MOA VALIDITY</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.company}</td>
                <td className="px-4 py-2 border">{item.address}</td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">{item.business}</td>
                <td className={`px-4 py-2 border ${getValidityColor(item.validity)}`}>
                  {item.validity}
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
          Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredData.length)}</b> of <b>{filteredData.length}</b>
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
