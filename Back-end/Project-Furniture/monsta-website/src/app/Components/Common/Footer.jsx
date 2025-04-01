import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <p>Address: Claritas est etiam processus dynamicus</p>
            <p>Phone: <a href="tel:9781234560" className="text-blue-500">9781234560</a></p>
            <p>Email: furniture@gmail.com</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://facebook.com" target="_blank" className="text-blue-600 text-xl"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 text-xl"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" className="text-blue-400 text-xl"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" className="text-blue-700 text-xl"><FaLinkedin /></a>
              <a href="https://youtube.com" target="_blank" className="text-red-500 text-xl"><IoLogoYoutube /></a>
              <a href="https://telegram.com" target="_blank" className="text-blue-400 text-xl"><FaTelegram /></a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-3">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/AboutUs" className="hover:text-blue-500">About Us</Link></li>
              <li><Link href="/ContactUs" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="/FrequentlyHigh" className="hover:text-blue-500">Frequently Questions</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-bold mb-3">My Account</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-500">My Dashboard</Link></li>
              <li><Link href="/Wishlist" className="hover:text-blue-500">Wishlist</Link></li>
              <li><Link href="/Cart" className="hover:text-blue-500">Cart</Link></li>
              <li><Link href="/" className="hover:text-blue-500">Checkout</Link></li>
            </ul>
          </div>

          {/* Top Rated Products */}
          <div>
            <h3 className="text-lg font-bold mb-3">Top Rated Products</h3>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <Image src="/images/Leo TV Cabinets.jpg" alt="Sofa" width={50} height={50} className="rounded" />
                <div>
                  <h4 className="text-sm font-semibold">Victoria Sheesham Wood Sofa Set</h4>
                  <p className="text-xs text-gray-500 line-through">Rs. 8,000</p>
                  <p className="text-sm font-bold">Rs. 7,000</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Image src="/images/Dorian Shoe Rack_.jpg" alt="Drawer" width={50} height={50} className="rounded" />
                <div>
                  <h4 className="text-sm font-semibold">Isaac Chest of Drawer</h4>
                  <p className="text-xs text-gray-500 line-through">Rs. 32,000</p>
                  <p className="text-sm font-bold">Rs. 25,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-300 mt-6 pt-6 text-center">
          <ul className="flex justify-center space-x-6 text-sm">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/store" className="hover:text-blue-500">Online Store</Link></li>
            <li><Link href="/PrivacyPolicy" className="hover:text-blue-500">Privacy Policy</Link></li>
            <li><Link href="/Termsanduse" className="hover:text-blue-500">Terms Of Use</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm">
          <p>All Rights Reserved By Furniture | © 2025</p>
        </div>
        <div className="flex justify-center mt-4 text-sm">
          <img src="/images/papyel2.png" alt="" className="mx-auto" />
        </div>

      </div>
    </footer>
  )
}
