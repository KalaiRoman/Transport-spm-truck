import Link from 'next/link';

const ProjectGrid = () => {
  return (
  <>

  <section className="">
    <div className="container pb-90">
      <div className="row g-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
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
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
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
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/project-3.jpg" className="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <div className="inner">
                  <span className="title">Project 03</span>
                  <h4><Link href="page-project-details">Logistics Cargo</Link></h4>
                  <Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/project-4.jpg" className="lightbox-image"><img src="/images/resource/project-4.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <div className="inner">
                  <span className="title">Project 04</span>
                  <h4><Link href="page-project-details">Transport Service</Link></h4>
                  <Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/project-3.jpg" className="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <div className="inner">
                  <span className="title">Project 05</span>
                  <h4><Link href="page-project-details">Logistics Cargo</Link></h4>
                  <Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="/images/resource/project-1.jpg" className="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <div className="inner">
                  <span className="title">Project 06</span>
                  <h4><Link href="page-project-details">Transport Service</Link></h4>
                  <Link href="page-project-details" className="icon"><i className="lnr-icon-arrow-right"></i></Link>
                </div>
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
export default ProjectGrid
