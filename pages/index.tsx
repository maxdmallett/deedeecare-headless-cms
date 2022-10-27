import type { NextPage } from 'next'
import LogoBar from '../components/logo-bar';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import AboutUs from '../components/about-us';
import CoreValues from '../components/core-values';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Awards from '../components/awards';
import Contact from '../components/contact';
import Footer from '../components/footer';
import CommonHead from '../components/common-head';

const Home: NextPage = () => {
    return (
        <div>
            <CommonHead />
            <main>
                <LogoBar />
                <Navbar />
                <Hero />
                <AboutUs />
                <CoreValues />
                <Services />
                <Testimonials />
                <Contact />
                <Awards />
            </main>
            <Footer />
        </div>
    )
}

export default Home;
