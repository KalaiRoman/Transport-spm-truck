import Link from 'next/link';

const TeamGrid = () => {
  return (
  <>

  <section className="">
    <div className="container pb-80">

      <div className="row">
        {/* Team block */}
        <div className="team-block col-lg-3 col-md-6 wow fadeInUp">
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
              <span className="share-icon fa fa-share-alt"></span>
              <span className="designation">Manager</span>
              <h4 className="name"><Link href="page-team-details">George Chan</Link></h4>
            </div>
          </div>
        </div>

        {/* Team block */}
        <div className="team-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
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
              <span className="share-icon fa fa-share-alt"></span>
              <span className="designation">Manager</span>
              <h4 className="name"><Link href="page-team-details">Aleesha Brown</Link></h4>
            </div>
          </div>
        </div>

        {/* Team block */}
        <div className="team-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
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
              <span className="share-icon fa fa-share-alt"></span>
              <span className="designation">Manager</span>
              <h4 className="name"><Link href="page-team-details">Robert Jonson</Link></h4>
            </div>
          </div>
        </div>

        {/* Team block */}
        <div className="team-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="900ms">
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
              <span className="share-icon fa fa-share-alt"></span>
              <span className="designation">Manager</span>
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
export default TeamGrid
