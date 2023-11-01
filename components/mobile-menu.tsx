import Link from "next/link";

interface IProps {
    open?: boolean;
    closeCallback?: () => void
}

const MobileMenu = (props: IProps) => {

    const handleCloseButtonClick = () => {
        if (props.closeCallback) props.closeCallback();
    }

    const handleLinkClick = () => {
        if (props.closeCallback) props.closeCallback();
    }

    return (
        <div id="mob-menu" className={props.open ? "open" : ""}>
            <button id="mob-menu-close-btn" onClick={handleCloseButtonClick}></button>
            <div id="mob-menu-content">
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={handleLinkClick}>HOME</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about-us">
                            <a onClick={handleLinkClick}>
                                ABOUT US
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#services">
                            <a onClick={handleLinkClick}>
                                SERVICES
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#testimonials">
                            <a onClick={handleLinkClick}>
                                TESTIMONIALS
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact-us">
                            <a onClick={handleLinkClick}>
                                CONTACT
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu