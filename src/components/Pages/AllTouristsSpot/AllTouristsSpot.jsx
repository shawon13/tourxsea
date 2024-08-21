
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import './AllTouristsSpot.css'
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';
import { useEffect, useState } from 'react';

const AllTouristsSpot = () => {
    const [loading, setLoading] = useState(true);
    const tours = useLoaderData();

    useEffect(() => {
        if (tours) {
            setLoading(false);
        }
    }, [tours]);

    if (loading) {
        return <div className='my-20 text-center'>
            <span className="loading loading-infinity loading-lg text-6xl"></span>
        </div>
    }
    return (
        <div className='px-20 my-20'>
            <h2 className='text-center text-4xl font-semibold mb-10'>All Tourists Spot</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    tours.map(tour => <div className="card glass w-96 p-0 rounded-b-none" key={tour._id}>
                        <figure className='relative'>
                            <img className='w-full h-64'
                                src={tour.photo}
                                alt="tourPhoto" />
                        </figure>
                        <div className="card-body relative">
                            <p className="card-lavel absolute left-6 flex items-center font-semibold bg-red py-2.5 px-8 text-white"><FaRegClock /> <span className='ml-2'>{tour?.traveltime}</span></p>
                            <h2 className="card-title capitalize">{tour?.touristsspotname}</h2>
                            <p>{tour?.shortdescription.slice(0, 130)}...</p>
                            <div className=" flex items-center justify-between">
                                <Link to={`/tours/${tour._id}`}>
                                    <button className="flex items-center border border_color red-color card-btn py-2.5 px-4 rounded transition-all text-base font-semibold uppercase">View Details</button>
                                </Link>
                                <div>
                                    <span>From</span>
                                    <div className='flex items-center'>
                                        <PiCurrencyDollarSimpleBold className='text-2xl red-color font-extrabold ' />
                                        <p className='red-color mr-1 font-extrabold text-2xl'>{tour?.averagecost}</p>
                                        <span>Per Person</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;