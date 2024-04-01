import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Houses() {
    
    const [houses, setHouses] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type')

    React.useEffect(() => {
        fetch("/api/houses")
            .then(res => res.json())
            .then(data => setHouses(data.houses))
    },[])

    const displayedHouses = typeFilter
        ? houses.filter(house => house.type === typeFilter)
        : houses

    const housesElements = displayedHouses.map(house => {
        return (
            <div key={house.id}>
                <Link to={house.id} className="house-link-detail">
                    <img className="house-img" src={house.imageUrl} />
                    <div className="house-container-inner">
                        <h1 className="house-title">{house.name}</h1>
                        <p className="house-price">{`$${house.price}/day`}</p>
                        <i className={`house-type ${house.type}`}>{house.type}</i>
                    </div>
                </Link>
            </div>
        )
    })
    

    return (
        <div className="houses-wrapper">
            <h1 className="houses-explore-title">Explore our houses options</h1>
            <div className="houses-list-filter-buttons">
                <button 
                onClick={()=>setSearchParams({type:'simple'})}
                className={`houses-filter-btn simple-hover ${typeFilter === 'simple' ? 'simple-selected' : ""}`}>
                    Simple</button>
                <button
                onClick={()=>setSearchParams({type:'luxury'})} 
                className={`houses-filter-btn luxury-hover ${typeFilter === 'luxury' ? 'luxury-selected' : ""}`}>
                    Luxury</button>
                <button 
                onClick={()=>setSearchParams({type:'rugged'})}
                className={`houses-filter-btn rugged-hover ${typeFilter === 'rugged' ? 'rugged-selected' : ""}`}>
                    Rugged</button>
            </div>
            <div className="houses-container">
                {housesElements}
            </div>
        </div>
    )
}