import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-three-gamma.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)

    useEffect(() => {
        axiosInstance.interceptors.response.use(res => {
            return res
        }, err => {

            if (err.status === 401 || err.status === 403) {
                logOut().then(res => console.log("get out"))
            }

            return Promise.reject(err)
        })
    }, [])

    return axiosInstance
}

export default useAxiosSecure