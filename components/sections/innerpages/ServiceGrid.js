import Link from 'next/link';

const ServiceGrid = () => {
  return (
  <>

  <section className="services-section-two">
    <div className="auto-container">

      <div className="row">
        {/* Service Block Two */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box ">
            <i className="icon flaticon-airplane-2"></i>
            <h4><Link href="page-service-details">Air Freight</Link></h4>
            <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
            <figure className="image"><Link href="page-service-details"><img src="/images/resource/service-1.jpg" alt=""/></Link></figure>
          </div>
        </div>

        {/* Service Block Two */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box ">
            <i className="icon flaticon-cargo-boat"></i>
            <h4><Link href="page-service-details">Ocean Freight</Link></h4>
            <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
            <figure className="image"><Link href="page-service-details"><img src="/images/resource/service-2.jpg" alt=""/></Link></figure>
          </div>
        </div>

        {/* Service Block Two */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box ">
            <i className="icon flaticon-delivery-truck-3"></i>
            <h4><Link href="page-service-details">Road Transport</Link></h4>
            <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.
            </div>
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
export default ServiceGrid
