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
    <div className="p-10 ml-[260px] mt-2 mr-5 flex flex-col h-screen overflow-hidden">
          <h1 className="text-5xl font-semibold mb-6 mt-5">Industry Partners</h1>
                <div className="mb-3">
                  <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-2  w-fit">
                    {/* Filter Icon */}
                    <div>
                      <i className="fas fa-filter text-black mr-3 ml-3"></i>
                      <span className="text-sm text-black">Filter by</span>
                    </div>
                    <div className="h-6 border-r border-gray-300 mx-4"></div>
          
                    {/* Date Filter as Dropdown with Calendar */}
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
                    <div>
                      <input
                        placeholder="Nature of Business"
                        type="text"
                        value={filters.business}
                        onChange={(e) => setFilters({ ...filters, business: e.target.value })}
                        className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                      />
                    </div>
          
                    {/* Validity Filter */}
                    <div>
                      <select
                       placeholder="MOA Validity"
                        value={filters.validity}
                        onChange={(e) => setFilters({ ...filters, validity: e.target.value })}
                        className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                      >
                        <option value="" disabled>MOA Validity</option> {/* Placeholder effect */}
                        <option value="Completed">Completed</option>
                        <option value="Processing">Processing</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <div className="h-6 border-r border-gray-300 mx-4"></div>
          
                    {/* Reset Filters Button */}
                    <button onClick={resetFilters} className="px-4 py-2  text-red-700 rounded-md shadow-sm hover:bg-gray-200 flex items-center">
                      <i className="fas fa-undo mr-2 text-red-700"></i>  {/* FontAwesome reset icon */}
                      Reset Filters
                    </button>
                  </div>
                </div>
    
          {/* Table Section */}
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
                  {currentData.map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"} >
                      <td className="px-4 py-2 border-t">{item.id}</td>
                      <td className="px-4 py-2 border-t">{item.company}</td>
                      <td className="px-4 py-2 border-t">{item.address}</td>
                      <td className="px-4 py-2 border-t">{item.date}</td>
                      <td className="px-4 py-2 border-t">{item.business}</td>
                      <td className={`px-4 border-t rounded-full inline-block py-1 mt-1 mb-2  ${getValidityColor(item.validity)}`}>{item.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    
          <div className="flex justify-start items-center ">
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
              Showing <b>{startIndex + 1}</b> to <b>{Math.min(endIndex, filteredData.length)}</b> of <b>{filteredData.length}</b>
            </span>
          </div>
    
        </div>
    
      );
    }
    
