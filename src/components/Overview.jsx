import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the required components for Chart.js
ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, ChartDataLabels);

const Overview = () => {
  const [activeTab, setActiveTab] = useState("HTEs");
  const [clickedBarIndex, setClickedBarIndex] = useState(null);

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
        backgroundColor: data.natureOfBusinesses.map((business, index) =>
          index === clickedBarIndex ? "#9A3259" : "#E5E7EB"
        ), // Change color of clicked bar
        barThickness: 70,
        borderRadius: 16,
        // Add custom options for data labels
        datalabels: {
          display: (context) => context.dataIndex === clickedBarIndex, // Show label only for the clicked bar
          anchor: "end",
          align: "end",
          color: "#000",
          font: {
            weight: "bold",
          },
          offset: 2, // Adjusted space between the label and the top of the bar
          backgroundColor: "#9A3259", // Background color for the label
          padding: 2, // Padding around the label text
          borderRadius: 5, // Rounded corners for the background
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
        color: "#000", // Set label color (black in this case)
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
    <div className="bg-gray-50 min-h-screen ml-[250px] mt-10 p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-1">
        {data.summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-2 flex flex-col items-center"
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

      {/* Tab Section */}
      <div className="mt-6">
        <div className="flex justify-start mb-4">
          {["HTEs", "MOAs", "Industry Partners"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-2 px-4">Document No.</th>
              <th className="py-2 px-4">Company</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Business</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.tableData[activeTab].map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">{row.doc}</td>
                <td className="py-2 px-4">{row.company}</td>
                <td className="py-2 px-4">{row.address}</td>
                <td className="py-2 px-4">{row.date}</td>
                <td className="py-2 px-4">{row.business}</td>
                <td className="py-2 px-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
