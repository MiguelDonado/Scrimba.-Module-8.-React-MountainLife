import React from 'react'
import imgUrl from '../assets/images/about-img.jpg'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="about-container">
            <img className="about-img" src={imgUrl}></img>
            <div className="about-inner-container">
                <h1 className="about-title">Don’t breathe pollution when you could breathe nature.</h1>
                <p className="about-description">Our goal is to enhance your mountain getaway with the ideal mountain retreat.
    Our mountain homes undergo recertification before every journey to guarantee your travel
    arrangements proceed seamlessly. (Additional charges for any hitches 😉)
                </p>
                <p className="about-description">Our team is full of vanlife enthusiasts who know firsthand the magic of living on the woods.</p>
                <div className="about-bottom-container">
                    <h2 className="about-bottom-title">Your destination is waiting. <span className="new-line">Your house is ready</span></h2>
                    <Link to="../houses" className="about-bottom-btn">Explore our houses</Link>
                </div>
            </div>
        </div>
    )
}