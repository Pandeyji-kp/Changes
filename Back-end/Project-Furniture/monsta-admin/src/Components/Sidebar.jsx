import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoColorPaletteSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CgEditBlackPoint } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { RxSize } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { FaSlidersH } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { TbArrowsCross } from "react-icons/tb";
import { FaQq } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { PiTrolleySuitcaseBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function () {
    const [dropStatus, setdropStatus] = useState(-1)
    return (
        <>
            <div>
                <div className='w-full h-[100vh] bg-[#F9FAFB] p-5'>
                    <Link to='/dashboard'>
                    <div class="flex items-center ps-2.5 mb-5 border-b border-slate-400 pb-7">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Frank and Oak</span>
                    </div>
                    </Link>
                    <ul>
                        <Link to='/dashboard'><li className='flex items-center gap-2 p-2 font-bold hover:bg-slate-200 rounded'><span className='text-[20px]'><AiFillPieChart /></span>Dashboard</li></Link>
                        <Link to='/profile'> <li className='flex items-center gap-2 p-2 font-bold hover:bg-slate-200 rounded'><span className='text-[20px]'><IoMdSettings /></span>Profile</li></Link>
                        <li className='flex items-center gap-2 p-2 font-bold hover:bg-slate-200 rounded'><span className='text-[20px]'><FiLogOut /></span>Logout</li>
                    </ul>
                    <h2 className='my-5 text-[14px] font-bold text-[rgb(168,168,168)]'>ECOMMERCE COMPONENTS</h2>
                    <ul>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 1 ? -1 : 1)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><IoColorPaletteSharp /></span>Colors</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 1 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/color/add-color'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add color</li></Link>
                                <Link to='/dashboard/color/view-color'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View color</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 2 ? -1 : 2)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><RxSize /></span>Size</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 2 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/size/add-size'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Size</li></Link>
                                <Link to='/dashboard/size/view-size'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Size</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 9 ? -1 : 9)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><TbArrowsCross /></span>Materils</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 9 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/material/add-material'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Materils</li></Link>
                                <Link to='/dashboard/material/view-material'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Materils</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 10 ? -1 : 10)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaQq /></span>Faq</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 10 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/Faq/add-Faq'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Faq</li></Link>
                                <Link to='/dashboard/Faq/view-Faq'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Faq</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 3 ? -1 : 3)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaBarsStaggered /></span>Category</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 3 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/category/add-category'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Category</li></Link>
                                <Link to='/dashboard/category/view-category'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Category</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 4 ? -1 : 4)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><MdShoppingCartCheckout /></span>Sub Category</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 4 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/subcategory/add-subcategory'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Sub Category</li></Link>
                                <Link to='/dashboard/subcategory/view-subcategory'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Sub Category</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 11 ? -11 : 11)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><PiTrolleySuitcaseBold /></span>Sub Sub Category</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 11 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/subsubcategory/add-subsubcategory'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Sub Sub Category</li></Link>
                                <Link to='/dashboard/subsubcategory/view-subsubcategory'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Sub Sub Category</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 5 ? -1 : 5)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaShoppingBag /></span>Product</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 5 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/product/add-product'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Product Details</li></Link>
                                <Link to='/dashboard/product/view-product'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Product View</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 6 ? -1 : 6)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaHistory /></span>Story</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 6 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/story/story-details'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Story Details</li></Link>
                                <Link to='/dashboard/story/story-view'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Story View</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 7 ? -1 : 7)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><MdBorderColor /></span>Order</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 7 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/order/order-view'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Orders</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 8 ? -1 : 8)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaSlidersH /></span>Slider</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 8 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/slider/slider-details'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Slider Details</li></Link>
                                <Link to='/dashboard/slider/slider-view'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Slider View</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 12 ? -12 : 12)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaMapLocation /></span>Location</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 12 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/location/add-location'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Location</li></Link>
                                <Link to='/dashboard/location/view-location'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Location</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div onClick={() => setdropStatus(dropStatus == 13 ? -13 : 13)} className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><FaPeopleGroup /></span>Testimonail</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                            <ul className={dropStatus == 13 ? 'block' : 'hidden'}>
                                <Link to='/dashboard/testimonial/add-testimonial'> <li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>Add Testimonail</li></Link>
                                <Link to='/dashboard/testimonial/view-testimonial'><li className='flex items-center gap-2 hover:bg-slate-200 rounded p-2'><span className='text-[18px]'><CgEditBlackPoint /></span>View Testimonail</li></Link>

                            </ul>
                        </li>
                        <li className='hover:cursor-pointer m-4'>
                            <div className='flex justify-between items-center hover:bg-slate-200 rounded p-2 '>
                                <div className='flex items-center gap-2 font-bold'><span className='text-[20px]'><GrNotes /></span>Terms & Conditions</div>
                                <span><IoIosArrowDown /></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
