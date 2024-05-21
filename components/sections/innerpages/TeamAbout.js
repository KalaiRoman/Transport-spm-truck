import Link from "next/link"
const TeamAbout = () => {
    return (
        <>
        <section className="team-section">
          <div className="auto-container">
            <div className="sec-title text-center"> <span className="sub-title">LEADERSHIP TEAM</span>
              <h2>Transport expert team</h2>
            </div>
            <div className="row"> 

              <div className="team-block col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-1.jpg" alt=""/></Link></figure>
                  </div>
                  <div className="info-box">
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <span className="share-icon fa fa-share-alt"></span> <span className="designation">Manager</span>
                    <h4 className="name"><Link href="page-team-details">George Chan</Link></h4>
                  </div>
                </div>
              </div>

              <div className="team-block col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-2.jpg" alt=""/></Link></figure>
                  </div>
                  <div className="info-box">
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <span className="share-icon fa fa-share-alt"></span> <span className="designation">Manager</span>
                    <h4 className="name"><Link href="page-team-details">Aleesha Brown</Link></h4>
                  </div>
                </div>
              </div>

              <div className="team-block col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-3.jpg" alt=""/></Link></figure>
                  </div>
                  <div className="info-box">
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <span className="share-icon fa fa-share-alt"></span> <span className="designation">Manager</span>
                    <h4 className="name"><Link href="page-team-details">Robert Jonson</Link></h4>
                  </div>
                </div>
              </div>

              <div className="team-block col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href="page-team-details"><img src="/images/resource/team-4.jpg" alt=""/></Link></figure>
                  </div>
                  <div className="info-box">
                    <div className="social-links">
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <span className="share-icon fa fa-share-alt"></span> <span className="designation">Manager</span>
                    <h4 className="name"><Link href="page-team-details">Sarah Albert</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default TeamAbout
