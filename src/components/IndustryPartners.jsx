import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function IndustryPartners() {
  const [allPartners, setAllPartners] = useState([]); // Changed initial state to an empty array
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    date: "",
    business: "",
    validity: "",
  });

  const itemsPerPage = 5;

  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API...");
        const response = await axios.get('http://localhost:3001/api/industry_partner'); // Ensure backend endpoint is correct
        console.log("Fetched Data:", response.data); // Debugging: Check API response

        // Ensure response.data is an array before setting state
        if (Array.isArray(response.data)) {
          setAllPartners(response.data);
          setFilteredPartners(response.data); // Set initial data
          console.log("Data set successfully");
        } else {
          setAllPartners([]); // Handle unexpected response format
          setFilteredPartners([]);
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllPartners([]); // Handle API error
        setFilteredPartners([]);
      }
    };

    fetchData();
  }, []);

  // Filter Data
  const filteredDataResults = allPartners ? allPartners.filter((item) => {
    const matchesDate = filters.date ? item.date.startsWith(filters.date) : true;
    const matchesBusiness = filters.business ? item.business.toLowerCase().includes(filters.business.toLowerCase()) : true;
    const matchesValidity = filters.validity ? item.validity === filters.validity : true;
    return matchesDate && matchesBusiness && matchesValidity;
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
    setFilters({ date: "", business: "", validity: "" });
    setCurrentPage(1);
  };

  const getValidityColor = (validity) => {
    switch (validity) {
      case "Completed": return "bg-green-100 text-green-600";
      case "Processing": return "bg-purple-100 text-purple-600";
      case "Rejected": return "bg-red-100 text-red-600";
      case "On Hold": return "bg-yellow-100 text-yellow-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-10 ml-[260px] mt-2 mr-5 flex flex-col h-screen overflow-hidden">
      <h1 className="text-5xl font-semibold mb-6 mt-5">Industry Partners</h1>

      {/* Filters */}
      <div className="mb-3">
        <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-2 w-fit">
          <div>
            <i className="fas fa-filter text-black mr-3 ml-3"></i>
            <span className="text-sm text-black">Filter by</span>
          </div>
          <div className="h-6 border-r border-gray-300 mx-4"></div>

          {/* Date Filter */}
          <DatePicker
            selected={filters.date ? new Date(filters.date) : null}
            onChange={(date) => setFilters({ ...filters, date: date ? date.toISOString().split('T')[0] : "" })}
            dateFormat="yyyy-MM"
            showMonthYearPicker
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            placeholderText="Select Date"
            customInput={
              <button className="flex items-center px-3 py-2 border rounded-md">
                {filters.date ? new Date(filters.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' }) : 'Select Date'}
                <i className="ml-2 fas fa-chevron-down"></i>
              </button>
            }
          />

          {/* Business Filter */}
          <input
            placeholder="Nature of Business"
            type="text"
            value={filters.business}
            onChange={(e) => setFilters({ ...filters, business: e.target.value })}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
          />

          {/* Validity Filter */}
          <select
            value={filters.validity}
            onChange={(e) => setFilters({ ...filters, validity: e.target.value })}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
          >
            <option value="" disabled>MOA Validity</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="On Hold">On Hold</option>
            <option value="Rejected">Rejected</option>
          </select>

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
              <th className="px-4 py-2 text-left border-b">COMPANY</th>
              <th className="px-4 py-2 text-left border-b">ADDRESS</th>
              <th className="px-4 py-2 text-left border-b">DATE</th>
              <th className="px-4 py-2 text-left border-b">NATURE OF BUSINESS</th>
              <th className="px-4 py-2 text-left border-b">MOA VALIDITY</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2 border-t">{item.id || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.company || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.address || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.date || "N/A"}</td>
                  <td className="px-4 py-2 border-t">{item.business || "N/A"}</td>
                  <td className={`px-4 border-t rounded-full inline-block py-1 mt-1 mb-2 ${getValidityColor(item.validity)}`}>{item.validity || "N/A"}</td>
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
