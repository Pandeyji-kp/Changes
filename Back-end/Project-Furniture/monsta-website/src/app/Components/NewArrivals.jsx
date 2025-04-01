import React from "react";
import Link from "next/link";
const product = [
    {
      title: "Hrithvik Stool",
      category: "Side and End Tables",
      oldPrice: "Rs. 7,000",
      newPrice: "Rs. 6,000",
      imageUrl:
        "/images/NewArrivals/Hrithvik Stool__.jpg",
    },
    {
      title: "Godfrey Coffee Table Set",
      category: "Coffee Table Sets",
      oldPrice: "Rs. 3,000",
      newPrice: "Rs. 2,200",
      imageUrl:
        "/images/NewArrivals/Godfrey Coffee Table Set__.jpg",
    },
    {
      title: "Dorian Shoe Rack",
      category: "Display Unit",
      oldPrice: "Rs. 3,500",
      newPrice: "Rs. 2,800",
      imageUrl:
        "/images/NewArrivals/Dorian Shoe Rack_.jpg",
    },
    {
      title: "Louise Cabinet",
      category: "Cabinets and Sideboard",
      oldPrice: "Rs. 28,000",
      newPrice: "Rs. 23,000",
      imageUrl:
        "/images/NewArrivals/Louise Cabinet_.jpg",
    },
    {
      title: "Winona Mirror",
      category: "Wooden Mirrors",
      oldPrice: "Rs. 2,000",
      newPrice: "Rs. 1,500",
      imageUrl:
        "/images/NewArrivals/Winona Mirror__.jpg",
    },
    {
      title: "Yuvi sheesham wood sofa set",
      category: "1 Seater Sofa",
      oldPrice: "Rs. 10,000",
      newPrice: "Rs.7,600",
      imageUrl:
        "/images/NewArrivals/Group 1.jpg",
    },
    {
      title: "Grace Sheesham Wood Sofa Set",
      category: "Wooden Sofa Sets",
      oldPrice: "Rs. 90,000",
      newPrice: "Rs. 72,500",
      imageUrl:
        "/images/NewArrivals/Group 2.jpg",
    },
  ];

export default function NewArrivals() {
  return (
    <div className="container mx-auto p-4">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {product.map((product, index) => (
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
