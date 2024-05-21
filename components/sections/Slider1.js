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
const Slider1 = () => {
    return (
        <>
  <section className="main-slider">

    <Swiper {...swiperOptions}>
      <SwiperSlide className="slide-item">
                <div className="tp-dottedoverlay"></div>
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/main-slider/bg-1.jpg)' }}></div>
                <div className="auto-container content-box">
                    <h2>We’re Global <br/>Logistics Partners</h2>
                    <div className="text mb-15">There are many of passages of lorem Ipsum, but the majori <br/> have suffered alteration in some form.</div>
                    <div className="btn-box">
                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                    </div>
                </div>
      </SwiperSlide>


      <SwiperSlide className="slide-item">
                <div className="tp-dottedoverlay"></div>
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/main-slider/bg-1.jpg)' }}></div>
                <div className="auto-container content-box">
                    <h2>We’re Global <br/>Logistics Partners</h2>
                    <div className="text mb-15">There are many of passages of lorem Ipsum, but the majori <br/> have suffered alteration in some form.</div>
                    <div className="btn-box">
                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                    </div>
                </div>
      </SwiperSlide>
    </Swiper>
  </section>
        </>
    );
};
export default Slider1