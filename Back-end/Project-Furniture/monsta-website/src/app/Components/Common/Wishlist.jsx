import React from "react";
import Link from "next/link";

export default function Wishlist() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">My Wishlist</h3>
        <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>&gt;</li>
          <li className="text-gray-800 font-medium">My Wishlist</li>
        </ul>
      </div>

      {/* Wishlist Content */}
      <div className="container mx-auto px-4 flex flex-col items-center mt-10">
        <img
          src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/wishlist-Empty.jpg"
          alt="Empty Wishlist"
          className="w-64 h-64 object-contain"
        />
        <p className="mt-4 text-lg text-gray-700">Your wishlist is empty!</p>
      </div>
    </div>
  );
}
