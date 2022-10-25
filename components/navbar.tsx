const Navbar = () => {
    return (
        <nav id="nav-bar" className="hide-md">
            <div className="container grid-lg ">
                <nav className="main_nav">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a data-scroll-to="about-us">About</a></li>
                        <li className="submenu">
                            <a data-scroll-to="services">Services</a>
                            <ul className="dropdown">
                                <li><a href="supporting-carers.html">Supporting Carers</a></li>
                                <li><a href="mental-health-care.html">Mental Health Care</a></li>
                                <li><a href="homecare.html">Homecare</a></li>
                                <li><a href="supported-living.html">Supported Living</a></li>
                            </ul>
                        </li>
                        <li><a data-scroll-to="testimonials">Testimonials</a></li>
                        <li><a data-scroll-to="contact-us">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar