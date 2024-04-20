import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

export default function HouseDetail() {
    const params = useParams()
    const [house, setHouse] = React.useState('')

    const location = useLocation()

    const search = location.state?.search || ""
    const type = location.state?.type || 'all'
    
    React.useEffect(() => {
        fetch(`/api/houses/${params.id}`)
            .then(response => response.json())
            .then(data => setHouse(data.houses))
    },[params.id])

    if (!house){
        return <h2>Loading...</h2>
    }
    return (
        <div className="house-wrapper">
            <Link 
                to={`..${search}`}
                relative="path"
                className="house-detail-back-button"
            >
                &larr; <span className="back-button-hover">{`Back to ${type} vans`}</span>
            </Link>
            <img src={house.imageUrl} className="house-img"/>
            <div className="house-detail-container-inner">
                <i className={`house-detail-type ${house.type}`}>{house.type}</i>
                <h1 className="house-detail-title">{house.name}</h1>
                <h2 className="house-detail-price">{`$${house.price}`}<span className="house-detail-per-day">/day</span></h2>
                <p className="house-detail-description">{house.description}</p>
                <button className="house-detail-btn">Rent this van</button>
            </div>
        </div>
    )
}