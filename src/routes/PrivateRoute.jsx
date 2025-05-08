import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) return <div className='flex h-52 justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>

    if (currentUser) return children

    return <Navigate to={`/sign-in`} state={location?.pathname}></Navigate>
}

export default PrivateRoute