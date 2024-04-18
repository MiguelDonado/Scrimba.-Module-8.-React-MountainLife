import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostHouseInfo() {
    
    const { currentVan } = useOutletContext()
    const type = currentVan.type.charAt(0).toUpperCase() + currentVan.type.slice(1)
    return (
        <div className="host-house-info-container">
            <h4 className="host-house-info-item"><span className="bold">Name:</span> {currentVan.name}</h4>
            <h4 className="host-house-info-item"><span className="bold">Category: </span>{type}</h4>
            <h4 className="host-house-info-item"><span className="bold">Description: </span>{currentVan.description}</h4>
            <h4 className="host-house-info-item"><span className="bold">Visibility: </span>Public</h4>
        </div>
    )
}
