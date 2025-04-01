"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1); // No ": number"

    const [faqs, setFaqs] = useState([]);
    
    
        useEffect(() => {
            axios.post('http://localhost:5000/api/website/faqs/view')
                .then((response) => {
                  setFaqs(response.data.data);
    
                })
                .catch(() => [
                    toast.error('Something went wrong !!')
                ])
        }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h3>
          <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>&gt;</li>
            <li className="text-gray-800 font-medium">FAQ</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {faqs.map((v,i) => (
            <div key={i} className="mb-4 border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(i)}
                name='question'
                className="flex justify-between items-center w-full p-4 bg-blue-500 text-white text-left font-medium"
              >
                {v.question}
                <span>{openIndex === i ? "➖" : "➕"}</span>
              </button>
              {openIndex === i && (
                <div  name='answer' className="p-4 bg-gray-100 text-gray-800">
                  {v.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
