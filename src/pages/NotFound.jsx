import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
       <div className="not-found-container">
        <h1 className="not-found-title">Sorry, the page you were <span className="next-line">looking for was not found.</span></h1>
        <Link
            to=".."
            className="not-found-btn"
        >Return to home</Link>
       </div>
    )
}