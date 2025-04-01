"use client"
import React, { useState } from "react";
import ProductCard from "./FeaturedProducts";
import NewArrivals from "./NewArrivals";
import Onsale from "./Onsale";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="flex flex-col items-center p-4">
      {/* Tab Buttons */}
      <ul className="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-lg shadow-md">
        {["featured", "arrivals", "onsale"].map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {tab === "featured" ? "Featured" : tab === "arrivals" ? "New Arrivals" : "Onsale"}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-6 border rounded-lg shadow-md bg-white">
        {activeTab === "featured" && <p className="text-center"><ProductCard/></p>}
        {activeTab === "arrivals" && <p className="text-center"><NewArrivals/></p>}
        {activeTab === "onsale" && <p className="text-center"><Onsale/></p>}
      </div>
    </div>
  );
}

