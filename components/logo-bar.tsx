import MobileMenu from '../components/mobile-menu';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import { globals } from '../data/globals';

const LogoBar = () => {

    const [mobMenuOpen, setMobMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMobMenuOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeMobMenu = () => {
        setMobMenuOpen(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <MobileMenu open={mobMenuOpen} closeCallback={closeMobMenu}/>

            <div id="logo-bar" className="container grid-lg">
                <div id="logo">
                    <Link href="/" legacyBehavior passHref>
                        <a>
                            <Image src="/images/deedeecare-logo.svg" alt="Dee Dee Care" layout='fill' />
                        </a>
                    </Link>
                </div>
                <div id="logo-bar-tel">
                    <a href={`tel:${globals.contactInfo.landlineNumber}`}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>{globals.contactInfo.landlineNumber}</span>
                    </a>
                </div>
                <div id="logo-bar-fb" className="hide-md">
                    <Link href="https://www.facebook.com/pages/category/Home-Health-Care-Service/Dee-Dee-Care-233385160895345/" target="_blank" rel='noreferrer'>
                        <a>
                            <Image src="/images/facebook.svg" alt="Facebook" width={30} height={30} />
                        </a>
                    </Link>
                </div>
                <button id="hamburger-button" className="show-md" onClick={handleHamburgerClick}>
                    <div id="hamburger-icon"><span></span></div>
                </button>
            </div>
        </>
    )
}

export default LogoBar;