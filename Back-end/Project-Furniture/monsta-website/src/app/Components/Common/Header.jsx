"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Heart, ShoppingCart } from "@deemlol/next-icons";
import { X, Menu } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);



    return (
        <header className="relative z-50 bg-white shadow-md">
            <div className="hidden md:block bg-gray-100 py-2">
                <div className="container mx-auto px-4 flex justify-between text-sm">
                    <p>Contact us 24/7 : +91-9781234560 / furniture@gmail.com</p>
                    <Link href="/Login" className="hover:underline">
                        Login / Register
                    </Link>
                </div>
            </div>
            <div className="border-b py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Logo" width={120} height={50} />
                    </Link>

                    {/* Search Box */}
                    <div className="flex-1 hidden sm:flex justify-center">
                        <div className="relative w-full max-w-[300px] md:max-w-[400px]">
                            <input
                                type="text"
                                placeholder="Search product..."
                                className="border p-2 pr-10 rounded w-full"
                            />
                            <Search
                                size={20}
                                color="gray"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            />
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Wishlist */}
                        <div className="border p-2 rounded cursor-pointer ">
                            <Link href='/Wishlist'>
                                <Heart size={24} color="black" />
                            </Link>
                        </div>

                        {/* Cart Button */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="p-2 bg-gray-200 rounded flex items-center gap-2"
                            >
                                <ShoppingCart size={24} />
                                <span className="hidden sm:block">0.00</span>
                                <div className="absolute left-[-12px] bg-[#c09578] w-6 h-6 flex items-center justify-center text-white text-xs rounded-full">
                                    0
                                </div>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            className="sm:hidden p-2 border rounded"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
            <nav className="relative bg-white">
                <div className="container mx-auto flex justify-center relative pb-[20px]">
                    <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 py-2">
                        <li><Link href="/">HOME</Link></li>
                        <li className="relative group">
                            {/* Hover to show menu */}
                            <a href="#" className="relative flex items-center gap-1">
                                LIVING
                                <FaAngleDown />
                            </a>
                            {/* Submenu */}
                            <ul className="absolute left-0 top-[32px] z-50 hidden w-[550px] border bg-white shadow-lg group-hover:flex ">
                                <li className="relative m-3">
                                    <a href="#" className="block p-2 text-gray-700 font-bold">Tables</a>
                                    <ul>
                                        <li><Link href="/catalog" className="block p-1">Side and End Tables</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Nest Of Tables</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Console Table</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Coffee Table Sets</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Coffee Tables</Link></li>
                                    </ul>
                                </li>
                                <li className="relative m-3">
                                    <a href="#" className="block p-2 text-gray-700 font-bold">Living Storage</a>
                                    <ul>
                                        <li><Link href="/catalog" className="block p-1">Prayer Units</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Display Unit</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Shoe Racks</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Cabinets and Sideboard</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Bookshelves</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Tv Units</Link></li>
                                    </ul>
                                </li>
                                <li className="relative m-3">
                                    <a href="#" className="block p-2 text-gray-700 font-bold">Mirrors</a>
                                    <ul>
                                        <li><Link href="/catalog" className="block p-1">Wooden</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            {/* Hover to show menu */}
                            <a href="#" className="relative flex items-center gap-1">
                            SOFA
                                <FaAngleDown />
                            </a>
                            {/* Submenu */}
                            <ul className="absolute left-0 top-[32px] z-50 hidden w-[550px] border bg-white shadow-lg group-hover:flex ">
                                <li className="relative m-3">
                                    <a href="#" className="block p-2 text-gray-700 font-bold">Sofa Cum Bed</a>
                                    <ul>
                                        <li><Link href="/catalog" className="block p-1">Wooden Sofa Cum Bed</Link></li>
                                    </ul>
                                </li>
                                <li className="relative m-3">
                                    <a href="#" className="block p-2 text-gray-700 font-bold">Sofa Sets</a>
                                    <ul>
                                        <li><Link href="/catalog" className="block p-1">L Shape Sofa</Link></li>
                                        <li><Link href="/catalog" className="block p-1">1 Seater Sofa</Link></li>
                                        <li><Link href="/catalog" className="block p-1">2 Seater Sofa</Link></li>
                                        <li><Link href="/catalog" className="block p-1">3 Seater Sofa</Link></li>
                                        <li><Link href="/catalog" className="block p-1">Wooden Sofa Sets</Link></li>
                                    </ul>
                                </li>
                                <li className="relative m-3">
                                    <a href="#" className="block p-2 text-gray-700 font-bold">Swing Jhula</a>
                                    <ul>
                                        <li><Link href="/catalog" className="block p-1">Wooden Jhula</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            {/* Hover to show menu */}
                            <a href="#" className="relative flex items-center gap-1">
                            PAGES
                                <FaAngleDown />
                            </a>
                            {/* Submenu */}
                            <ul className="absolute left-0 top-[32px] z-50 hidden w-[200px] border bg-white shadow-lg group-hover:flex ">
                                <li className="relative m-3">
                                    <ul>
                                        <li><Link href="/AboutUs" className="block p-1">About Us</Link></li>
                                        <li><Link href="/Cart" className="block p-1">Cart</Link></li>
                                        <li><Link href="/" className="block p-1">Checkout</Link></li>
                                        <li><Link href="/FrequentlyHigh" className="block p-1">Frequently Questions</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/ContactUs">CONTACT US</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Cart Overlay */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="w-80 h-full bg-white shadow-lg p-4 transform transition-transform translate-x-0">
                        {/* Cart Header */}
                        <div className="flex justify-between items-center border-b pb-2">
                            <h3 className="text-lg font-semibold">Cart</h3>
                            <button onClick={() => setIsCartOpen(false)}>
                                <X size={24} className="text-gray-500 hover:text-black" />
                            </button>
                        </div>

                        {/* Empty Cart */}
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <img
                                src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                                alt="Empty Cart"
                                className="w-32 h-32 mb-4"
                            />
                            <p className="text-gray-500">Your shopping cart is empty!</p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;


