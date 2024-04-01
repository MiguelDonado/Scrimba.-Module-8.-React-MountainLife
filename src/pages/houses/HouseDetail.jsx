import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function HouseDetail() {
    const params = useParams()
    const [house, setHouse] = React.useState('')

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
            <img src={house.imageUrl}/>
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