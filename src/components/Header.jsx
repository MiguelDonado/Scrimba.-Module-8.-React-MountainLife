import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header () {
    
    const activeStyles= {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header className="header">
            <Link to="/" className="header-logo">#MountainLife</Link>
            <nav className="header-nav">
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null} 
                    className="header-nav-item">Host</NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null} 
                    className="header-nav-item">About</NavLink>
                <NavLink 
                    to="/houses"
                    style={({isActive}) => isActive ? activeStyles : null} 
                    className="header-nav-item">Houses</NavLink>
            </nav>
        </header>
    )
}

