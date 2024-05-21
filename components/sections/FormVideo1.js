import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const FormVideo1 = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="quote-section">
            <div className="auto-container">
                <div className="outer-box" style={{ backgroundImage: 'url(images/background/3.jpg)' }}>
                    <div className="form-column">
                        <div className="inner-column wow fadeInUp">
                            <h4>Request a quote</h4>
                            
                            <div className="request-form">
                                <form method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                            <label>ORIGIN COUNTRY</label>
                                            <select className="custom-select">
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Åland Islands">Åland Islands</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                            </select>
                                        </div>
    
                                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                            <label>CITY</label>
                                            <select className="custom-select">
                                                <option value="Kabul">Kabul</option>
                                                <option value="Mariehamn">Mariehamn</option>
                                                <option value="Tirana">Tirana</option>
                                                <option value="Algiers">Algiers</option>
                                                <option value="Pago Pago">Pago Pago</option>
                                                <option value="Andorra la Vella">Andorra la Vella</option>
                                                <option value="Luanda">Luanda</option>
                                                <option value="The Valley">The Valley</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="St. John's">St. John's</option>
                                                <option value="Buenos Aires">Buenos Aires</option>
                                                <option value="Yerevan">Yerevan</option>
                                                <option value="Oranjestad">Oranjestad</option>
                                            </select>
                                        </div>
    
                                        <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                            <label>PACKAGE TYPE</label>
                                            <select className="custom-select">
                                                <option value="Boxes">Boxes</option>
                                                <option value="Stekk Drums">Stekk Drums</option>
                                                <option value="Bales">Bales</option>
                                            </select>
                                        </div>
    
                                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                            <label>DESTINATION COUNTRY</label>
                                            <select className="custom-select">
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Åland Islands">Åland Islands</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                            <label>CITY</label>
                                            <select className="custom-select">
                                                <option value="Kabul">Kabul</option>
                                                <option value="Mariehamn">Mariehamn</option>
                                                <option value="Tirana">Tirana</option>
                                                <option value="Algiers">Algiers</option>
                                                <option value="Pago Pago">Pago Pago</option>
                                                <option value="Andorra la Vella">Andorra la Vella</option>
                                                <option value="Luanda">Luanda</option>
                                                <option value="The Valley">The Valley</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="St. John's">St. John's</option>
                                                <option value="Buenos Aires">Buenos Aires</option>
                                                <option value="Yerevan">Yerevan</option>
                                                <option value="Oranjestad">Oranjestad</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                            <label>QUANTITY</label>
                                            <select className="custom-select">
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                                <option value="6">06</option>
                                                <option value="7">07</option>
                                                <option value="8">08</option>
                                                <option value="9">09</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
    
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label>FREIGHT TYPE</label>
                                            <select className="custom-select">
                                                <option value="">Air Freight</option>
                                                <option value="">Ocean Freight</option>
                                                <option value="">Rail transport</option>
                                                <option value="">Cargo ship</option>
                                                <option value="">Bulk cargo</option>
                                            </select>
                                        </div>
    
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label>SHIPPING TYPE</label>
                                            <select className="custom-select">
                                                <option value="">Door to Door</option>
                                                <option value="">International shipping</option>
                                                <option value="">Multi Modal</option>
                                            </select>
                                        </div>
    
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">get a quote now</span></button>
                                        </div>
    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    
                    <div className="content-column">
                        <div className="inner-column">
                            <div className="content-box">
                                  <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" /><span className="ripple"></span></a>
                                <span className="logo-icon"><img src="images/icons/logo-icon.png" alt=""/></span>
                                <span className="title">5 Mins video</span>
                                <h2>We’re offering total transport coverage and flexibility in our imports & exports</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default FormVideo1
