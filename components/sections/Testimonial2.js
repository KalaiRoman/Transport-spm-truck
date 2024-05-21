import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  direction: "vertical",
  navigation: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true
};
const Testimonial2 = () => {
  return (
  <>
  <section className="testimonial-section-two">
    <div className="auto-container">
      <div className="row">
        <div className="title-column col-lg-4 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="sec-title light">
              <span className="sub-title">Our Features</span>
              <h2>What pepole say about logixs</h2>
              <div className="text">Denounce with righteous indignation and dislike men who are so beguiled demoralized.</div>
            </div>
            <div className="trust-score">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="title">Trust score 4.5 (Based on 2,500 reviews)</div>
            </div>
          </div>
        </div>
        <div className="testimonial-column col-lg-8 col-md-12 col-sm-12">
          <div className="inner-column"> 
            <div className="swiper-container testimonial-slider">

              <Swiper {...swiperOptions}className="swiper-wrapper">
                <SwiperSlide className="slide-item">
                  <div className="testimonial-block-two swiper-slide">
                    <div className="inner-box">
                      <div className="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""/></div>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <h4 className="name">Jon D. William</h4>
                      <span className="designation">Founder of Logixs</span>
                      <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                  <div className="testimonial-block-two style-two swiper-slide">
                    <div className="inner-box">
                      <div className="thumb"><img src="/images/resource/testi-thumb-5.jpg" alt=""/></div>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <h4 className="name">Monica Smith</h4>
                      <span className="designation">Founder of Logixs</span>
                      <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                  <div className="testimonial-block-two swiper-slide">
                    <div className="inner-box">
                      <div className="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""/></div>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <h4 className="name">Jon D. William</h4>
                      <span className="designation">Founder of Logixs</span>
                      <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                  <div className="testimonial-block-two style-two swiper-slide">
                    <div className="inner-box">
                      <div className="thumb"><img src="/images/resource/testi-thumb-5.jpg" alt=""/></div>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <h4 className="name">Monica Smith</h4>
                      <span className="designation">Founder of Logixs</span>
                      <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};
export default Testimonial2