import React from 'react'
import logo from '../assets/images/wslogo.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="ok">
                <div className="container">
                    <div className="row playstore">

                        <div className="col-md-8">
                            <h3 className="mt-5">Download app demo text</h3>
                            <p>Get an amazing app to
                                <br />  make your life easy</p>
                        </div>
                        {/* <div classNameName="text-center home-line-play border mb-3 mt-5 "></div> */}
                        <div className="col-md-4 mt-4">
                            <img src="https://almullaengineering.com/wp-content/uploads/2024/02/google-play-Footer.webp" className="mt-5 play" id="cool" />
                        </div>

                    </div>
                </div>

            </div>
            <footer className="footer-section">
                <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget company-intro-widget">
                                    <a href="index.html" className="site-logo"><img src={ logo } alt="logo" /></a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                    <ul className="company-footer-contact-list">
                                        <li><i className="fas fa-phone"></i>0123456789</li>
                                        <li><i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- widget end --> */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget course-links-widget">
                                    <h5 className="widget-title">CUSTOMER POLICIES</h5>
                                    <ul className="courses-link-list">
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Contact Us</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>FAQ</a></li>
                                        
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Track Orders</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Shipping</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Cancellation</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Returns</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- widget end --> */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget latest-news-widget">
                                    <h5 className="widget-title">lastest news</h5>
                                    <ul className="small-post-list">
                                        <li>
                                            <div className="small-post-item">
                                                <a href="#" className="post-date">October 15 2024</a>
                                                <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                                            </div>
                                        </li>
                                        {/* <!-- small-post-item end --> */}
                                        <li>
                                            <div className="small-post-item">
                                                <a href="#" className="post-date">April 15 2024</a>
                                                <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                                            </div>
                                        </li>
                                        {/* <!-- small-post-item end --> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- widget end --> */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget newsletter-widget">
                                    <h5 className="widget-title">Newsletter</h5>
                                    <div className="footer-newsletter">
                                        <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                                        <form className="news-letter-form">
                                            <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                                            <input type="submit" value="Send" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- widget end --> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-sm-left text-center">
                                <span className="copy-right-text">© 2019 <a href="https://codepen.io/anupkumar92">Anup</a> All Rights Reserved.</span>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-bottom end --> */}
            </footer >

        </>
    )
}