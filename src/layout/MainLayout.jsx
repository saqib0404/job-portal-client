import React from 'react'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-2'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout