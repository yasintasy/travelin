import React, { useEffect } from 'react';
import './home.css';
import video from '../../assets/video-2.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

// icons
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

const Home = () => {
    // react hook to add aos
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="home-content container">
                <div className="text-div">

                    <span data-aos="fade-up" className="small-text">
                        Our Packages
                    </span>

                    <h1 data-aos="fade-up" className="home-title">Search your Holiday</h1>

                </div>

                <div data-aos="fade-up" className="card-div grid">
                    <div className="destination-input">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...' />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="date-input">
                        <label htmlFor="date">Select your date</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="price-input">
                        <div className="label-total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max='5000' min='1000' />
                        </div>
                    </div>

                    <div className="search-options flex">
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                <div data-aos="fade-up" className="home-footer-icons flex">
                    <div className="right-icons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                    <div className="left-icons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;