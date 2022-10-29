import Link from "next/link"

const Navbar = () => {
    return (
        <nav id="nav-bar" className="hide-md">
            <div className="container grid-lg ">
                <nav className="main_nav">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#about-us">About</Link></li>
                        <li className="submenu">
                            <Link href="#services">Services</Link>
                            <ul className="dropdown">
                                <li><Link href="/supporting-carers">Supporting Carers</Link></li>
                                <li><Link href="/mental-health-care">Mental Health Care</Link></li>
                                <li><Link href="/homecare">Homecare</Link></li>
                                <li><Link href="/supported-living">Supported Living</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#testimonials">Testimonials</Link></li>
                        <li><Link href="#contact-us">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar