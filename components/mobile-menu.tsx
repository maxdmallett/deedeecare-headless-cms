import Link from "next/link";

interface IProps {
    open: boolean;
    closeCallback: () => void
}

const MobileMenu = (props: IProps) => {

    const handleCloseButtonClick = () => {
        props.closeCallback();
    }

    return (
        <div id="mob-menu" className={props.open ? "open" : ""}>
            <button id="mob-menu-close-btn" onClick={handleCloseButtonClick}></button>
            <div id="mob-menu-content">
                <ul>
                    <li><Link href="/">HOME</Link></li>
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