import React from 'react'
import Navbar from '../Navebar/Navbar'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

export default function () {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}
