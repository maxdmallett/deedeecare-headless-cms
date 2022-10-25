const MobileMenu = () => {
    return (
        <div id="mob-menu">
            <div id="mob-menu-close-btn"></div>
            <div id="mob-menu-content">
                <ul>
                    <li><a href="home.html">HOME</a></li>
                    <li><a data-scroll-to="about-us">ABOUT US</a></li>
                    <li><a data-scroll-to="services">SERVICES</a></li>
                    <li><a data-scroll-to="testimonials">TESTIMONIALS</a></li>
                    <li><a data-scroll-to="contact-us">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu