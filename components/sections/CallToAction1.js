import Link from "next/link"
const CallToAction1 = () => {
    return (
        <>
        <section className="call-to-action">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="title-box">
                        <h2>Fastest & secure way to transport anything anytime</h2>
                    </div>
                    <div className="btn-box"><Link href="page-contact" className="theme-btn btn-style-two"><span className="btn-title">get a free quote</span></Link></div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction1
