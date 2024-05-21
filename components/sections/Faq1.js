import { useState } from 'react'
const Faq1 = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
  <>
  <section className="faqs-section" style={{ backgroundImage: 'url(images/background/2.jpg)' }}>
    <div className="auto-container">
      <div className="row">
        <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-4">
          <div className="inner-column">


            <ul className="accordion-box wow fadeInRight">
              <li className="accordion block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  What warranties do I have for shipment? 
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  What is included in your services?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  What are the payment methods?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  How fast I get my order?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="content-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">frequently asked questions</span>
              <h2>Things you need to know and we know your’s</h2>
            </div>

            <div className="faq-block">
              <div className="inner-box">
                <i className="icon lnr-icon-arrow-right"></i>
                <h4>Donec Quis felis Commodo</h4>
                <div className="text">Lorem ipsum is simply free text dolor sit amet, passage of consectetur notted</div>
              </div>
            </div>

            <div className="faq-block">
              <div className="inner-box">
                <i className="icon lnr-icon-arrow-right"></i>
                <h4>Donec Quis felis Commodo</h4>
                <div className="text">Lorem ipsum is simply free text dolor sit amet, passage of consectetur notted.</div>
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
export default Faq1
