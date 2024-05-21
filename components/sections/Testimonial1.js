import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Testimonial1 = () => {
    return (
        <>
        <section className="testimonial-section p-0">
            <div className="auto-container">
                <div className="testimonials">
                    <div className="swiper-container">

    <Swiper {...swiperOptions}className="swiper-wrapper">
      <SwiperSlide className="slide-item">
                        <div className="testimonial-block swiper-slide">
                            <div className="inner-box">
                                <figure className="image">
                                    <img src="images/resource/customer.jpg" alt=""/>
                                </figure>
                                <div className="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet, and one that our clients regularly commend us for feeding back crew members. free hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                                <div className="info-box">
                                    <h4 className="name">Smith Jackan</h4>
                                    <span className="designation">Ceo of logixs company</span>
                                    <span className="quote-icon"></span>
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
      </SwiperSlide>


      <SwiperSlide className="slide-item">
                        <div className="testimonial-block swiper-slide">
                            <div className="inner-box">
                                <figure className="image">
                                    <img src="images/resource/customer.jpg" alt=""/>
                                </figure>
                                <div className="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet, and one that our clients regularly commend us for feeding back crew members. free hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                                <div className="info-box">
                                    <h4 className="name">Smith Jackan</h4>
                                    <span className="designation">Ceo of logixs company</span>
                                    <span className="quote-icon"></span>
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
      </SwiperSlide>
    </Swiper>
                </div>
            </div>
        </div>
  </section>
        </>
    );
};
export default Testimonial1