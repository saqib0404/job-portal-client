import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const jobDetail = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_name,
        company_logo
    } = jobDetail;

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border space-y-6 text-gray-800 text-xl">
            {/* Header: Job Summary */}
            <div className="border rounded-md p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div><strong>Industry:</strong> {category}</div>
                <div><strong>Job Level:</strong> Experienced (Non-Manager)</div>
                <div><strong>Salary:</strong> {salaryRange.currency === 'bdt' ? '৳' : '$'}{salaryRange.min} - {salaryRange.max}</div>
                <div><strong>Experience:</strong> 1–2 years</div>
                <div><strong>Job Type:</strong> {jobType}</div>
                <div><strong>Deadline:</strong> {applicationDeadline}</div>
                <div><strong>Updated:</strong> 10/07/2022</div>
                <div><strong>Location:</strong> {location}</div>
            </div>

            {/* Intro */}
            <div>
                <h2 className="text-3xl font-semibold mb-2">Welcome to {company} Team</h2>
                <p className="text-xl">{description}</p>
            </div>

            {/* Skills */}
            <div>
                <h3 className="font-semibold text-2xl mb-2">Essential Knowledge, Skills, and Experience</h3>
                <ul className="list-disc list-inside space-y-2 text-xl">
                    {requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                    ))}
                    <li>Strong verbal and written communication</li>
                    <li>Ability to work independently and collaborate</li>
                </ul>
            </div>

            {/* Responsibilities */}
            <div>
                <h3 className="font-semibold text-2xl mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-xl">
                    {responsibilities.map((res, i) => (
                        <li key={i}>{res}</li>
                    ))}
                </ul>
            </div>

            {/* Preferred Experience */}
            <div>
                <h3 className="font-semibold text-2xl mb-2">Preferred Experience</h3>
                <ul className="list-disc list-inside space-y-2 text-xl">
                    <li>Creating and developing brand marketing strategies</li>
                    <li>Experience using marketing analytics tools</li>
                </ul>
            </div>

            {/* HR Contact */}
            <div className="text-xl text-gray-500">— {hr_name}</div>

            {/* Bottom Action Bar */}
            <div className="flex justify-between items-center pt-6 border-t mt-4">
                <div className="flex items-center gap-4">
                    <img src={company_logo} alt={company} className="h-14 w-14 rounded-full object-cover" />
                    <span className="font-bold text-2xl">{company}</span>
                </div>
                <div className="space-x-4">
                    <Link to={`/job-apply/${_id}`}><button className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 text-xl">Apply Now</button></Link>
                    <button className="px-6 py-3 rounded-md bg-gray-200 hover:bg-gray-300 text-xl">Save Job</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails