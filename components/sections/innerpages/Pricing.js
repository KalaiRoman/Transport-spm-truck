import Link from "next/link";

const PricingTable = () => {
  return (
  <>

  <section className="">
    <div className="container pb-80">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="pricing-block">
            <div className="inner-box">
              <span className="title">Basic Plan</span>
              <div className="price-box">
                <h4 className="price"><sup>$</sup>58.00</h4>
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
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Select Now</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="pricing-block">
            <div className="inner-box">
              <span className="title">Standard Plan</span>
              <div className="price-box">
                <h4 className="price"><sup>$</sup>78.00</h4>
                <span className="validaty">Per Month</span>
              </div>
              <figure className="image"><img src="/images/resource/pricing-2.png" alt=""/></figure>
              <ul className="features">
                <li>2 Warehouse</li>
                <li>Custom Business Rules</li>
                <li>Real Time Rate Shopping</li>
                <li>100% Insurance</li>
                <li>50 Freight Shipments</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Select Now</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="pricing-block">
            <div className="inner-box">
              <span className="title">Advanced Plan</span>
              <div className="price-box">
                <h4 className="price"><sup>$</sup>99.00</h4>
                <span className="validaty">Per Month</span>
              </div>
              <figure className="image"><img src="/images/resource/pricing-1.png" alt=""/></figure>
              <ul className="features">
                <li>3 Warehouse</li>
                <li>Custom Business Rules</li>
                <li>Real Time Rate Shopping</li>
                <li>100% Insurance</li>
                <li>50 Freight Shipments</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Select Now</span></Link>
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
export default PricingTable
