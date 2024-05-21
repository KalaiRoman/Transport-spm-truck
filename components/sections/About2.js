import Link from "next/link"
const About2 = () => {
    return (
        <>
        <section className="about-section-two">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 order-2">
                <div className="inner-column">
                  <div className="sec-title"> <span className="sub-title">Welcome to logixs</span>
                    <h2>Logixs providing a reliable services</h2>
                    <div className="text">Denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble.</div>
                  </div>
                  <div className="about-block"> <i className="icon flaticon-cash-on-delivery"></i>
                    <h4>Cost Optimisation </h4>
                    <p>Sed commodo pellentesque arcu, urna fermentum.</p>
                  </div>
                  <div className="about-block"> <i className="icon flaticon-delivery-truck-4"></i>
                    <h4>Reduced transit time </h4>
                    <p>Cras facilisis mauris. Sed vitae dui sem.</p>
                  </div>
                  <div className="about-block"> <i className="icon flaticon-customer-service"></i>
                    <h4>Real time monitoring</h4>
                    <p>Vestibulum dictum et felis eget pellentesque.</p>
                  </div>
                  <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                </div>
              </div>

              <div className="image-column col-lg-6">
                <div className="inner-column">
                  <figure className="image"><img src="/images/resource/about-4.jpg" alt=""/></figure>
                  <div className="experience">
                    <div className="inner"> <i className="icon flaticon-partnership"></i> <strong>960</strong>
                      <p>Successful <br/>Projects</p>
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
export default About2
