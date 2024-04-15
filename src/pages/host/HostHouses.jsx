import React from 'react'
import { Link } from 'react-router-dom'

export default function HostHouses() {

const [houses, setHouses] = React.useState([])

React.useEffect(()=>{
    fetch("/api/host/houses")
        .then(res => res.json())
        .then(data => setHouses(data.houses))
}, [])
    
const hostHousesElements = houses.map(house => {
    return (
        <Link to={house.id} key={house.id} className="host-house-single-link">
            <div className="host-houses-single">
                <img className="host-houses-single-img" src={house.imageUrl} alt={`Photo of ${house.name}`}/>
                <div className="host-houses-single-inner">
                    <h1 className="host-houses-single-inner-title">{house.name}</h1>
                    <h2 className="host-houses-single-inner-price">{`$${house.price}/day`}</h2>
                </div>
            </div>
        </Link>
    )
})
    
    if (!houses.length){
        return <h2> Loading...</h2>
    }

    return (
        <>
            <h1 className="host-houses-title">Your listed houses</h1>
            <div className="host-houses-container">
                {hostHousesElements}
            </div>
        </>
    )
}