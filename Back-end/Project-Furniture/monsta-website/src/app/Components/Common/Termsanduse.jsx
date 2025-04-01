import React from 'react'
import Link from 'next/link';

export default function Termsanduse() {
  return (
    <>
      <div>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Terms of Use</h3>
          <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>&gt;</li>
            <li className="text-gray-800 font-medium">Terms of Use</li>
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-3xl text-gray-700">
        <h2 className="text-xl font-semibold mb-4">Who we are</h2>
        <p>
          Our website address is: <a href="http://localhost/furniture" className="text-blue-500">http://localhost/furniture</a>
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">What personal data we collect and why</h2>
        <h3 className="text-lg font-medium mb-2">Comments</h3>
        <p>When visitors leave comments, we collect the data shown in the comments form along with the visitor’s IP address.</p>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Media</h3>
        <p>If you upload images, avoid including embedded location data (EXIF GPS).</p>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Cookies</h3>
        <p>If you leave a comment, cookies may store your name, email, and website for your convenience.</p>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Embedded Content</h3>
        <p>Articles may include embedded content that behaves the same as visiting the original site.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">How long we retain your data</h2>
        <p>Comments and their metadata are retained indefinitely to recognize follow-ups automatically.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Your Rights Over Your Data</h2>
        <p>You can request an exported file of your personal data or request its deletion, except for data kept for legal purposes.</p>
      </div>
    </div>

    </>
  )
}
