import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signInWithGooglePopUp, createUser, loading } = useContext(AuthContext)
    const handleSignInWithGooglePopUp = () => {
        signInWithGooglePopUp()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        createUser(email, pass)
            .then(result => {
                setError("")
                form.reset()
                console.log(result);
                navigate('/')
            })
            .catch((error) => {
                setError(error.message)
            });
    };

    return (
        <div className="hero my-10">
            <div className="hero-content">
                <div className="card bg-base-100 w-[400px] shadow-2xl">
                    <form onSubmit={handleOnSubmit} className="card-body w-full">
                        <h2 className='font-semibold text-3xl text-center py-5'>Register Now</h2>
                        <span onClick={handleSignInWithGooglePopUp} className='flex items-center justify-center gap-3 btn btn-primary btn-outline'><FcGoogle /> <span>Sign up with Google</span></span>
                        <div className="divider">Or continue with</div>
                        <div className="form-control my-2 ">
                            <label className="label pb-1">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input focus:border-none w-full" required />
                        </div>
                        <div className="form-control my-2 ">
                            <label className="label pb-1">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input focus:border-none w-full" required />
                        </div>
                        <div className="form-control my-2">
                            <label className="label pb-1">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input focus:border-none w-full" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary w-full" disabled={loading && "True"}>Register {loading && <span className="loading loading-spinner loading-sm"></span>}</button>
                            {
                                error && <p className='text-red-700 font-normal text-lg'>{error}</p>
                            }
                            <p className='my-2'>Already have an Account? <Link className='link link-hover' to={'/sign-in'}>Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register