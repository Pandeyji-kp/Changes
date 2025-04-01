import Link from "next/link";
import React from "react";
const products = [
    {
      title: "Caroline Study Table",
      category: "Nest Of Tables",
      oldPrice: "Rs. 3,000",
      newPrice: "Rs. 2,500",
      imageUrl:
        "/images/Caroline Study Tables__.jpg",
    },
    {
      title: "Modern Wooden Chair",
      category: "Chairs",
      oldPrice: "Rs. 5,000",
      newPrice: "Rs. 4,200",
      imageUrl:
        "/images/Evan Coffee Table__.jpg",
    },
    {
      title: "Luxury Sofa Set",
      category: "Sofas",
      oldPrice: "Rs. 15,000",
      newPrice: "Rs. 12,500",
      imageUrl:
        "/images/Gloria Shoe Racks_.jpg",
    },
    {
      title: "Wooden Dining Table",
      category: "Dining Tables",
      oldPrice: "Rs. 8,000",
      newPrice: "Rs. 6,500",
      imageUrl:
        "/images/Bookshelfs_brown.jpg",
    },
    {
      title: "Stylish Bed Frame",
      category: "Beds",
      oldPrice: "Rs. 18,000",
      newPrice: "Rs. 14,999",
      imageUrl:
        "/images/Sofa Cum Bed__.jpg",
    },
    {
      title: "Office Desk",
      category: "Office Furniture",
      oldPrice: "Rs. 7,500",
      newPrice: "Rs. 6,000",
      imageUrl:
        "/images/Sheesham Wood Sofa Set___.jpg",
    },
    {
      title: "Bookshelf",
      category: "Storage",
      oldPrice: "Rs. 4,000",
      newPrice: "Rs. 3,500",
      imageUrl:
        "/images/Calina Swing Jhula__.jpg",
    },
  ];

export default function ProductCard() {
  return (
    <div className="container mx-auto p-4">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
            {/* Product Image */}
            <div className="relative group">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Content */}
            <div className="p-4">
              <div className="text-sm text-gray-500">{product.category}</div>
              <h3 className="text-lg font-semibold">
                <a href={product.productLink}>{product.title}</a>
              </h3>

              {/* Price */}
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </span>
                <span className="text-red-500 text-lg font-semibold">
                  {product.newPrice}
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

                <Link href="/Cart" passHref>
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
