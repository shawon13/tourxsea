import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext);
    const handleAddTouristsSpot = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const touristsspotname = form.touristsspotname.value;
        const countryname = form.countryname.value;
        const location = form.location.value;
        const shortdescription = form.shortdescription.value;
        const averagecost = form.averagecost.value;
        const seasonality = form.seasonality.value;
        const traveltime = form.traveltime.value;
        const year = form.year.value;
        const touristSpot = { name, email, photo, touristsspotname, countryname, location, shortdescription, averagecost, seasonality, traveltime, year }
        console.log(touristSpot)
        fetch('http://localhost:5000/tours', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tourists Spot Add Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add<span className='ml-2.5'>Tourists Spot</span></h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl mx-auto my-5">
                    <form onSubmit={handleAddTouristsSpot} className="card-body  py-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" value={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" value={user?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">tourists_spot_name</span>
                            </label>
                            <input type="text" placeholder="tourists_spot_name" name='touristsspotname' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">country_Name</span>
                            </label>
                            <input type="text" placeholder="country_Name" name='countryname' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" placeholder="location" name='location' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">short description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='shortdescription' placeholder="short description"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">average_cost</span>
                            </label>
                            <input type='number' placeholder="average_cost" name='averagecost' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">seasonality</span>
                            </label>
                            <input type='text' placeholder="seasonality" name='seasonality' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">travel time</span>
                            </label>
                            <input type='text' placeholder="travel_time" name='traveltime' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">totaVisitorsPerYear</span>
                            </label>
                            <input type='text' placeholder="totaVisitorsPerYear" name='year' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <input type="submit" value="Add Tourists Spot" className='btn btn-neutral' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristsSpot;