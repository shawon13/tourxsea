
import { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlaLogOut = (event) => {
        event.preventDefault();
        logOut()
    }
    return (
        <div className="navbar bg-base-100 px-20 shadow-md">
            <Link to='/'><h2 className='black-color text-5xl font-semibold'>Tour<span className='red-color'>XSea</span></h2></Link>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Link to='/' className='mx-4'><li className='text-xl font-medium black-color hover:text-red-600 transition-all'>Home</li></Link>
                        <Link to='/alltouristsspot' className='mx-4'> <li className='text-xl font-medium black-color hover:text-red-600 transition-all'>All Tourists Spot</li></Link>
                        <Link to='/addtouristsspot' className={`mx-4 ${user ? 'visited' : 'hidden'}`}> <li className='text-xl font-medium black-color hover:text-red-600 transition-all'>Add Tourists Spot</li></Link>
                        <Link to='/mylist' className='ml-4 mr-6'> <li className='text-xl font-medium black-color hover:text-red-600 transition-all'>My List</li></Link>
                        {
                            user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-black-color rounded z-[1] mt-3 w-52 py-5 px-4 shadow-md h-auto">
                                    <h4 className='text-sm font-medium mb-4 text-white'>{user?.displayName}</h4>
                                    <button className='btn' onClick={handlaLogOut}>Log Out</button>
                                </ul>
                            </div> : <div> <Link to='/login'> <button className='btn btn-outline text-xl font-medium'>Login</button></Link>
                                <Link to='/register'> <button className='btn btn-outline ml-3 text-xl font-medium'>Register</button></Link></div>
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    <Link to='/' className='mx-4'><li className='text-xl font-medium black-color hover:text-red-600 transition-all'>Home</li></Link>
                    <Link to='/alltouristsspot' className='mx-4'> <li className='text-xl font-medium black-color hover:text-red-600 transition-all'>All Tourists Spot</li></Link>
                    <Link to='/addtouristsspot' className={`mx-4 ${user ? 'visited' : 'hidden'}`}> <li className='text-xl font-medium black-color hover:text-red-600 transition-all'>Add Tourists Spot</li></Link>
                    <Link to='/mylist' className={`ml-4 mr-6 ${user ? 'visited' : 'hidden'}`} > <li className='text-xl font-medium black-color hover:text-red-600 transition-all'>My List</li></Link>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black-color rounded z-[1] mt-3 w-52 py-5 px-4 shadow-md h-auto">
                                <h4 className='text-sm font-medium mb-4 text-white'>{user?.displayName}</h4>
                                <button className='btn' onClick={handlaLogOut}>Log Out</button>
                            </ul>
                        </div> : <div> <Link to='/login'> <button className='btn btn-outline text-xl font-medium'>Login</button></Link>
                            <Link to='/register'> <button className='btn btn-outline ml-3 text-xl font-medium'>Register</button></Link></div>
                    }
                </ul>
            </div>
        </div >
    );
};

export default Header;