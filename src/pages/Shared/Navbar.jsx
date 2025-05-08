import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logos/fav.png"
import { AuthContext } from '../../providers/AuthProvider'

const Navbar = () => {
    const { currentUser, logOut } = useContext(AuthContext);
    // console.log(currentUser);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                // console.log(result);
            })
    }

    const links = <>
        <NavLink to="/" className={`px-2 ${({ isActive }) => isActive ? "active" : ""}`}>Home</NavLink>
        <NavLink to="/sign-in" className="px-2"> Contacs</NavLink>
        <NavLink to="/asd" className="px-2"> about</NavLink>
        <NavLink to="/gdsfgs" className="px-2"> good</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost flex items-center  text-xl text-blue-600">
                    <img src={logo} className='h-14' alt="" /> JobOX
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    currentUser ?
                        <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button>
                        :
                        <>
                            <Link to={'/sign-in'}> <button className='btn btn-primary'>Sign In</button></Link>
                            <Link to={"/register"}> <button className='btn btn-primary'>Sign Up</button></Link>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar