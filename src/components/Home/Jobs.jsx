import React, { useEffect, useState } from 'react';
import LocaionPng from '../../assets/icons/Location2.png'
import MoneyPng from '../../assets/icons/Money.png'
import Button from '../global/Button';

const Jobs = () => {
    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJob(data))
    }, [])
    return (
        <section className='my-32'>
            <div className='text-center mb-10 space-y-5'>
                <h1 className='font-extrabold text-4xl'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='px-32 grid grid-cols-2 gap-8'>
            {job.map(job => (
                <div key={job.id} className='border-2 rounded-xl shadow-md space-y-4 p-10'>
                    <img src={job.logo} alt="" />
                    <h2 className='text-2xl font-extrabold'>{job.job_title}</h2>
                    <p className='text-[#757575]'>{job.company_name}</p>
                    <div className='flex gap-4'>
                        <p className='borderGradient border-2 px-5 py-1 rounded-md textGradient font-bold '>{job.remote_or_onsite}</p>
                        <p className='borderGradient border-2 px-5 py-1 rounded-md textGradient font-bold '>{job.job_type}</p>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex items-center'>
                            <img src={LocaionPng} alt="" />
                            <p className='text-[#757575]'>{job.location}</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={MoneyPng} alt="" />
                            <p className='text-[#757575]'>{job.salary}</p>
                        </div>
                    </div>
                    <button className="mainBg text-white px-5 py-2 rounded-md">View Details</button>
                </div>
            ))}
        </div>
        <div className='text-center mt-10'>
            <button className="mainBg text-white px-5 py-2 rounded-md">See All Jobs</button>
        </div>
        </section>
    );
};

export default Jobs;