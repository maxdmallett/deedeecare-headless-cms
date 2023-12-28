import Link from "next/link"
import { scrollToElement } from "../helpers/helpers";

export const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const sectionId: string = event.currentTarget.getAttribute('data-sectionid') || '';
    const scrollTarget = document.getElementById(sectionId);

    if (scrollTarget) {
        event.preventDefault();
        scrollToElement(scrollTarget);
    }
}

const Navbar = () => {
    return (
        <nav id="nav-bar" className="hide-md"> 
            <div className="container grid-lg ">
                <nav className="main_nav">
                    <ul>
                        <li>
                            <Link
                                legacyBehavior={false}
                                href="/"
                                data-sectionid="hero"
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                legacyBehavior={false}
                                href="/#about-us"
                                data-sectionid="about-us"
                                onClick={handleLinkClick}
                            >
                                About
                            </Link>
                        </li>
                        <li className="submenu">
                            <Link
                                legacyBehavior={false}
                                href="/#services"
                                data-sectionid="services"
                                onClick={handleLinkClick}
                            >
                                Services
                            </Link>
                            <ul className="dropdown">
                                <li><Link href="/supporting-carers">Supporting Carers</Link></li>
                                <li><Link href="/mental-health-care">Mental Health Care</Link></li>
                                <li><Link href="/homecare">Homecare</Link></li>
                                <li><Link href="/supported-living">Supported Living</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                legacyBehavior={false}
                                href="/#testimonials"
                                data-sectionid="testimonials"
                                onClick={handleLinkClick}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                legacyBehavior={false}
                                href="/#contact-us"
                                data-sectionid="contact-us"
                                onClick={handleLinkClick}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar