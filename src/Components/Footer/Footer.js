import React, { useState, useEffect } from 'react'
import logo from '../../image/company/1.webp'
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const location = useLocation().pathname.slice(1, 5);
    const [showNav, setShowNav] = useState(true);
    useEffect(() => {
        { location === 'user' ? setShowNav(false) : setShowNav(true) }
    }, [location])
    const moveToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            {showNav &&

        <div className='footer'>
            <div className="pt-5">
                <div className="container px-md-5 py-5">
                    <div className="row row-cols-lg-4 g-4 row-cols-md-2 row-cols-1">
                        <div className="col">
                            <div className="company-logo">
                                <img className='' src={logo} alt="" />
                            </div>
                            <div className="mt-4">
                                Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.
                            </div>
                            <hr />
                            <div className="contact-details">
                                <div className="call mb-3">
                                    <i class="bi bi-telephone-fill text-primary icon"></i>
                                    <span className='ms-3'>+977 9898989898</span>
                                </div>
                                <div className="email mb-3">
                                    <i class="bi bi-envelope-fill text-primary icon"></i>
                                    <span className='ms-3'>+977 9898989898</span>
                                </div>
                                <div className="location">
                                    <i class="bi bi-geo-alt-fill text-primary icon"></i>
                                    <span className='ms-3'>+977 9898989898</span>
                                </div>
                            </div>
                        </div>
                        <div className="col ps-md-5">
                            <div className="footer-heading">
                                Company
                            </div>
                            <ul className='list-unstyled mt-3'>
                                <li>About Us</li>
                                <li>Community Blog</li>
                                <li>Rewards</li>
                                <li>Work With Us</li>
                                <li>Contact</li>

                            </ul>
                        </div>
                        <div className="col">
                            <div className="footer-heading">
                                Explore
                            </div>
                            <ul className='list-unstyled mt-3'>
                                <li>Account</li>
                                <li>Privacy Policy</li>
                                <li>Affilitate Program</li>
                                <li>Our Partners</li>
                                <li>Events</li>

                            </ul>
                        </div>
                        <div className="col">
                            <div className="footer-heading">
                                Newsletter
                            </div>
                            <div className="newsletter-form">
                                <form className='mt-3' action="">
                                    <input className='form-control' type="text" name="" id="" />
                                    <input className='form-control sub-btn mt-3 btn primary-btn fw-bold fs-6 px-5 py-3' type="submit" value={'SUBSCRIBE'} />
                                </form>
                                <div className="mt-4">
                                    <i class="bi bi-check2-circle me-3"></i>
                                    I agree to all terms and policies
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" ps-md-5 ms-md-5">
                    <div className="copy-right-wrapper d-flex flex-wrap">
                        <div onClick={moveToTop} className="scroll-top-container pe-auto bg-primary d-flex align-items-center justify-content-center">
                            <i class="bi bi-arrow-up"></i>
                        </div>
                        <div className="py-4 ms-3 d-flex">
                            <div className="search-container">
                                <i class="bi bi-facebook"></i>
                            </div>  <div className="search-container">
                                <i class="bi bi-twitter"></i>
                            </div>  <div className="search-container">
                                <i class="bi bi-instagram"></i>
                            </div>  <div className="search-container">
                                <i class="bi bi-pinterest"></i>
                            </div>
                        </div>
                        <div className="copyright-text ms-auto me-5 pe-5 py-auto d-flex align-items-center my-md-0 my-3">
                            &copy; Copyright 2022 by Elscript
                        </div>
                    </div>
                </div>
            </div>
        </div>
            }
        </>

    )
}

export default Footer