import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function
    () {
    return (
        <>
            <div className="grid grid-cols-[16.5%_auto] min-h-screen">
                <div>
                    <Sidebar/>
                </div>

                <div className="flex flex-col min-h-screen">
                    <Header/>
                    <div className="flex-grow">
                        <Outlet/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
