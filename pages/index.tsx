import type { NextPage } from 'next'
import Head from 'next/head'
import LogoBar from '../components/logo-bar';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import AboutUs from '../components/about-us';
import MobileMenu from '../components/mobile-menu';
import CoreValues from '../components/core-values';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Awards from '../components/awards';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Dee Dee Care | Passionate About People</title>
                <meta name="description" content="Dee Dee Care is small healthcare provider based in Norwich, Norfolk. We are passionate about people and understand the importance of well-being, encouragement and listening. We provide services such as homecare, supporting carers, supported living, hoarding support and care home support." />
                <meta name="author" content="Max Mallett" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#8ac43f" />
                <meta property="og:url" content="https://www.deedeecare.co.uk/images/dee-dee-care-og-image.jpg" />
            </Head>
            <main>
                <MobileMenu />
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
