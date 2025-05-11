import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const AddJob = () => {
    const {currentUser}= useContext(AuthContext);

  return (
    <div>
        <h2 className='text-4xl font-semibold text-center py-10 pb-5'>Add A Job</h2>
        <div className="card bg-base-200 w-full shadow-2xl">
      <form className="card-body">
        {/* Company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comapny Name</span>
          </label><br />
          <input type="name" name='company' placeholder="Comapny Name" className="input input-bordered w-full" required />
        </div>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label><br />
          <input type="name" name='title' placeholder="job title" className="input input-bordered w-full" required />
        </div>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label><br />
          <div className='border-2'>
            <input type="name" name='email' disabled defaultValue={currentUser?.email} className="input input-bordered border-2 w-full" required />
          </div>
        </div>
        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label><br />
          <input type="name" name='location' placeholder="Location" className="input input-bordered w-full" required />
        </div>
        {/* Logo Url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Logo Url</span>
          </label><br />
          <input type="name" name='logo' placeholder="name" className="input input-bordered w-full" required />
        </div>
        {/* Type */}
        <select name='job-type' defaultValue={"Job Type"} className="select select-bordered w-full max-w-xs">
            <option disabled>Job Type</option>
            <option>full-time</option>
            <option>Part-time</option>
        </select>
        {/* category */}
        <select name='job-category' defaultValue={"Job Category"} className="select select-bordered w-full max-w-xs">
            <option disabled>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>finance</option>
            <option>Teaching</option>
        </select>
        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label><br />
          <input type="date" name='date' className="input input-bordered" required />
        </div>
        {/* Salary Range */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label><br />
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6'>
            <input type="number" name='min' placeholder='min' className="input input-bordered" required />
            <input type="number" name='max' placeholder='max' className="input input-bordered" required />
            <select name='currency' defaultValue={"Currency"} className="select select-bordered w-full max-w-xs">
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>TNT</option>
            </select>
          </div>
        </div>
        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Requirements</span>
          </label><br />
          <textarea type="name" name='requirements' placeholder='Put single by single' className="textarea textarea-bordered"></textarea>
        </div>
        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Responsibilities</span>
          </label><br />
          <textarea type="name" name='responsibilities' placeholder='Put single by single' className="textarea textarea-bordered"></textarea>
        </div>
       
       {/* Submit */}
        <div className="form-control mt-6 w-full">
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddJob