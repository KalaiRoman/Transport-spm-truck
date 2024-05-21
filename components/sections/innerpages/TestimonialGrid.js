import Link from "next/link";

const TestimonialGrid = () => {
  return (
  <>

  <section>
    <div className="container">
      <div className="row g-3">
        {/*<!-- Testimonial Carousel -->*/}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div className="testimonial-block-three mb-md-30">
            <div className="inner-box">
              <div className="thumb">
                <img src="/images/resource/testi-thumb-1.jpg" alt=""/>
                <span className="icon fa fa-quote-left"></span>
              </div>
              <div className="text">I was very impresed by the osfins service lorem ipsum is simply free text used by copy typing refreshing.</div>
              <h4 className="name">Jon D. William</h4>
              <span className="designation">Customer</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div className="testimonial-block-three mb-md-30">
            <div className="inner-box">
              <div className="thumb">
                <img src="/images/resource/testi-thumb-2.jpg" alt=""/>
                <span className="icon fa fa-quote-left"></span>
              </div>
              <div className="text">I was very impresed by the osfins service lorem ipsum is simply free text used by copy typing refreshing.</div>
              <h4 className="name">Monica Smith</h4>
              <span className="designation">Customer</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div className="testimonial-block-three mb-md-30">
            <div className="inner-box">
              <div className="thumb">
                <img src="/images/resource/testi-thumb-3.jpg" alt=""/>
                <span className="icon fa fa-quote-left"></span>
              </div>
              <div className="text">I was very impresed by the osfins service lorem ipsum is simply free text used by copy typing refreshing.</div>
              <h4 className="name">Kevin Brown</h4>
              <span className="designation">Customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>
  );
};
export default TestimonialGrid
