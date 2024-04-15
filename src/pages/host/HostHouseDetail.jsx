import React from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'

export default function HostHouseDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    
    const activeStyles = {
        textDecoration: "underline",
        fontWeight: "bold",
        color:"#161616"
    }

    React.useEffect(()=>{
        fetch(`/api/host/houses/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.houses))
    }, [])
    
    if (!currentVan){
        return <h1>Loading...</h1>
    }

    return (
        <div className="host-house-detail-wrapper">
            <Link 
                to=".." 
                relative="path"
                className="host-house-detail-back-button"
            >
                &larr; <span className="back-button-hover">Back to all vans</span>
            </Link>
            <div className="host-house-detail-house-container">
                <div className="host-house-detail-house-container-above-nav">
                    <img  className="host-house-detail-house-img" src={currentVan.imageUrl} alt={`Photo of ${currentVan.name}`} />
                    <div className="host-house-detail-inner">
                        <i className="host-house-detail-type">
                            {currentVan.type}
                        </i>
                        <h3 className="host-house-detail-name">{currentVan.name}</h3>
                        <h4 className="host-house-detail-price"><span className="bold-bigger">{`$${currentVan.price}`}</span>/day</h4>
                    </div>
                </div>
                <nav className="host-house-detail-nav">
                    <NavLink
                        to="."
                        end
                        className="host-house-nav-item"
                        style = {({isActive})=> isActive ? activeStyles : null}
                    >
                    Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        className="host-house-nav-item"
                        style = {({isActive})=> isActive ? activeStyles : null}
                    >
                    Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        className="host-house-nav-item"
                        style = {({isActive})=> isActive ? activeStyles : null}
                    >
                    Photos
                    </NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}