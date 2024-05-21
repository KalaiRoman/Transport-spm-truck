import Link from "next/link"

export default function Footer1() {
  return (
  <>
  <footer className="main-footer">

    {/* Widgets Section */}
    <div className="widgets-section" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
      <div className="auto-container">
        <div className="row">

          <div className="footer-column col-xl-4 col-lg-12 col-md-6 col-sm-12">
            <div className="footer-widget about-widget">
              <div className="logo"><Link href="/"><img src="/images/logo-2.png" alt="" /></Link></div>
              <div className="text">Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</div>

              <div className="subscribe-form">
                <form method="post" action="#">
                  <div className="form-group">
                    <input type="email" name="email" className="email" defaultValue="" placeholder="Email Address" required=""/>
                    <button type="button" className="theme-btn btn-style-one">GO</button>
                  </div>
                </form>
              </div>

              <ul className="social-icon-one">
                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-column col-xl-2 col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget">
              <h5 className="widget-title">Explore</h5>
              <ul className="user-links">
                <li><Link href="#">About Company</Link></li>
                <li><Link href="#">Pricing Plan</Link></li>
                <li><Link href="#">Request a Quote</Link></li>
                <li><Link href="#">Packaging</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12">
            <div className="footer-widget recent-posts">
              <h5 className="widget-title">News</h5>
              <div className="widget-content">
                <div className="post">
                  <div className="thumb"><Link href="#"><img src="/images/resource/post-thumb-1.jpg" alt=""/></Link></div>
                  <span className="date">20 Jul, 2022</span>
                  <h4><Link href="#">Logixs name a finalist consumer choice award</Link></h4>
                </div>

                <div className="post">
                  <div className="thumb"><Link href="#"><img src="/images/resource/post-thumb-2.jpg" alt=""/></Link></div>
                  <span className="date">20 Jul, 2022</span>
                  <h4><Link href="#">Logixs name a finalist consumer choice award</Link></h4>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget">
              <h5 className="widget-title">Contact</h5>
              <div className="widget-content">
                <ul className="contact-list">
                  <li>
                    <i className="fa fa-phone-square"></i>
                    <strong>Phone</strong>
                    <Link href="tel:+926668880000">+92 666 888 0000</Link>
                  </li>
                  <li>
                    <strong>Email</strong>
                    <i className="fa fa-envelope"></i>
                    <Link href="mailto:needhelp@company.com">needhelp@company.com</Link>
                  </li>
                  <li>
                    <strong>Address</strong>
                    <i className="fa fa-map-marker"></i>
                    66 road, broklyn street new york
                  </li>
                  <li>
                    <strong>Mon - Sat</strong>
                    <i className="fa fa-clock"></i>
                    8.00am to 9.00pm (Sun: Closed)
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/*  Footer Bottom */}
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">
            <p>© Copyright received by <Link href="/">kodesolution</Link></p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  </>
  )
}