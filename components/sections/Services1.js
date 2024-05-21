import Link from "next/link"
const Services1 = () => {
    return (
        <>
        <section className="services-section pb-120">
            <div className="auto-container">
                <div className="row">

                    <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box ">
                            <i className="icon flaticon-airplane-2"></i>
                            <h4><Link href="page-service-details">Air Freight</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</div>
                            <figure className="image"><Link href="page-service-details"><img src="/images/resource/top-service-1.jpg" alt=""/></Link></figure>
                        </div>
                    </div>
    
                    <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <i className="icon flaticon-cargo-boat"></i>
                            <h4><Link href="page-service-details">Ocean Freight</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</div>
                            <figure className="image"><Link href="page-service-details"><img src="/images/resource/top-service-2.jpg" alt=""/></Link></figure>
                        </div>
                    </div>
    
                    <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <i className="icon flaticon-delivery-truck-3"></i>
                            <h4><Link href="page-service-details">Road Transport</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</div>
                            <figure className="image"><Link href="page-service-details"><img src="/images/resource/top-service-3.jpg" alt=""/></Link></figure>
                        </div>
                    </div>
                </div>
    
                <div className="bottom-text">You can also find our <strong>Warehousing Solution</strong> to logistics around the world</div>
            </div>
        </section>
        </>
    );
};
export default Services1
