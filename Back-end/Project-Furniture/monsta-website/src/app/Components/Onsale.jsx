import React from "react";
import Link from "next/link";
const productsalesale = [
    {
      title: "Rex Console Table",
      category: "Console Table",
      oldPrice: "Rs. 3,000",
      newPrice: "Rs. 2,200",
      imageUrl:
        "/images/Onsale/Rex Console Table__.jpg",
    },
    {
      title: "Hardwell Temple Prayer Unit",
      category: "Prayer Units",
      oldPrice: "Rs. 10,000",
      newPrice: "Rs. 9,400",
      imageUrl:
        "/images/Onsale/Hardwell Temple Prayer Unit__.jpg",
    },
    {
      title: "Isaac Chest of Drawer",
      category: "Chest Of Drawers",
      oldPrice: "Rs. 32,000",
      newPrice: "Rs. 25,000",
      imageUrl:
        "/images/Onsale/Isaac Chest of Drawer_.jpg",
    },
    {
      title: "Leo TV Cabinets",
      category: "Tv Units",
      oldPrice: "Rs. 26,000",
      newPrice: "Rs. 21,000",
      imageUrl:
        "/images/Onsale/Leo TV Cabinets.jpg",
    },
    {
      title: "Winona Mirror",
      category: "L Shape Sofa",
      oldPrice: "Rs. 85,000",
      newPrice: "Rs. 76,000",
      imageUrl:
        "/images/Onsale/Group 1.jpg",
    },
    {
      title: "Victoria Sheesham Wood Sofa Set",
      category: "3 Seater Sofa",
      oldPrice: "Rs. 8,000",
      newPrice: "Rs.7,000",
      imageUrl:
        "/images/Onsale/Group 2.jpg",
    },
  ];

export default function Onsale() {
  return (
    <div className="container mx-auto p-4">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {productsalesale.map((productsale, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
            {/* productsale Image */}
            <div className="relative group">
                <img
                  src={productsale.imageUrl}
                  alt={productsale.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* productsale Content */}
            <div className="p-4">
              <div className="text-sm text-gray-500">{productsale.category}</div>
              <h3 className="text-lg font-semibold">
                <a href={productsale.productsaleLink}>{productsale.title}</a>
              </h3>

              {/* Price */}
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-400 line-through text-sm">
                  {productsale.oldPrice}
                </span>
                <span className="text-red-500 text-lg font-semibold">
                  {productsale.newPrice}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                {/* Wishlist */}
                <button className="p-2 rounded-full bg-gray-100 hover:bg-red-100 transition">
                  <img
                    src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg"
                    alt="Wishlist"
                    className="w-5 h-5"
                  />
                </button>

                <Link href="/cart" passHref>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
