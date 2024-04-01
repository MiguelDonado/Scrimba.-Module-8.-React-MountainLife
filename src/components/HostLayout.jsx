import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function HostLayout () {
    
    const activeStyles = {
        textDecoration: "underline",
        fontWeight: "bold",
        color:"#161616"
    }
    
    return (
        <div className="host-wrapper">
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyles : null } 
                    className="host-nav-item"
                    >
                        Dashboard
                    </NavLink>
                <NavLink
                    to="income"
                    style={({isActive}) => isActive ? activeStyles : null } 
                    className="host-nav-item"
                    >
                        Income
                    </NavLink>
                <NavLink
                    to="houses"
                    style={({isActive}) => isActive ? activeStyles : null } 
                    className="host-nav-item"
                    >
                        Houses
                    </NavLink>
                <NavLink
                    to="reviews"
                    style={({isActive}) => isActive ? activeStyles : null } 
                    className="host-nav-item"
                    >
                        Reviews
                    </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}