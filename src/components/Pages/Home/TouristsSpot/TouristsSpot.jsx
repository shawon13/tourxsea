import { FaRegClock } from 'react-icons/fa';
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const TouristsSpot = ({ tour }) => {
    const { _id, photo, touristsspotname, traveltime, shortdescription, averagecost } = tour;
    return (
        <div className="card glass w-96 p-0 rounded-b-none">
            <figure className='relative'>
                <img className='w-full h-64'
                    src={photo}
                    alt="tourPhoto" />
            </figure>
            <div className="card-body relative">
                <p className="card-lavel absolute left-6 flex items-center font-semibold bg-red py-2.5 px-8 text-white"><FaRegClock /> <span className='ml-2'>{traveltime}</span></p>
                <h2 className="card-title capitalize">{touristsspotname}</h2>
                <p>{shortdescription.slice(0, 130)}...</p>
                <div className=" flex items-center justify-between">
                    <Link to={`/tours/${_id}`}>
                        <button className="flex items-center border border_color red-color card-btn py-2.5 px-4 rounded transition-all text-base font-semibold uppercase">View Details</button>
                    </Link>
                    <div>
                        <span>From</span>
                        <div className='flex items-center'>
                            <PiCurrencyDollarSimpleBold className='text-2xl red-color font-extrabold ' />
                            <p className='red-color mr-1 font-extrabold text-2xl'>{averagecost}</p>
                            <span>Per Person</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpot;