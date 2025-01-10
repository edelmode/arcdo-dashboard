import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Overview = () => {
  const [activeTab, setActiveTab] = useState("HTEs");

  const data = {
    summaryCards: [
      { title: "Host Training Establishments (HTEs)", value: "7,265", change: "+11.01%" },
      { title: "Memorandum of Agreements (MOAs)", value: "3,671", change: "-0.03%" },
      { title: "On-the-Job Training Coordinators", value: "256", change: "+15.03%" },
      { title: "Industry Partners", value: "2,318", change: "+6.08%" },
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
      { status: "Completed", percentage: 52.1, color: "green" },
      { status: "Under Review", percentage: 22.8, color: "orange" },
      { status: "For Revision", percentage: 13.9, color: "red" },
      { status: "Other", percentage: 11.2, color: "blue" },
    ],
    tableData: {
      HTEs: [
        { doc: "00001", company: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", business: "Electric", status: "Completed" },
        { doc: "00002", company: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", business: "Book", status: "Processing" },
        { doc: "00003", company: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", business: "Medicine", status: "Rejected" },
      ],
    },
  };

  // Bar Chart Data and Options
  const barData = {
    labels: data.natureOfBusinesses.map((business) => business.category),
    datasets: [
      {
        label: "Nature of Businesses",
        data: data.natureOfBusinesses.map((business) => business.count),
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9C27B0", "#795548"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for Bar chart
      },
    },
  };

  // Doughnut Chart Data and Options
  const doughnutData = {
    labels: data.moaStatus.map((status) => `${status.status} (${status.percentage}%)`),
    datasets: [
      {
        data: data.moaStatus.map((status) => status.percentage),
        backgroundColor: data.moaStatus.map((status) => status.color),
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right", // Place legend to the right
        labels: {
          usePointStyle: true, // Use circular markers in legends
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-[250px] mt-10">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-sm font-medium text-gray-600 text-center">
              {card.title}
            </h3>
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            <p
              className={`text-sm font-medium ${
                card.change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {card.change}
            </p>
          </div>
        ))}
      </div>

     {/* Nature of Businesses and MOA Status */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Bar Chart: Nature of Businesses */}
  <div className="bg-white shadow rounded-lg p-4 flex flex-col ">
    <h3 className="text-lg font-medium text-gray-800 mb-4">
      Nature of Businesses
    </h3>
    <div className="flex-grow flex items-center">
      <Bar data={barData} options={barOptions} />
    </div>
  </div>

  {/* Doughnut Chart: MOA Status */}
  <div className="bg-white shadow rounded-lg p-4 flex flex-col min-h-[100px]">
    <h3 className="text-lg font-medium text-gray-800 mb-4">
      Memorandum of Agreement (MOA) Status
    </h3>
    <div className="flex-grow flex justfy-center ml-10 w-64 h-64" >
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  </div>
</div>




      {/* Tabbed Tables */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex space-x-4 border-b border-gray-200 mb-4">
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
        <table className="w-full table-auto text-left">
          <thead>
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
                      : "text-red-600"
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
  );
};

export default Overview;
