import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CornerRightUp, CornerLeftDown } from 'lucide-react';


// Register the required components for Chart.js
ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, ChartDataLabels);

const Overview = () => {
  const [activeTab, setActiveTab] = useState("HTEs");
  const [clickedBarIndex, setClickedBarIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2020");

  

  const data = {
    summaryCards: [
      { title: "Host Training Establishments (HTEs)", value: "7265", change: "+11.01%" },
      { title: "Memorandum of Agreements (MOAs)", value: "3671", change: "-0.03%" },
      { title: "On-the-Job Training Coordinators", value: "256", change: "+15.03%" },
      { title: "Industry Partners", value: "2318", change: "+6.08%" },
    ],
  Industrypartnercard: [
    { STATUS: "Nature of Business 1", percentage: 52.1, color: "#34C759" },
    { STATUS: "Nature of Business 2", percentage: 22.8, color: "#6750A4" },
    { STATUS: "Nature of Business 3", percentage: 13.9, color: "#FF2D55" },
    { STATUS: "Other", percentage: 11.2, color: "#CE93D8" },
  ],
    

    natureOfBusinesses: [
      { category: "Banking", count: 160000 },
      { category: "IT", count: 200000 },
      { category: "BPO", count: 140000 },
      { category: "MFG", count: 243000  },
      { category: "Corporation", count: 180000  },
      { category: "Other", count: 100000 },
    ],
    moaSTATUS: [
      { STATUS: "Completed", percentage: 52.1, color: "#31111D" },
      { STATUS: "Under Review", percentage: 22.8, color: "#630F3C" },
      { STATUS: "For Revision", percentage: 13.9, color: "#7A1642" },
      { STATUS: "Other", percentage: 11.2, color: " #FF2D55 " },
    ],
    tableData: {
      HTEs: [
        { DOC: "00001", COMPANY: "Christine Brooks", ADDRESS: "089 Kutch Green Apt. 448", DATE: "14 Feb 2019", business: "Electric", STATUS: "Completed" },
        { DOC: "00002", COMPANY: "Rosie Pearson", ADDRESS: "979 Immanuel Ferry Suite 526", DATE: "14 Feb 2019", business: "Book", STATUS: "Processing" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
      ],
      "INDUSTRY PARTNERS": [
        { DOC: "00004", COMPANY: "Tech Innovators", ADDRESS: "45 Silicon Valley", DATE: "10 Mar 2020", business: "Software", STATUS: "Active" },
        { DOC: "00005", COMPANY: "Green Solutions", ADDRESS: "123 Eco Park", DATE: "20 Jan 2021", business: "Renewables", STATUS: "Inactive" },
      ],
      "OJT COORDINATORS": [
        { DOC: "00006", COMPANY: "Alice Johnson", ADDRESS: "789 Training Ave", DATE: "05 May 2021", business: "OJT Management", STATUS: "Active" },
        { DOC: "00007", COMPANY: "Mark Smith", ADDRESS: "567 Coordinator Lane", DATE: "15 Jul 2021", business: "OJT Oversight", STATUS: "Inactive" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },
        { DOC: "00003", COMPANY: "Darrell Caldwell", ADDRESS: "8587 Frida Ports", DATE: "14 Feb 2019", business: "Medicine", STATUS: "Rejected" },

      ],
    },
  };

  const [clickedCard, setClickedCard] = useState(null);

  const doughnutIndustrycardData = {
    labels: data.Industrypartnercard.map((STATUS) => `${STATUS.STATUS} ${STATUS.percentage}%`),
    datasets: [
      {
        data: data.Industrypartnercard.map((STATUS) => STATUS.percentage),
        backgroundColor: data.Industrypartnercard.map((STATUS) => STATUS.color),
        hoverOffset: 5,
      },
    ],
  };

  const doughnutndustrycardOptions = {
    maintainAspectRatio: false, // Allow the chart to have custom height and width
    aspectRatio: 1, // Defines the aspect ratio (1:1 means it's a circle)
    responsive: true,
    plugins: {
      legend: {
        position: "right", // Place legend to the right
        labels: {
          color: "white",
          usePointStyle: true, // Use circular markers in legends
          padding: 6, // Adjust padding between legend items
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 7, // Set the border width between segments
        borderColor: "#0000", // Set the border color between segments
      },
    },
    cutout: '50%',  // Increase to make the doughnut thinner and increase space between slices
  };

  // Function to format large numbers
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000) + 'k'; // Format as "200k"
    }
    return num;
  };

  // Bar Chart Data and Options
  const barData = {
    labels: data.natureOfBusinesses.map((business) => business.category),
    datasets: [
      {
        label: "Nature of Businesses",
        data: data.natureOfBusinesses.map((business) => business.count),
        backgroundColor: data.natureOfBusinesses.map((business, index) =>
          index === clickedBarIndex ? "#31111D" : "#FFD8E4"
        ), // Change color of clicked bar
        barThickness: 70,
        borderRadius: 16,
        // Add custom options for data labels
        datalabels: {
          display: (context) => context.dataIndex === clickedBarIndex, // Show label only for the clicked bar
          anchor: "end",
          align: "end",
          color: "#FFFFFF",
          font: {
            weight: "bold",
          },
          offset: 4, // Adjusted space between the label and the top of the bar
          backgroundColor: "#31111D", // Background color for the label
          padding: 8, // Padding around the label text
          borderRadius: 20, // Rounded corners for the background
          formatter: (value) => formatNumber(value), // Format numbers here
        },
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for Bar chart
      },
      datalabels: {
        anchor: "end", // Position the label at the top of the bar
        align: "end",  // Align the label to the end (top) of the bar
        font: {
          weight: "bold", // Set font weight for labels
          size: 20, // Set font size for labels 
        },
       
        backgroundColor: "#FF6347", // Background color for the label
        borderRadius: 5, // Rounded corners for the background
        
      },
    },
    scales: {
      y: {
        ticks: {
          display: false, // Hide Y-axis labels
        },
        grid: {
          display: false, // Hide Y-axis grid lines
        },
        border: {
          display: false,  // Remove y-axis line
        },
      },
      x: {
        grid: {
          display: false, // Hide X-axis grid lines
        },
        border: {
          display: false,  // Remove x-axis line
        },
      },
    },
    layout: {
      padding: {
        top: 40,
        bottom: 3,
        left: 10,
        right: 10,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setClickedBarIndex(index === clickedBarIndex ? null : index); // Toggle clicked state
      }
    },
  };



  // Doughnut Chart Data and Options
  const doughnutData = {
    labels: data.moaSTATUS.map((STATUS) => `${STATUS.STATUS} ${STATUS.percentage}%`),
    datasets: [
      {
        data: data.moaSTATUS.map((STATUS) => STATUS.percentage),
        backgroundColor: data.moaSTATUS.map((STATUS) => STATUS.color),
        hoverOffset: 5,
      },
    ],
  };

  const doughnutOptions = {
    maintainAspectRatio: false, // Allow the chart to have custom height and width
    aspectRatio: 1, // Defines the aspect ratio (1:1 means it's a circle)
    responsive: true,
    plugins: {
      legend: {
        position: "right", // Place legend to the right
        labels: {
          usePointStyle: true, // Use circular markers in legends
          padding: 15, // Adjust padding between legend items
          font: {
            weight: "bold",
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 7, // Set the border width between segments
      },
    },
    cutout: '40%',  // Increase to make the doughnut thinner and increase space between slices
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
<div className="bg-gray-50 ml-[250px] mt-10 p-7 h-screen overflow-hidden">
  {/* Summary Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-1 relative">
    {data.summaryCards.map((card, index) => {
      // Determine if the card is in the first or last column
      const isFirstColumn = index % 4 === 0;
      const isLastColumn = (index + 1) % 4 === 0;

      // Calculate Main Campus and Other Campuses
      const value1 = Math.round(card.value * 0.6); // 60% of the total
      const value2 = card.value - value1;   // Remaining 40%

      // Define Gradient Backgrounds
      const gradientClass = card.title === "Host Training Establishments (HTEs)" || card.title === "On-the-Job Training Coordinators" 
        ? "bg-gradient-to-b from-[#31111D] to-[#9A3259]"  // HTE and OJT Coordinators
        : "bg-gradient-to-b from-[#BC407A] to-[#530061]";  // MOAs and Industry Partners
        
      const gradientClass2 = card.title === "Host Training Establishments (HTEs)" || card.title === "On-the-Job Training Coordinators" 
        ? "bg-gradient-to-b from-[#9A3259] to-[#31111D]"  // HTE and OJT Coordinators
        : "bg-gradient-to-b from-[#530061] to-[#BC407A]";  // MOAs and Industry Partners

      return (
        <div
          key={index}
          className={` shadow-lg rounded-t-2xl p-4 flex items-center justify-between transform transition-transform duration-300 ${gradientClass} ${
            clickedCard === index ? 'scale-150 z-50' : 'scale-100'
          }`}
          style={{
            zIndex: clickedCard === index ? 50 : 1,
            width: clickedCard === index ? '130%' : '100%',
            transform:
              clickedCard === index
              ? isFirstColumn
              ? 'scale(1.4) translateX(15%) translateY(15%)'
              : isLastColumn
              ? 'scale(1.4) translateX(-30%) translateY(15%)'
              : 'scale(1.4) translateY(15%)'
            : 'scale(1)',
          }}
          onClick={() => setClickedCard(clickedCard === index ? null : index)} // Toggle zoom
        >
          <div
            className={`flex flex-col transition-all duration-300 ${
              clickedCard === index ? 'text-lg' : 'text-sm'
            }`}
          >
            <h3
              className={`font-medium text-white mb-4 ${
                clickedCard === index ? 'text-xl' : 'text-sm'
              }`}
            >
              {card.title}
            </h3>
            <p className={`font-bold text-white ${clickedCard === index ? 'text-4xl' : 'text-2xl'}`}>
              {parseFloat(card.value.replace(/,/g, '')).toLocaleString()} {/* Format value with commas */}
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            {card.change.startsWith("+") ? (
              <CornerRightUp
                className={`transition-transform duration-300 mb-10 ${
                  clickedCard === index ? 'text-white scale-150' : 'text-white'
                }`}
              />
            ) : (
              <CornerLeftDown
                className={`transition-transform duration-300 mb-10 ${
                  clickedCard === index ? 'text-white scale-150' : 'text-white'
                }`}
              />
            )}
            <p
              className={`transition-all duration-300 font-medium ${
                card.change.startsWith("+")
                  ? clickedCard === index
                    ? ' text-lg text-white'
                    : ' text-sm text-white'
                  : clickedCard === index
                  ? ' text-lg text-white'
                  : ' text-sm text-white'
              }`}
            >
              {clickedCard === index ? "Total" : card.change}
            </p>
          </div>

          {/* Dropdown for MOAs and Industry Partners */}
          {clickedCard === index && card.title === "Memorandum of Agreements (MOAs)" && (
            <div className={`absolute top-full left-0 w-full shadow-lg rounded-b-2xl p-4 z-10 ${gradientClass2}`}>
              <div className="flex justify-between mb-2">
                <p className="text-2xl font-bold text-white -mt-5">
                  {parseFloat(value1).toLocaleString()} {/* HTEs value */}
                </p>
                <p className="text-sm text-white font-medium text-right -mt-5">
                  HTEs {/* Text */}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-2xl font-bold text-white">
                  {parseFloat(value2).toLocaleString()} {/* Industry Partners value */}
                </p>
                <p className="text-sm text-white font-medium text-right">
                  Industry Partners {/* Text */}
                </p>
              </div>
            </div>
          )}

          {/* Dropdown for Host Training Establishments (HTEs) */}
          {clickedCard === index && (card.title === "Host Training Establishments (HTEs)" || card.title === "On-the-Job Training Coordinators") && (
            <div className={`absolute top-full left-0 w-full shadow-lg rounded-b-2xl p-4 z-10 ${gradientClass2}`}>
              <div className="flex justify-between mb-2">
                <p className="text-2xl font-bold text-white -mt-5">
                  {parseFloat(value1).toLocaleString()} {/* HTEs value */}
                </p>
                <p className="text-sm text-white font-medium text-right -mt-5">
                  Main Campus {/* Text */}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-2xl font-bold text-white">
                  {parseFloat(value2).toLocaleString()} {/* Other Campuses value */}
                </p>
                <p className="text-sm text-white font-medium text-right">
                  Other Campuses {/* Text */}
                </p>
              </div>
            </div>
          )}

          {/* Doughnut Chart for Industry Partners */}
          {clickedCard === index && card.title === "Industry Partners" && (
            <div className={`absolute top-full left-0 w-full shadow-lg rounded-b-2xl p-4 z-10 ${gradientClass2}`}>
              <div className="flex justify-between mb-2 -mt-7">
                <div style={{ height: '150px', width: '100%' }}>
                  <Doughnut data={doughnutIndustrycardData} options={doughnutndustrycardOptions} />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>









      {/* Nature of Businesses and MOA STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {/* Bar Chart: Nature of Businesses */}
        <div className="bg-white shadow rounded-lg p-2 flex flex-col min-h-[40px] ">
          <h3 className="text-lg font-medium text-gray-800 p-5">
            Nature of Businesses
          </h3>
          <div className="h-[300px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Doughnut Chart: MOA STATUS */}
        <div className="bg-white shadow rounded-lg p-2 flex flex-col min-h-[50px] mb-1">
          <h3 className="text-lg font-medium text-gray-800 p-5">
            Memorandum of Agreement (MOA) STATUS
          </h3>
          <div style={{ height: '300px', width: '100%' }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      
        {/* Tabbed Tables */}
      <div className="bg-white shadow rounded-lg p-4 flex h-30 flex-col">
        {/* Tab Buttons and Year Dropdown Container */}
        <div className="flex justify-between items-center border-b border-gray-200 mb-2 -mt-2">
          {/* Tab Buttons */}
          <div className="flex space-x-4 -mt-5">
            {Object.keys(data.tableData).map((tab, index) => (
              <button
                key={index}
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Year Dropdown */}
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="py-2 px-4 mb-3 border rounded-md text-gray-700"
          >
            {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto max-h-60 -mt-5 ">
          <table className="w-full table-auto text-left ">
            <thead className="sticky top-0 bg-white shadow">
              <tr  className="border-b border-gray-200">
                <th className="py-2 px-4">DOC #</th>
                <th className="py-2 px-4">COMPANY</th>
                <th className="py-2 px-4">ADDRESS</th>
                <th className="py-2 px-4">DATE</th>
                <th className="py-2 px-4">NATURE OF BUSINESS</th>
                <th className="py-2 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {data.tableData[activeTab].map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 text-center">
                  <td className="py-2 px-4">{row.DOC}</td>
                  <td className="py-2 px-4">{row.COMPANY}</td>
                  <td className="py-2 px-4">{row.ADDRESS}</td>
                  <td className="py-2 px-4">{row.DATE}</td>
                  <td className="py-2 px-4">{row.business}</td>
                  <td
                    className={`py-2 px-4 text-center rounded-full font-normal ${
                      row.STATUS === "Completed"
                        ? "text-green-600 bg-green-100 inline-block py-1 mt-1 mb-2"
                        : row.STATUS === "Processing"
                        ? "text-orange-600 bg-orange-100 inline-block py-1 mt-1 mb-2"
                        : row.STATUS === "Rejected"
                        ? "text-red-600 bg-red-100 inline-block py-1 mt-1 mb-2"
                        : row.STATUS === "Active"
                        ? "text-green-600 bg-green-100 inline-block py-1 mt-1 mb-2"
                        : "text-gray-500 bg-gray-100 inline-block py-1 mt-1 mb-2"
                    }`}
                  >
                    {row.STATUS}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
