import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 

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
        <div className="bg-gray-50 md:ml-[300px] mt-10 p-7 min-h-screen overflow-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 mt-3">Memorandum of Agreements</h1>
        <div className="mb-3">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 bg-gray-50 border border-gray-200 rounded-lg p-3 w-full md:w-fit">
            
            {/* Filter Icon */}
            <div className="flex items-center">
              <i className="fas fa-filter text-black mr-2"></i>
              <span className="text-sm text-black">Filter by</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 border-r border-gray-300 mx-2"></div>

            {/* Date Filter */}
            <DatePicker
              selected={filters.date ? new Date(filters.date) : null}
              onChange={(date) => setFilters({ ...filters, date: date ? date.toISOString().split('T')[0] : "" })}
              dateFormat="yyyy-MM"
              showMonthYearPicker
              className="block w-full md:w-auto px-3 py-2 border rounded-md shadow-sm focus:outline-none"
              placeholderText="Select Date"
              customInput={
                <button className="flex items-center w-full md:w-auto px-3 py-2 border rounded-md">
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
              className="block w-full md:w-auto px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />

            {/* Validity Filter */}
            <select
              value={filters.validity}
              onChange={(e) => setFilters({ ...filters, validity: e.target.value })}
              className="block w-full md:w-auto px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            >
              <option value="" disabled>MOA Validity</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="On Hold">On Hold</option>
              <option value="Rejected">Rejected</option>
            </select>

            {/* Divider (Visible only on larger screens) */}
            <div className="hidden md:block h-6 border-r border-gray-300 mx-2"></div>

            {/* Reset Filters Button */}
            <button onClick={resetFilters} className="px-4 py-2 text-red-700 rounded-md shadow-sm hover:bg-gray-200 flex items-center w-full md:w-auto">
              <i className="fas fa-undo mr-2 text-red-700"></i>
              Reset Filters
            </button>

          </div>
        </div>


      {/* Table Section */}
        <div className="flex-grow h-full mt-1 overflow-x-auto">
        {/* Responsive Wrapper for Table */}
        <div className="overflow-x-auto">
        <table className="min-w-full h-auto border-collapse mt-3 hidden md:table">
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
              {currentData.map((item, index) => (
                <tr key={item.id} className={`md:table-row block w-full ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  {/* ID */}
                  <td className="px-4 py-2 border-t block md:table-cell">
                    <span className="md:hidden font-semibold">ID: </span> {item.id}
                  </td>
                  
                  {/* Company */}
                  <td className="px-4 py-2 border-t block md:table-cell">
                    <span className="md:hidden font-semibold">Company: </span> {item.company}
                  </td>
                  
                  {/* Address */}
                  <td className="px-4 py-2 border-t block md:table-cell">
                    <span className="md:hidden font-semibold">Address: </span> {item.address}
                  </td>
                  
                  {/* Date */}
                  <td className="px-4 py-2 border-t block md:table-cell">
                    <span className="md:hidden font-semibold">Date: </span> {item.date}
                  </td>
                  
                  {/* Nature of Business */}
                  <td className="px-4 py-2 border-t block md:table-cell">
                    <span className="md:hidden font-semibold">Business: </span> {item.business}
                  </td>
                  
                  {/* MOA Validity */}
                  <td className="px-4 border-t py-1 block md:table-cell">
                    <span className="md:hidden font-semibold">MOA Validity: </span> 
                    <span className={`rounded-full px-2 py-1 ${getValidityColor(item.validity)}`}>
                      {item.validity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

         {/* Mobile View (Cards) */}
         <div className="md:hidden">
          {currentData.map((item, index) => (
            <div key={item.id} className={`border border-gray-200 p-4 mb-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="flex justify-between">
                <div className="font-bold">{item.company}</div>
                <div className={`px-4 rounded-full py-1 ${getValidityColor(item.validity)}`}>
                  {item.validity}
                </div>
              </div>
              <div className="mt-2">
                <strong>ID:</strong> {item.id}
              </div>
              <div className="mt-2">
                <strong>Address:</strong> {item.address}
              </div>
              <div className="mt-2">
                <strong>Date:</strong> {item.date}
              </div>
              <div className="mt-2">
                <strong>Nature of Business:</strong> {item.business}
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Pagination Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-3">
          <div className="flex space-x-2">
            <button 
              onClick={handlePrevious} 
              disabled={currentPage === 1} 
              className="px-3 py-1 border rounded-lg hover:bg-gray-200 disabled:opacity-50"
            >
              ←
            </button>

            <button 
              onClick={handleNext} 
              disabled={currentPage === totalPages} 
              className="px-3 py-1 border rounded-lg hover:bg-gray-200 disabled:opacity-50"
            >
              →
            </button>
          </div>

          {/* Showing Results Info */}
          <span className="text-gray-500 text-sm mt-2 md:mt-0">
            Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredData.length)}</b> of <b>{filteredData.length}</b>
          </span>
        </div>
      </div>


    

  );
}
