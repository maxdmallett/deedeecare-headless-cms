const Services = () => {
    return (
        <section id="services">
            <div className="container grid-xl ">
                <h2>Services</h2>
                <div className="row">
                    <div className="columns">
                        <div className="column service-column col-6 col-sm-12">
                            <div className="service supporting-carers">
                                <div className="service-img"></div>
                                <div className="service-text">
                                    <h3>Supporting Carers</h3>
                                    <p>Respite support and promoting physical and mental well-being.</p>
                                    <a href="supporting-carers.html" className="button shadow">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="column service-column col-6 col-sm-12">
                            <div className="service hoarding">
                                <div className="service-img"></div>
                                <div className="service-text">
                                    <h3>Mental Health Care</h3>
                                    <p>Person-centred care and support, tailored to your needs.</p>
                                    <a href="mental-health-care.html" className="button shadow">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="column service-column col-6 col-sm-12">
                            <div className="service homecare">
                                <div className="service-img"></div>
                                <div className="service-text">
                                    <h3>Homecare</h3>
                                    <p>Meeting your needs with day-to-day living at home.</p>
                                    <a href="homecare.html" className="button shadow">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="column service-column col-6 col-sm-12">
                            <div className="service supported-living">
                                <div className="service-img"></div>
                                <div className="service-text">
                                    <h3>Supported Living</h3>
                                    <p>Access being part of the community and recreational activities.</p>
                                    <a href="supported-living.html" className="button shadow">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services