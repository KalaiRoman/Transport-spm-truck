import Link from 'next/link';

const NewsGrid = () => {
  return (
    <>

    <section className="news-section">
      <div className="auto-container">
        <div className="row">
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
                <span className="date"><b>28</b> OCT</span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user"></i> by Admin</li>
                  <li><i className="fa fa-comments"></i> 02 Comments</li>
                </ul>
                <h4><Link href="news-details">We ensures you the best quality services</Link></h4>
              </div>
            </div>
          </div>

          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
                <span className="date"><b>28</b> OCT</span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user"></i> by Admin</li>
                  <li><i className="fa fa-comments"></i> 02 Comments</li>
                </ul>
                <h4><Link href="news-details">We ensures you the best quality services</Link></h4>
              </div>
            </div>
          </div>

          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
                <span className="date"><b>28</b> OCT</span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user"></i> by Admin</li>
                  <li><i className="fa fa-comments"></i> 02 Comments</li>
                </ul>
                <h4><Link href="news-details">We ensures you the best quality services</Link></h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
      
    </>
  );
};
export default NewsGrid
