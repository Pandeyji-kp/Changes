
import Link from "next/link";
import React from 'react'

export default function TrandingCollection() {
    return (
        <>
            <section
                className="w-full h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:
                        "url('https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg')",
                }}
            >
                <div className="container mx-auto px-4 flex flex-col justify-left">
                    <div className="text-left p-6 rounded-lg max-w-xxl">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">
                            New Trending Collection
                        </h2>
                        <p className='font-mono'>We Believe That Good Design is Always in Season</p>
                    </div>
                    <Link href="/cart" passHref>
                        <button className="w-[200px] text-[13px] font-medium uppercase text-[#c09578] border-2 border-[#c09578] rounded-[3px] mt-[70px] leading-[46px] inline-block">
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </section>

        </>
    )
}
