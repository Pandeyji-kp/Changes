"use client";

import Link from "next/link";
import LeftSideListing from "./Common/LeftSideListing";
import RightSideListing from "./Common/RightSideListing";


export default function ProductListing() {


    return (
        <>
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Product Listing</h3>
                    <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
                        <li>
                            <Link href="/" className="hover:text-blue-500">Home</Link>
                        </li>
                        <li>&gt;</li>
                        <li className="text-gray-800 font-medium">Product Listing</li>
                    </ul>
                </div>
            </div>
            <section
                class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >


                <LeftSideListing />
                <RightSideListing />


            </section>
        </>
    )
}
