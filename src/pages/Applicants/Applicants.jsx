import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Applicants = () => {
    const data = useLoaderData();
    
  return (
    <div className='text-center'>
        <h2 className='text-3xl font-semibold text-center pt-10 pb-5'>Applicants: {data.length}</h2>
        {
            data.map(d=><p key={d._id}>Email: {d.applicantEmail}</p>)
        }
    </div>
  )
}

export default Applicants