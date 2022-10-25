import type { NextPage } from 'next'
import LogoBar from '../components/logo-bar';
import Navbar from '../components/navbar';
import MobileMenu from '../components/mobile-menu';
import Footer from '../components/footer';
import CommonHead from '../components/common-head';

const Homecare: NextPage = () => {

    const title: string = 'Homecare';

    return (
        <div>
            <CommonHead title={title} />
            <main>
                <MobileMenu />
                <LogoBar />
                <Navbar />

                <div id="main-content">
                    <div className="container grid-lg">
                        <h1>{title}</h1>
                        <p>Dee Dee Care recognises it’s a big part of a person’s life when inviting someone into their home for support with home care needs. We support with a conscientious approach to help you within and around your home.</p>
                        <p>Services we provide:</p>
                        <ul className="bullet-list">
                            <li>Mobility around the home</li>
                            <li>Light house work</li>
                            <li>Washing and ironing</li>
                            <li>Meal Preparation</li>
                            <li>Taking the dog for a walk</li>
                            <li>Support to visit the doctors or pharmacy</li>
                            <li>Support mobility to the local shops</li>
                            <li>Companionship</li>
                            <li>Journey to help meet up with a friend</li>				
                        </ul>
                    </div>
                </div>
                
            </main>
            <Footer />
        </div>
    )
}

export default Homecare;