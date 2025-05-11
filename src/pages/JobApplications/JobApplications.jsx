import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const JobApplications = () => {
    const {currentUser} =useContext(AuthContext);
    const [jobs,setJobs]=useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${currentUser?.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    }, [currentUser?.email])
    

  return (
    <div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Jobs</th>
        <th>Dead Line</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs?.map(job=><tr key={job._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
         {job.applicationDeadline}
        </td>
        <td >
            <span className='text-green-800 font-semibold'>{job.status}</span>
        </td>
        <th>
          <button className="btn btn-error">X</button>
        </th>
      </tr>
        )
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default JobApplications