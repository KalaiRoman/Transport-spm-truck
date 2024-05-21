import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
        spaceBetween: 20,
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
                slidesPerView: 4,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
        }

        
    };
const Projects1 = () => {
    return (
        <>
        <section className="project-section">
            <div className="large-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Check Our Work</span>
                    <h2>Explore recent projects</h2>
                </div>
              <Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme">
                  {/* project Block */}
                  <SwiperSlide>
		<div className="project-block">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image"><Link href="/images/resource/project-1.jpg" className="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""/></Link></figure>
				</div>
				<div className="content-box">
					<div className="inner">
						<span className="title">Project 01</span>
						<h4><Link href="page-project-details">Transport Service</Link></h4>
						<Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
					</div>
				</div>
			</div>
		</div>
                  </SwiperSlide>
                  {/* project Block */}
                  <SwiperSlide>
		<div className="project-block">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image"><Link href="/images/resource/project-2.jpg" className="lightbox-image"><img src="/images/resource/project-2.jpg" alt=""/></Link></figure>
				</div>
				<div className="content-box">
					<div className="inner">
						<span className="title">Project 02</span>
						<h4><Link href="page-project-details">Shipment Monitoring</Link></h4>
						<Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
					</div>
				</div>
			</div>
		</div>
                  </SwiperSlide>
                  {/* project Block */}
                  <SwiperSlide>
		<div className="project-block">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image"><Link href="/images/resource/project-3.jpg" className="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""/></Link></figure>
				</div>
				<div className="content-box">
					<div className="inner">
						<span className="title">Project 02</span>
						<h4><Link href="page-project-details">Logistics Cargo</Link></h4>
						<Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
					</div>
				</div>
			</div>
		</div>
                  </SwiperSlide>
                  {/* project Block */}
                  <SwiperSlide>
		<div className="project-block">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image"><Link href="/images/resource/project-4.jpg" className="lightbox-image"><img src="/images/resource/project-4.jpg" alt=""/></Link></figure>
				</div>
				<div className="content-box">
					<div className="inner">
						<span className="title">Project 02</span>
						<h4><Link href="page-project-details">Transport Service</Link></h4>
						<Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
					</div>
				</div>
			</div>
		</div>
                  </SwiperSlide>
                  {/* project Block */}
                  <SwiperSlide>
		<div className="project-block">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image"><Link href="/images/resource/project-1.jpg" className="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""/></Link></figure>
				</div>
				<div className="content-box">
					<div className="inner">
						<span className="title">Project 02</span>
						<h4><Link href="page-project-details">Transport Service</Link></h4>
						<Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
					</div>
				</div>
			</div>
		</div>
                  </SwiperSlide>
              </Swiper>
            </div>
        </section>
        </>
    );
};
export default Projects1
