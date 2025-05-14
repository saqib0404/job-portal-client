import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { Link } from 'react-router-dom';

const PostedJobs = () => {
  const { currentUser } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-portal-server-three-gamma.vercel.app/jobs?email=${currentUser.email}`)
      .then(res => res.json())
      .then(data => setJobs(data))

  }, [currentUser.email]);



  return (
    <div>
      <h2 className='text-3xl font-semibold text-center pt-10 pb-5'>My Posted Jobs</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Job</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              jobs.map((job, idx) => <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.date}</td>
                <td><Link to={`/posted-jobs/${job._id}`} className='link'>Detail</Link></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PostedJobs