import { span } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import Job from '../Job/Job'

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLoading, setDataLoading] = useState(true)


    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setDataLoading(false)
            })
    }, [])


    if (dataLoading) return (
        <div className='flex flex-col items-center justify-center my-10'>
            <h2 className="text-4xl font-bold text-center">Jobs of the day</h2>
            <p className='py-2 font-normal text-center text-lg'>Search and connect with the right candidates faster</p>
            <span className="loading loading-spinner loading-xl py-10 text-blue-800"></span>
        </div>
    )
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Jobs of the day</h2>
            <p className='py-2 font-normal text-center text-lg'>Search and connect with the right candidates faster</p>
            <div className='flex flex-wrap justify-center my-10'>
                {
                    jobs.map((job, idx) => <span className='text-lg border cursor-pointer hover:border-blue-600 hover:text-blue-600 rounded-md px-4 py-2 m-2' key={idx}>
                        {job.category}</span>
                    )
                }
            </div>

            <div className='grid gap-4 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    jobs.map(job => <Job job={job} key={job._id} />)
                }
            </div>
        </div>
    )
}

export default Jobs