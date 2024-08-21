import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/pic-1.png'
import pic2 from '../../assets/pic-2.png'
import pic3 from '../../assets/pic-3.png'
import pic4 from '../../assets/pic-4.png'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-black-color py-12 flex text-white px-20">
            <aside className='w-1/3 mr-5'>
                <Link to='/'><h2 className='text-white text-5xl font-semibold mb-4'>Tour<span className='red-color'>XSea</span></h2></Link>
                <p className=''>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt molestie turpis nec lacinia vehicula.
                </p>
                <div className='mt-4'>
                    <h4 className='text-3xl font-medium'>Follow Us</h4>
                    <div className='flex mt-5'>
                        <Link className='w-10 h-10 bg-red border-2 border_color rounded-full mr-5 flex justify-center items-center hover:bg-transparent hover:border-2 hover:border-white transition-all'><FaFacebookF className='text-xl' /></Link>
                        <Link className='w-10 h-10 bg-red border-2 border_color rounded-full mr-5 flex justify-center items-center hover:bg-transparent hover:border-2 hover:border-white transition-all'><FaTwitter className='text-xl' /></Link>
                        <Link className='w-10 h-10 bg-red border-2 border_color rounded-full mr-5 flex justify-center items-center hover:bg-transparent hover:border-2 hover:border-white transition-all'><FaInstagram className='text-xl' /></Link>
                    </div>
                </div>
            </aside>
            <nav className=' w-1/6'>
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                    <li className='mb-2.5'><Link className="link link-hover">About Us</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Tour Package</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Destination</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Tour Guide</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Booking Process</Link></li>
                </ul>
            </nav>
            <nav className='w-1/6'>
                <h6 className="footer-title">Tour Type</h6>
                <ul>
                    <li className='mb-2.5'><Link className="link link-hover">Wild & Adventure</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Tours</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Group Tour</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Seasonal Tours</Link></li>
                    <li className='mb-2.5'><Link className="link link-hover">Family Frindly Tours</Link></li>
                </ul>
            </nav>
            <nav className='w-1/3'>
                <h6 className="footer-title text-center">Gallary</h6>
                <div className='grid grid-cols-3 gap-2'>
                    <img src={pic1} className='rounded' alt="" />
                    <img src={pic2} className='rounded' alt="" />
                    <img src={pic3} className='rounded' alt="" />
                    <img src={pic4} className='rounded' alt="" />
                    <img src={pic1} className='rounded' alt="" />
                    <img src={pic2} className='rounded' alt="" />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;