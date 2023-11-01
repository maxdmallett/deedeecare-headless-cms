import Link from "next/link"
import { scrollToElement } from "../helpers/helpers";

const Navbar = () => {

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

        const sectionId: string = event.currentTarget.getAttribute('data-sectionid') || '';
        const scrollTarget = document.getElementById(sectionId);

        if (scrollTarget) {
            event.preventDefault();
            scrollToElement(scrollTarget);
        }
    }

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
                        <li><Link href="#contact-us">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar