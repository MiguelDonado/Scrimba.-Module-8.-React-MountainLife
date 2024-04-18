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
                className="host-house-detail-back-button house-back"
            >
                &larr; <span className="back-button-hover">{`Back to ${type} vans`}</span>
            </Link>
            <img src={house.imageUrl} className="house-img"/>
            <div className="house-container-inner">
                <i className={`house-type ${house.type}`}>{house.type}</i>
                <h1 className="house-title">{house.name}</h1>
                <h2 className="house-price">{`$${house.price}`}<span className="light">/day</span></h2>
                <p className="house-description">{house.description}</p>
                <button className="house-btn">Rent this van</button>
            </div>
        </div>
    )
}