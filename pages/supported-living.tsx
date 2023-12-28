import type { NextPage } from 'next'
import LogoBar from '../components/logo-bar';
import Navbar from '../components/navbar';
import MobileMenu from '../components/mobile-menu';
import Footer from '../components/footer';
import CommonHead from '../components/common-head';
import BackToServicesButton from '../components/backToServicesButton';

const SupportedLiving: NextPage = () => {

    const title: string = 'Supported Living';

    return (
        <>
            <CommonHead title={title} />
            <main>
                <MobileMenu />
                <LogoBar />
                <Navbar />

                <div id="main-content">

                    <div className="container grid-lg">
                        <h1>{title}</h1>
                        <p>At Dee Dee Care, we actively promote inclusion to enhance a person’s well-being.</p>
                        <p>We advocate the choice to enable the person to participate socially within the community. This can break down the feeling of isolation.</p>
                        <p>We also support the person to live as independently as possible within their own home, living the way they want to live.</p>
                        <p>We respect a person’s privacy.</p>
                        <p>Listening to the needs of the individual, we provide high-quality, person-centred help and support putting you first.</p>		
                        <BackToServicesButton />
                    </div>

                </div>
                
            </main>
            <Footer />
        </>
    )
}

export default SupportedLiving;