import React, { useContext } from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { IoLogoGoogleplus } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { userLogin, googleLogin, fbLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate(from)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Successfully Login"
                });

            }
            )
            .catch(error => {
                console.log(error.message)
                const errorCode = error.code;
                let errorMessage;

                // Customize error messages based on error codes
                switch (errorCode) {
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email format.';
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = 'Email and Password incorrect';
                        break;
                    case 'auth/user-not-found':
                        errorMessage = 'No user found with this email.';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Incorrect password.';
                        break;
                    default:
                        errorMessage = 'An unknown error occurred. Please try again.';
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Login Faild',
                    text: errorMessage,
                    confirmButtonText: 'Try Again'
                })
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
    }
    const handleFacebookLogin = () => {
        fbLogin()
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login<span className='ml-2.5'>now!</span></h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body pt-0 pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <input type="submit" value="Login" className='btn btn-neutral' />
                            <p className='text-center mt-2'>Don't have an account?<Link to='/register'> Register</Link></p>
                        </div>
                    </form>
                    <div>
                        <h4 className='text-3xl font-medium text-center'>OR</h4>
                        <div className='flex justify-center mt-4'>
                            <button onClick={handleGoogleLogin} className='w-10 h-10 bg-black text-white rounded-full mx-2 flex justify-center items-center'><IoLogoGoogleplus className='text-xl' /></button>
                            <button onClick={handleFacebookLogin} className='w-10 h-10 bg-black text-white rounded-full mx-2 flex justify-center items-center'><FaFacebookF className='text-xl' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;