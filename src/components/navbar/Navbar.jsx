import React, { useState } from 'react';
import './navbar.css';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState('navbar');
    // function to toggle navbar
    const showNav = () => {
        setActive('navbar activeNavbar');
    };
    // function to remove navbar
    const removeNav = () => {
        setActive('navbar');
    };

    return (
        <section className='navbar-section'>
            <header className="header flex">

                <div className="logo-div">
                    <a href="#" className='logo flex'>
                        <h1><MdTravelExplore className="icon" /> Travelin</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="nav-list flex">
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Packages</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Shop</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Pages</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNav} className="close-navbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggle-navbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;