import Link from "next/link"
const Work = () => {
    return (
        <>
        <section className="work-section pt-4">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">HOW WE WORK</span>                
                    <h2>We aim to contribute well to <br/>your company</h2>
                </div>
                
                <div className="row">
                    <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="content-box">
                                <i className="icon flaticon-delivery-2"></i>
                                <h4><Link href="#">Replenishment and Picking</Link></h4>
                                <div className="text">Dolores molestias excepturi occaecati cupiditated non provident quas.</div>
                            </div>
                            <Link href="page-project-details" className="process-btn">
                                <span className="count"><span>01</span></span> 
                                <span className="btn-title">More Detail</span>
                            </Link>
                        </div>
                    </div>
    
                    <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <i className="icon flaticon-distribution-center-1"></i>
                                <h4><Link href="#">Warehousing Operation</Link></h4>
                                <div className="text">Dolores molestias excepturi occaecati cupiditated non provident quas.</div>
                            </div>
                            <Link href="page-project-details" className="process-btn">
                                <span className="count"><span>02</span></span> 
                                <span className="btn-title">More Detail</span>
                            </Link>
                        </div>
                    </div>
    
                    <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <i className="icon flaticon-distribution-center-2"></i>
                                <h4><Link href="#">Packaging and Distribution</Link></h4>
                                <div className="text">Dolores molestias excepturi occaecati cupiditated non provident quas.</div>
                            </div>
                            <Link href="page-project-details" className="process-btn">
                                <span className="count"><span>03</span></span> 
                                <span className="btn-title">More Detail</span>
                            </Link>
                        </div>
                    </div>
    
                    <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <i className="icon flaticon-flow"></i>
                                <h4><Link href="#">Transportation Process</Link></h4>
                                <div className="text">Dolores molestias excepturi occaecati cupiditated non provident quas.</div>
                            </div>
                            <Link href="page-project-details" className="process-btn">
                                <span className="count"><span>04</span></span> 
                                <span className="btn-title">More Detail</span>
                            </Link>
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
        </>
    );
};
export default Work
