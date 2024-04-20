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
                <Link 
                    to={house.id} 
                    state={
                        {search: `?${searchParams.toString()}`, 
                        type: typeFilter
                    }}
                    className="house-link-detail"
                >
                    <img className="house-img" src={house.imageUrl} />
                    <div className="house-container-inner">
                        <div className="house-container-inner-container">
                            <h1 className="house-title">{house.name}</h1>
                            <i className={`house-type ${house.type}`}>{house.type}</i>
                        </div> 
                        <p className="house-price">{`$${house.price}`}<span className="next-line per-day">/day</span></p>
                    </div>
                </Link>
            </div>
        )
    })
    
    function handleFilterChange(key,value) {
        setSearchParams((prevParams) => {
            if (value === null){
                prevParams.delete(key)
            }else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    return (
        <div className="houses-wrapper">
            <h1 className="houses-explore-title">Explore our houses options</h1>
            <div className="houses-list-filter-buttons">
                <button 
                onClick={()=>handleFilterChange("type","simple")}
                className={`houses-filter-btn simple-hover ${typeFilter === 'simple' ? 'simple-selected' : ""}`}>
                    Simple</button>
                <button
                onClick={()=>handleFilterChange("type","luxury")} 
                className={`houses-filter-btn luxury-hover ${typeFilter === 'luxury' ? 'luxury-selected' : ""}`}>
                    Luxury</button>
                <button 
                onClick={()=>handleFilterChange("type","rugged")}
                className={`houses-filter-btn rugged-hover ${typeFilter === 'rugged' ? 'rugged-selected' : ""}`}>
                    Rugged</button>
                {typeFilter ? (<button
                onClick={() =>handleFilterChange("type",null)}
                className="houses-filter-btn-clear"
                >Clear filters</button>) :
                null}
            </div>
            <div className="houses-container">
                {housesElements}
            </div>
        </div>
    )
}