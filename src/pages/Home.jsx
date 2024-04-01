import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">You got the dreams,<span className="new-line">we got your dream house.</span></h1>
            <p className="home-description">Add adventure to your life by joining the #mountainlife movement.
                <span className="new-line">Rent the perfect house to make your dreams come reality.</span>
            </p>
            <Link to="houses" className="home-container-btn">Find your house</Link>
        </div>
    )
}