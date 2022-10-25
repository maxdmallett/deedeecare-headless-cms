import Link from "next/link"

const Navbar = () => {
    return (
        <nav id="nav-bar" className="hide-md">
            <div className="container grid-lg ">
                <nav className="main_nav">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><a data-scroll-to="about-us">About</a></li>
                        <li className="submenu">
                            <a data-scroll-to="services">Services</a>
                            <ul className="dropdown">
                                <li><Link href="/supporting-carers">Supporting Carers</Link></li>
                                <li><Link href="/mental-health-care">Mental Health Care</Link></li>
                                <li><Link href="/homecare">Homecare</Link></li>
                                <li><Link href="/supported-living">Supported Living</Link></li>
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