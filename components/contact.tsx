import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact-us">
            <div className="container grid-lg ">
                <h2>Contact</h2>
                <div className="row">
                    <p className="section-para">Get in touch to find out more about our care services. We are happy to help.</p>

                    <div id="social-icon-fb" className="show-sm">
                        <a href="https://www.facebook.com/pages/category/Home-Health-Care-Service/Dee-Dee-Care-233385160895345/" target="_blank" rel="noreferrer">
                            <Image src="/images/facebook.svg" alt="Facebook" layout='fill'/>
                        </a>
                    </div>
                        
                    <div id="contact-icons-container" className="container grid-lg ">
                        <div id="contact-icons-section">
                            <div className="columns">
                                <div className="column contact-feature-column col-4 col-md-12">
                                    <div className="contact-feature double-line">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <p><a href="tel:01603 629218">01603 629218</a></p>
                                        <p><a href="tel:077350 99987">077350 99987</a></p>
                                    </div>
                                </div>
                                <div className="column contact-feature-column col-4 col-md-12">
                                    <div className="contact-feature">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <p><a href="mailto:contact@deedeecare.co.uk?Subject=Website%20Enquiry">contact@deedeecare.co.uk</a></p>
                                    </div>
                                </div>
                                <div className="column contact-feature-column col-4 col-md-12">
                                    <div className="contact-feature double-line">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <p>Arnold Miller Road<br />
                                        Norwich, Norfolk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.7189114970024!2d1.2993053158108585!3d52.61085147983154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e3f62fbe8f09%3A0x478886bf62a0c9d5!2s54+Arnold+Miller+Rd%2C+Norwich+NR1+2JH!5e0!3m2!1sen!2suk!4v1543430468581" width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
            </div>	
        </section>
    )
}

export default Contact