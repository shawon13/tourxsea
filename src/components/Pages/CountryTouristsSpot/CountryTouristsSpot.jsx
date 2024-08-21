import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CountryTouristsSpot = () => {
    const touristsSpots = useLoaderData();
    const { countryname } = useParams()
    return (
        <div>
            <h2>{countryname}</h2>
            {/* <h1>Tourist Spots in {touristsSpots[0]?.countryname}</h1> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {touristsSpots.map(spot => (
                    <div key={spot._id} className="card">
                        <img src={spot.photo} alt={spot.name} />
                        <div className="card-body">
                            <h2 className="card-title">{spot.name}</h2>
                            <p>{spot.shortdescription}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default CountryTouristsSpot;