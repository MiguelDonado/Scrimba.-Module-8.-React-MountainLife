import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    return(
        <div className="site-wrapper">
            <div className="site-wrapper-mirror">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}