import React, { useEffect } from 'react';
import './footer.css';
import videoFooter from '../../assets/video-1.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

// icons
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

const Footer = () => {
    // react hook to add aos
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='footer'>
            <div className="video-div">
                <video src={videoFooter} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="sec-content container">
                <div className="contact-div flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="input-div flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter your email address' />
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                            SEND <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footer-card flex">
                    <div className="footer-intro flex">
                        <div className="logo-div">
                            <a href="#" className='logo flex'><MdOutlineTravelExplore className='icon' /> Travelin</a>
                        </div>

                        <div data-aos="fade-up" className="footer-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quo nemo culpa pariatur natus. Nihil quasi ex accusamus cupiditate doloribus sunt ipsam veritatis. Modi nam vitae accusamus soluta veniam?
                        </div>

                        <div data-aos="fade-up" className="footer-socials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>
                    </div>

                    <div className="footer-links grid">

                        {/* group  one */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="link-group">
                            <span className="group-title">
                                OUR AGENCY
                            </span>

                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>

                        {/* group  two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="link-group">
                            <span className="group-title">
                                PARTNERS
                            </span>

                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Rent Cars
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Hostel World
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Trip Advisor
                            </li>
                        </div>

                        {/* group  three */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="link-group">
                            <span className="group-title">
                                LAST MINUTE
                            </span>

                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                London
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                California
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Indonesia
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Europe
                            </li>
                            <li className="footer-list flex">
                                <FiChevronRight className='icon' />
                                Oceania
                            </li>
                        </div>
                    </div>

                    <div className="footer-div flex">
                        <small>BEST TRAVEL WEBSITE</small>
                        <small>COPYRIGHTS - YASINTA 2023</small>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Footer;