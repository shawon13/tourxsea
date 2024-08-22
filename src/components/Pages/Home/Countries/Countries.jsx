import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ country }) => {
    const { photo, countryname, shortdescription } = country;
    return (
        <Link to={`/countries/${countryname}`}>
            <div className="card glass w-96 p-0 rounded-b-none shadow-md" style={{ height: '548px' }}>
                <figure className='relative'>
                    <img className='w-full h-64'
                        src={photo}
                        alt="tourPhoto" />
                </figure>
                <div className="card-body relative">
                    <h2 className="card-title capitalize">{countryname}</h2>
                    <p>{shortdescription}</p>
                </div>
            </div>
        </Link>
    );
};

export default Countries;