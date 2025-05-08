import React from 'react'
import { Briefcase, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {
        _id,
        title,
        location,
        jobType,
        description,
        company,
        requirements,
        salaryRange,
        company_logo
    } = job;

    return (
        <div className="bg-[#F8FAFF] hover:bg-white hover:scale-105 hover:border-blue-600 duration-200 px-5 py-8 rounded-2xl shadow-sm border text-gray-700 max-w-sm w-full">
            {/* Top: Logo & Company Info */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img src={company_logo} alt={company} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                        <h3 className="font-semibold text-sm">{company}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {location}
                        </div>
                    </div>
                </div>
                <div className="text-green-500 text-lg font-bold">⚡</div>
            </div>

            {/* Job Title */}
            <h2 className="text-md font-bold text-gray-800 mb-2">{title}</h2>

            {/* Job Type & Time */}
            <div className="flex items-center text-xs text-gray-500 mb-2">
                <Briefcase className="w-4 h-4 mr-1" />
                {jobType}
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                5 minutes ago
            </div>

            {/* Description */}
            <p className="text-sm mb-3 line-clamp-2">{description}</p>

            {/* Requirements Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {requirements.slice(0, 2).map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-sm px-3 py-1 rounded-md text-gray-600">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Salary & Apply */}
            <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-bold text-lg">
                    {salaryRange?.currency === 'bdt' ? '৳' : '$'}
                    {Math.round(salaryRange.min / 160)}/Hour
                </span>
                <Link to={`/job/${_id}`}>
                    <button className="bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-md hover:bg-indigo-200">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default Job