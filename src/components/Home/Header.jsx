import React from 'react';
import UserPng from '../../assets/images/user.png'


const Header = () => {
    return (
        <section className='flex justify-between items-center mb-20 header-bg px-32'>
            <div className='w-1/2 space-y-5'>
                <h1 className='text-7xl font-extrabold text-black'>One Step <br /> Closer To Your <br />
                <span className='textGradient'>Dream Job</span>
                </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn mainBg text-white">Get Started</button>
            </div>
            <div className='w-1/2'>
                <img src={UserPng} alt="" />
            </div>
        </section>
    );
};

export default Header;