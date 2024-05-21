import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact1 = () => {
    return (
        <>
        <section className="fun-fact-section">
            <div className="bg-image" style={{ backgroundImage: 'url(images/background/1.png)' }}></div>
    
            <div className="auto-container">
                <div className="sec-title light text-center mb-0">
                    <h1>Hundreds of customers <br/>trust our company</h1>
                    <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Get a free Quote</span></Link>
                </div>
    
                <div className="fact-counter">
                    <div className="row">
    
                        <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <span className="icon"><img src="/images/resource/funfact-1.png" alt=""/></span>
                            <div className="inner-column">
                                <div className="count-box"><CounterUp count={145} time={3} /></div>
                                <h4 className="counter-title">Branches Across The World</h4>
                            </div>
                        </div>
        
                        <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <span className="icon"><img src="/images/resource/funfact-2.png" alt=""/></span>
                            <div className="inner-column">
                                <div className="count-box"><CounterUp count={26} time={3} />k</div>
                                <h4 className="counter-title">Parcel Delivered by Riders</h4>
                            </div>
                        </div>
        
                        <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <span className="icon"><img src="/images/resource/funfact-3.png" alt=""/></span>
                            <div className="inner-column">
                                <div className="count-box"><CounterUp count={78} time={3} />k</div>
                                <h4 className="counter-title">Tons of Products Transport</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Funfact1
