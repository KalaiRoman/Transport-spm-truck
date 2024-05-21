import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  navigation: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true
};
const Slider2 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="banner-section">
      <div className="banner-carousel owl-carousel owl-theme"> 
        <Swiper {...swiperOptions}>
          <SwiperSlide className="slide-item">
            <div className="bg-image" style={{ backgroundImage: 'url(images/background/6.png)' }}></div>
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-6">
                  <div className="content-box"> <span className="line"></span> <span className="sub-title">Contact us anytime</span>
                    <h2>Fast & Secure Transportation Services</h2>
                    <div className="btn-box">
                      <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6">
                  <div className="image-box">
                    <div className="video-box"> 
                      <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" /><span className="ripple"></span></a>
                      <div className="title">Watch <br/>How it Works</div>
                    </div>
                    <figure className="image"><img src="/images/resource/truck.png" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className="slide-item">
            <div className="bg-image" style={{ backgroundImage: 'url(images/background/6.png)' }}></div>
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-6">
                  <div className="content-box"> <span className="line"></span> <span className="sub-title">Contact us anytime</span>
                    <h2>Fast & Secure Transportation Services</h2>
                    <div className="btn-box">
                      <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6">
                  <div className="image-box">
                    <div className="video-box"> 
                      <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" /><span className="ripple"></span></a>
                      <div className="title">Watch <br/>How it Works</div>
                    </div>
                    <figure className="image"><img src="/images/resource/truck.png" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
    </>
  );
};
export default Slider2