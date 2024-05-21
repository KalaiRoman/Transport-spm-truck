import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About1 = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="about-section pb-50">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-7 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Welcome to logixs</span>
                                <h2>Providing full range of <br/>transportation</h2>
                            </div>
                            <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </div>
                            <blockquote>You can simplifying your freight & logistics needs with a personal approach on logixs company.</blockquote>
      
      
                            <div className="bottom-box">
                                <figure className="video-box">
                                    <img src="/images/resource/about-3.jpg" alt=""/>
                                  <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" /><span className="ripple light"></span></a>
                                </figure>
      
                                <ul className="list-style-one">
                                    <li><i className="flaticon-logistics-delivery-4"></i> Safety and reliable service</li>
                                    <li><i className="flaticon-on-time"></i> On - time delivery service</li>
                                </ul>
                                
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                            </div>
                        </div>
                    </div>
      
                    <div className="image-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <figure className="image-1"><img src="/images/resource/about-1.jpg" alt=""/></figure>
                            <figure className="image-2"><img src="/images/resource/about-2.jpg" alt=""/></figure>
                            <div className="experience"><strong>30</strong> Years of work experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default About1
