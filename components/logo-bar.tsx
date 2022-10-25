import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const LogoBar = () => {
    return (
        <div id="logo-bar" className="container grid-lg">
            <div id="logo">
                <a href="home.html">
                    <Image src="/images/deedeecare-logo.svg" alt="Dee Dee Care" width={113} height={90}/>
                </a>
            </div>
            <div id="logo-bar-tel">
                <a href="tel:01603 629218">
                    <FontAwesomeIcon icon={faPhone} />
                <span>01603 629218</span></a>
            </div>
            <div id="logo-bar-fb" className="hide-md">
                <a href="https://www.facebook.com/pages/category/Home-Health-Care-Service/Dee-Dee-Care-233385160895345/" target="_blank" rel='noreferrer'>
                    <Image src="/images/facebook.svg" alt="Facebook" width={30} height={30} />
                </a>
            </div>
            <div id="hamburger-button" className="show-md">
                <div id="hamburger-icon"><span></span></div>
            </div>
        </div>
    )
}

export default LogoBar;