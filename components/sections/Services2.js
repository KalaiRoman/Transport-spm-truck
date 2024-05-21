import Link from "next/link"
const Services2 = () => {
    return (
        <>
        <section className="services-section-two">
          <div className="auto-container">
            <div className="sec-title text-center"> <span className="sec-title">OUR SERVICES</span>
              <h2>Moving your products <br/>across all borders</h2>
            </div>
            <div className="row"> 

              <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp">
                <div className="inner-box "> <i className="icon flaticon-airplane-2"></i>
                  <h4><Link href="page-service-details">Air Freight</Link></h4>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod. </div>
                  <Link href="page-service-details" className="read-more">Read More</Link>
                  <figure className="image"><Link href="page-service-details"><img src="/images/resource/service-1.jpg" alt=""/></Link></figure>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner-box "> <i className="icon flaticon-cargo-boat"></i>
                  <h4><Link href="page-service-details">Ocean Freight</Link></h4>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod. </div>
                  <Link href="page-service-details" className="read-more">Read More</Link>
                  <figure className="image"><Link href="page-service-details"><img src="/images/resource/service-2.jpg" alt=""/></Link></figure>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner-box "> <i className="icon flaticon-delivery-truck-3"></i>
                  <h4><Link href="page-service-details">Road Transport</Link></h4>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod. </div>
                  <Link href="page-service-details" className="read-more">Read More</Link>
                  <figure className="image"><Link href="page-service-details"><img src="/images/resource/service-3.jpg" alt=""/></Link></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Services2
