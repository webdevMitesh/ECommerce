import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="nav">
                <h1>E-Commerce</h1>
                <ul>
                    <li><NavLink to={'/'} className='Navlink'>Home</NavLink></li>
                    <li><NavLink to={'/abt'} className='Navlink'>About Us</NavLink></li>
                    <li><NavLink to={'/prolist'} className='Navlink'>Products</NavLink></li>
                    <li><NavLink to={'/cart'} className='Navlink'>Cart</NavLink></li>
                    <li><NavLink to={'/contact'} className='Navlink'>Contact Us</NavLink></li>
                    <li><NavLink to={'/Pro'} className='Navlink'>Profile</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;