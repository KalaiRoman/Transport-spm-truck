import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
        }

        
    };
const FormMap2 = () => {
    return (
        <>
		<section className="contact-section">
		  <div className="auto-container">
			<div className="row"> 
			  <div className="info-column col-lg-7 order-2">
				<div className="inner-column">
              <Swiper {...swiperOptions} className="branches-carousel owl-carousel owl-theme">
                  <SwiperSlide>
					<div className="branch-block">
					  <div className="inner-box">
						<h5>New York</h5>
						<p> <Link href="tel:+9288009860">+92 (8800) 9860</Link><br/>Boat House, 152/21 City Road Hoxton. N1 6NG UK </p>
					  </div>
					</div>
                  </SwiperSlide>
                  <SwiperSlide>
					<div className="branch-block">
					  <div className="inner-box">
						<h5>San Fransisco</h5>
						<p> <Link href="tel:+9288009860">+92 (8800) 9860</Link><br/>Boat House, 152/21 City Road Hoxton. N1 6NG UK </p>
					  </div>
					</div>
                  </SwiperSlide>
                  <SwiperSlide>
					<div className="branch-block">
					  <div className="inner-box">
						<h5>New York</h5>
						<p> <Link href="tel:+9288009860">+92 (8800) 9860</Link><br/>Boat House, 152/21 City Road Hoxton. N1 6NG UK </p>
					  </div>
					</div>
                  </SwiperSlide>
              </Swiper>
				</div>
			  </div>
			  <div className="form-column col-lg-5"> 
				<div className="contact-form">
				  <div className="bg-image" style={{ backgroundImage: 'url(images/background/8.jpg)' }}></div>
				  <h4>Request a quote</h4>
				  <form method="post" id="contact-form">
					<div className="row">
					  <div className="col-lg-12 form-group">
						<input type="text" name="full_name" placeholder="Your Name" required className="mb-2"/>
						<input type="text" name="phone" placeholder="Phone No" required/>
					  </div>
					  <div className="col-lg-12 form-group">
						<label>DIST (Miles):</label>
						<div className="range-slider-one">
						  <input type="text" className="range-amount" name="field-name"/>
						  <div className="distance-range-slider"></div>
						</div>
					  </div>
					  <div className="col-lg-12 form-group">
						<label>FREIGHT TYPE</label>
						<select className="custom-select">
						  <option value="">Air Freight</option>
						  <option value="">Ocean Freight</option>
						  <option value="">Rail transport</option>
						  <option value="">Cargo ship</option>
						  <option value="">Bulk cargo</option>
						</select>
					  </div>
					  <div className="col-lg-12 form-group">
						<label>Load</label>
						<select className="custom-select">
						  <option value="">Select Load</option>
						  <option value="">Door to Door</option>
						  <option value="">International shipping</option>
						  <option value="">Multi Modal</option>
						</select>
					  </div>
					  <div className="col-lg-12 form-group">
						<button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="btn-title">get a quote now</span></button>
					  </div>
					</div>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		  <iframe className="map" height="530" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"> </iframe>
		</section>
        </>
    );
};
export default FormMap2
