import Link from "next/link"
const Pricing2 = () => {
    return (
        <>
        <section className="pricing-section">
          <div className="bg-layer"></div>
          <div className="auto-container">
            <div className="row"> 

              <div className="title-column col-lg-4">
                <div className="sec-title"> <span className="sub-title">PRICING & PLANS</span>
                  <h2>Effective & affordable plans</h2>
                  <ul className="list-style-two">
                    <li><i className="fa fa-check-circle"></i> Get Right Solutions for Shipment</li>
                    <li><i className="fa fa-check-circle"></i> Expert Logistics Team Members</li>
                  </ul>
                  <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</div>
                </div>
              </div>
              <div className="pricing-column col-lg-8">
                <div className="row"> 

                  <div className="pricing-block col-lg-6 col-md-6 wow fadeInRight">
                    <div className="inner-box"> <span className="title">Basic Plan</span>
                      <div className="price-box">
                        <h4 className="price"><sup>$</sup>38.00</h4>
                        <span className="validaty">Per Month</span>
                      </div>
                      <figure className="image"><img src="/images/resource/pricing-1.png" alt=""/></figure>
                      <ul className="features">
                        <li>1 Warehouse</li>
                        <li>Custom Business Rules</li>
                        <li>Real Time Rate Shopping</li>
                        <li>100% Insurance</li>
                        <li>50 Freight Shipments</li>
                      </ul>
                      <div className="btn-box"> <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Select Now</span></Link> </div>
                    </div>
                  </div>

                  <div className="pricing-block col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                    <div className="inner-box"> <span className="title">Standard Plan</span>
                      <div className="price-box">
                        <h4 className="price"><sup>$</sup>38.00</h4>
                        <span className="validaty">Per Month</span>
                      </div>
                      <figure className="image"><img src="/images/resource/pricing-2.png" alt=""/></figure>
                      <ul className="features">
                        <li>1 Warehouse</li>
                        <li>Custom Business Rules</li>
                        <li>Real Time Rate Shopping</li>
                        <li>100% Insurance</li>
                        <li>50 Freight Shipments</li>
                      </ul>
                      <div className="btn-box"> <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Select Now</span></Link> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Pricing2
