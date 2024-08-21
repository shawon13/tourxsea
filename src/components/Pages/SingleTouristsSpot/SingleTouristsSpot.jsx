import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';

const SingleTouristsSpot = () => {
    const singleTouristsSopt = useLoaderData();
    console.log(singleTouristsSopt)
    const { photo, touristsspotname, countryname, location, shortdescription, averagecost, seasonality, traveltime, year } = singleTouristsSopt;
    return (
        <section className='py-10 px-20'>
            <div className="card bg-base-100 w-3/5 rounded-none mx-auto p-0">
                <figure>
                    <img className='rounded-xl w-full'
                        src={photo}
                        alt="place" />
                </figure>
                <div className="card-body p-0 mt-6">
                    <p className='flex items-center red-color text-xl font-semibold'><CiLocationOn className='mr-2' />{location}</p>
                    <h2 className="card-title font-bold text-4xl">{touristsspotname}</h2>
                    <p style={{ color: '#666' }} className='text-base'>{shortdescription}</p>
                </div>
            </div>
            <div className="overflow-x-auto w-3/5 mx-auto mt-10 bg-white shadow-xl rounded border">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className='border-r py-5 text-lg'>Destination</th>
                            <td style={{ color: '#666' }} className='text-lg font-medium'>{countryname}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th className='border-r py-5 text-lg'>Average Cost</th>
                            <td style={{ color: '#666' }} className='flex items-center  text-lg font-medium'><PiCurrencyDollarSimpleBold />{averagecost} Per Person</td>

                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th className='border-r py-5 text-lg'>Seasonality</th>
                            <td style={{ color: '#666' }} className='text-lg font-medium'>{seasonality}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th className='border-r py-5 text-lg'>Travel Time</th>
                            <td style={{ color: '#666' }} className='text-lg font-medium'>{traveltime}</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th className='border-r py-5 text-lg'>Tota Visitors Per Year</th>
                            <td style={{ color: '#666' }} className='text-lg font-medium'>{year} People</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SingleTouristsSpot;