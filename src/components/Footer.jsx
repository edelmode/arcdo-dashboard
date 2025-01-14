import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Left Section - Copyright */}
                    <div className="text-center sm:text-left mb-4 sm:mb-0 p-10 ml-[260px]">
                        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
