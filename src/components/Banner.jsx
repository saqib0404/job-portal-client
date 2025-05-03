import React from 'react'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className='my-10 md:my-28 flex max-w-6xl mx-auto'>
            <div>
                <h2 className='text-4xl font-bold'>The <span className='text-blue-600 bg-gradient-to-t from-blue-100 to-transparent'>Easiest Way</span>
                    <br /> to Get Your New Job</h2>
                <p className='text-xl w-full md:w-8/12 lg:md:w-10/12 py-4'>Each month, more than 3 million job seekers turn to
                    website in their search for work, making over 140,000
                    applications every single day</p>
            </div>
            <div className='hidden md:block'>
                <motion.img className='max-w-md rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-600'
                    animate={{
                        y: [0, 50, 0],
                        transition: { repeat: Infinity, duration: 5 }
                    }}
                    src="https://media.istockphoto.com/id/1434116614/photo/teamwork-diversity-and-sales-manager-planning-branding-ideas-with-a-creative-designer-on-a.jpg?s=612x612&w=0&k=20&c=0qDHz0EDKEgxqcRP7V-YWaGv9nrjKDXG5lz8svrlbcQ=" />
                <motion.img className='max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-600'
                    animate={{
                        x: [-150, -200, -150],
                        transition: { repeat: Infinity, duration: 5 }
                    }}
                    src="https://img.freepik.com/free-photo/group-young-male-architect-working-office_23-2147839870.jpg?semt=ais_hybrid&w=740" alt="" />
            </div>
        </div>
    )
}

export default Banner