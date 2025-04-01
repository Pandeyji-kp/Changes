import Link from "next/link";
import React from "react";

const product = [
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


export default function RightSideListing() {
    return (
        <div className="w-full">
            <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3">
                {product.map((product, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
                        {/* Wrap image inside Link and pass product details */}
                        <div className="relative group">
                        <Link href={`/catalog/${product.category}`}>
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300 cursor-pointer"
                                />
                            </Link>
                        </div>

                        {/* Product Content */}
                        <div className="p-4">
                            <div className="text-sm text-gray-500">{product.category}</div>
                            <h3 className="text-lg font-semibold">
                                <Link href={`/ProductDetails/${product.title}`}>
                                    {product.title}
                                </Link>
                            </h3>

                            {/* Price */}
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                                <span className="text-red-500 text-lg font-semibold">{product.newPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
