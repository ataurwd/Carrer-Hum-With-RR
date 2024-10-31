import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <nav className="flex items-center justify-between py-4 text-black px-32 header-bg">
            {/* Left side - Logo */}
            <div className="text-3xl font-bold textGradient">
                <NavLink to="/">CareerHub</NavLink>
            </div>

            {/* Middle - Navigation Links */}
            <div className="flex space-x-6 font-bold">
                <NavLink 
                to="/home" 
                className={({ isActive }) => isActive ? "textGradient" : "hover:text-gray-400"}
                >
                Home
                </NavLink>
                <NavLink 
                to="/applied" 
                className={({ isActive }) => isActive ? "textGradient" : "hover:text-gray-400"}
                >
                Applied
                </NavLink>
                <NavLink 
                to="/blog" 
                className={({ isActive }) => isActive ? "textGradient" : "hover:text-gray-400"}
                >
                Blog
                </NavLink>
            </div>

            {/* Right side - Button */}
            <div>
                <button className="btn mainBg text-white">Star Applying</button>
            </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Nav;