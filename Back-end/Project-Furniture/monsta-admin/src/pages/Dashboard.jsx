import React from 'react'

export default function Dashboard() {
    return (
        <>

            <div className="grid grid-cols-3 gap-5">
                <div className="h-48 p-5 rounded-md shadow-lg bg-indigo-600">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[25px] text-white font-bold">26K <span className="text-[18px]">(-12.4% ↓)</span></h3>
                        <span>
                            <svg fill="white" className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                            </svg>
                        </span>
                    </div>
                    <h3 className="text-[22px] font-semibold text-white">Users</h3>
                </div>

                <div className="h-48 p-5 rounded-md shadow-lg bg-blue-500">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[25px] text-white font-bold">$6,200 <span className="text-[18px]">(40.9% ↑)</span></h3>
                        <span>
                            <svg fill="white" className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                            </svg>
                        </span>
                    </div>
                    <h3 className="text-[22px] font-semibold text-white">Product</h3>
                </div>

                <div className="h-48 p-5 rounded-md shadow-lg bg-yellow-400">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[25px] text-white font-bold">2.49% <span className="text-[18px]">(84.7% ↑)</span></h3>
                        <span>
                            <svg fill="white" className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                            </svg>
                        </span>
                    </div>
                    <h3 className="text-[22px] font-semibold text-white">Category</h3>
                </div>

                <div className="h-48 p-5 rounded-md shadow-lg bg-red-500">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[25px] text-white font-bold">44K <span className="text-[18px]">(-23.6% ↓)</span></h3>
                        <span>
                            <svg fill="white" className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112z" />
                            </svg>
                        </span>
                    </div>
                    <h3 className="text-[22px] font-semibold text-white">Orders</h3>
                </div>
            </div>
        </>
    )
}
