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

  const data = {
    summaryCards: [
      { title: "Host Training Establishments (HTEs)", value: "7265", change: "+11.01%" },
      { title: "Memorandum of Agreements (MOAs)", value: "3671", change: "-0.03%" },
      { title: "On-the-Job Training Coordinators", value: "256", change: "+15.03%" },
      { title: "Industry Partners", value: "2318", change: "+6.08%" },
    ],
  Industrypartnercard: [
    { status: "Nature of Business 1", percentage: 52.1, color: "#34C759" },
    { status: "Nature of Business 2", percentage: 22.8, color: "#6750A4" },
    { status: "Nature of Business 3", percentage: 13.9, color: "#FF2D55" },
    { status: "Other", percentage: 11.2, color: "#CE93D8" },
  ],
    

    natureOfBusinesses: [
      { category: "Banking", count: 243000 },
      { category: "IT", count: 200000 },
      { category: "BPO", count: 180000 },
      { category: "MFG", count: 160000 },
      { category: "Corporation", count: 140000 },
      { category: "Other", count: 100000 },
    ],
    moaStatus: [
      { status: "Completed", percentage: 52.1, color: "#34C759" },
      { status: "Under Review", percentage: 22.8, color: "#FF2D55" },
      { status: "For Revision", percentage: 13.9, color: "#FFA000" },
      { status: "Other", percentage: 11.2, color: "#CE93D8" },
    ],
    tableData: {
      HTEs: [
        { doc: "00001", company: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", business: "Electric", status: "Completed" },
        { doc: "00002", company: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", business: "Book", status: "Processing" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },
      ],
      "Industry Partners": [
        { doc: "00004", company: "Tech Innovators", address: "45 Silicon Valley", date: "10 Mar 2020", business: "Software", status: "Active" },
        { doc: "00005", company: "Green Solutions", address: "123 Eco Park", date: "20 Jan 2021", business: "Renewables", status: "Inactive" },
      ],
      "OJT Coordinators": [
        { doc: "00006", company: "Alice Johnson", address: "789 Training Ave", date: "05 May 2021", business: "OJT Management", status: "Active" },
        { doc: "00007", company: "Mark Smith", address: "567 Coordinator Lane", date: "15 Jul 2021", business: "OJT Oversight", status: "Inactive" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },

      ],
    },
  };

  const [clickedCard, setClickedCard] = useState(null);

  const doughnutIndustrycardData = {
    labels: data.Industrypartnercard.map((status) => `${status.status} ${status.percentage}%`),
    datasets: [
      {
        data: data.Industrypartnercard.map((status) => status.percentage),
        backgroundColor: data.Industrypartnercard.map((status) => status.color),
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
          offset: 2, // Adjusted space between the label and the top of the bar
          backgroundColor: "#31111D", // Background color for the label
          padding: 3, // Padding around the label text
          borderRadius: 5, // Rounded corners for the background
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
        top: 10,
        bottom: 10,
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
    labels: data.moaStatus.map((status) => `${status.status} ${status.percentage}%`),
    datasets: [
      {
        data: data.moaStatus.map((status) => status.percentage),
        backgroundColor: data.moaStatus.map((status) => status.color),
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

  return (
<div className="bg-gray-50 ml-[250px] mt-10 p-3 h-screen overflow-hidden">
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
                  ? 'scale(1.4) translateX(15%)'
                  : isLastColumn
                  ? 'scale(1.4) translateX(-30%)'
                  : 'scale(1.4)'
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









      {/* Nature of Businesses and MOA Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {/* Bar Chart: Nature of Businesses */}
        <div className="bg-white shadow rounded-lg p-2 flex flex-col min-h-[50px] mb-1">
          <h3 className="text-lg font-medium text-gray-800 mb-1 text-center">
            Nature of Businesses
          </h3>
          <div className="h-[300px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Doughnut Chart: MOA Status */}
        <div className="bg-white shadow rounded-lg p-2 flex flex-col min-h-[50px] mb-1">
          <h3 className="text-lg font-medium text-gray-800 mb-1 text-center">
            Memorandum of Agreement (MOA) Status
          </h3>
          <div style={{ height: '300px', width: '100%' }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      
       {/* Tabbed Tables */}
       <div className="bg-white shadow rounded-lg p-4 h-full flex flex-col">
        <div className="flex space-x-4 border-b border-gray-200 mb-2">
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
        <div className="flex-1 overflow-auto">
        <table className="w-full table-auto text-left">
          <thead className="sticky top-0 bg-white shadow">
            <tr>
              <th className="py-2 px-4">Doc #</th>
              <th className="py-2 px-4">Company</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Nature of Business</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.tableData[activeTab].map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{row.doc}</td>
                <td className="py-2 px-4">{row.company}</td>
                <td className="py-2 px-4">{row.address}</td>
                <td className="py-2 px-4">{row.date}</td>
                <td className="py-2 px-4">{row.business}</td>
                <td
                  className={`py-2 px-4 font-medium ${
                    row.status === "Completed"
                      ? "text-green-600"
                      : row.status === "Processing"
                      ? "text-orange-600"
                      : row.status === "Rejected"
                      ? "text-red-600"
                      : row.status === "Active"
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {row.status}
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
