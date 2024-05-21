import Link from "next/link"
const CallToAction2 = () => {
    return (
        <>
        <section className="call-to-action-two" style={{ backgroundImage: 'url(images/background/7.jpg)' }}>
          <div className="auto-container">
            <div className="sec-title light text-center mb-0">
              <h1>Hundreds of customers <br/>
                trust our company</h1>
              <Link href="page-contact" className="theme-btn btn-style-three"><span className="btn-title">Get a free Quote</span></Link>
            </div>
          </div>
        </section>
        </>
    );
};
export default CallToAction2
