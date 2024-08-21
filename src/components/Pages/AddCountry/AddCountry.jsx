
import Swal from 'sweetalert2';


const AddCountry = () => {
    const handleAddTouristCountry = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const countryname = form.countryname.value;
        const shortdescription = form.shortdescription.value;
        const touristCountry = { photo, countryname, shortdescription }
        console.log(touristCountry)
        fetch('http://localhost:5000/countries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristCountry)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tourists Country Add Successfully",
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
                    <h1 className="text-5xl font-bold">Add<span className='ml-2.5'>Cuntry</span></h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl mx-auto my-5">
                    <form onSubmit={handleAddTouristCountry} className="card-body  py-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">country_Name</span>
                            </label>
                            <input type="text" placeholder="country_Name" name='countryname' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">short description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='shortdescription' placeholder="short description"></textarea>
                        </div>
                        <div className="form-control mt-3">
                            <input type="submit" value="Add Country" className='btn btn-neutral' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCountry;