import Link from 'next/link';

const News1 = () => {  
  const data = [
  {
      img: "news-1.jpg",
      title:"We ensures you the best quality services",
      authorTitle: "Admin"
  },
  {
      img: "news-2.jpg",
      title:"We ensures you the best quality services",
      authorTitle: "Admin"
  },
  {
      img: "news-3.jpg",
      title:"We ensures you the best quality services",
      authorTitle: "Admin"
  }
];
    return (
        <>
        <section className="news-section">
            <div className="bg-image" style={{ backgroundImage: 'url(images/background/4.jpg)' }}></div>
    
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">watch our latest blogs</span>
                    <h2>Latest news & articals</h2>
                </div>
        
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src={`/images/resource/${item.img}`} alt=""/></Link></figure>
                                <span className="date"><b>28</b> OCT</span>
                            </div>
                            <div className="lower-content">
                                <ul className="post-info">
                                    <li><i className="fa fa-user"></i> by {item.authorTitle}</li>
                                    <li><i className="fa fa-comments"></i> 02 Comments</li>
                                </ul>
                                <h4><Link href="news-details">{item.title}</Link></h4>
                            </div>
                        </div>
                    </div>))}
        
                </div>
            </div>
        </section>
        
        </>
    );
};

export default News1;