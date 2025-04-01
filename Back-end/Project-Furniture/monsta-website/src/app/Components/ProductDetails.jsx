"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Related from './RelatedProduct';
import Upsell from './UpsellProduct';

const product = {
    name: "Evan Coffee Table",
    price: "Rs. 2,300",
    oldPrice: "Rs. 2,600",
    description: "The Evan Coffee table has stools that can be encased under the table.",
    imageUrl:
      "/images/Caroline Study Tables__.jpg",
    meta: {
      code: "jod00113",
      dimension: "72L * 32H * 30W",
      deliveryDays: "30-35 Days",
      category: "Coffee Tables",
      color: "Faded Ochre",
      material: "Marandi Wood",
    },
}

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-semibold mb-2 md:mb-0">{product.name}</h3>
            <ul className="flex items-center text-gray-600 text-sm space-x-2">
              <li>
                <Link href="https://wscubetech.co/Assignments/furniture" className="hover:text-gray-800">Home</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link href="/catalog" className="hover:text-gray-800">Coffee Tables</Link>
              </li>
              <li>&gt;</li>
              <li className="text-gray-800">{product.name}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="border rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-500 line-through">{product.oldPrice}</span>
              <span className="text-green-600 text-xl font-semibold">{product.price}</span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
              onClick={() => alert("Added to cart")}
            >
              Add to Cart
            </button>
            <div className="mt-6 text-gray-600">
              <p><strong>Code:</strong> {product.meta.code}</p>
              <p><strong>Dimension:</strong> {product.meta.dimension}</p>
              <p><strong>Estimate Delivery:</strong> {product.meta.deliveryDays}</p>
              <p><strong>Category:</strong> {product.meta.category}</p>
              <p><strong>Color:</strong> {product.meta.color}</p>
              <p><strong>Material:</strong> {product.meta.material}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="border-b">
            <ul className="flex space-x-4">
              <li>
                <button
                  className={`py-2 px-4 text-lg font-medium ${activeTab === "description" ? "border-b-2 border-gray-800" : "text-gray-500"}`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
              </li>
            </ul>
          </div>
          <div className="pt-4">
            {activeTab === "description" && (
              <div className="text-gray-700 text-lg">
                <p>
                  The Evan Coffee table has stools that can be encased under the table. 
                  The stools are cushioned to keep you comfortable, and since they can be put away under the table, 
                  they do not take up much space. This table is made of Sheesham wood, and the design is practical and functional.
                  It can seamlessly blend in with any décor style owing to its simple yet elegant design.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Related/>

      <Upsell/>
    </>
  );
}
