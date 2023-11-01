import type { NextPage } from 'next'
import LogoBar from '../components/logo-bar';
import Navbar from '../components/navbar';
import MobileMenu from '../components/mobile-menu';
import Footer from '../components/footer';
import CommonHead from '../components/common-head';

const SupportingCarers: NextPage = () => {

    const title: string = 'Supporting Carers';

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
                        <p>Carers who care for their families or a loved one play a crucial role in society, whether young or old.</p>
                        <p>So, at Dee Dee Care, we feel it is important to take on board, recognise and support their physical and emotional well-being. Caring can be very rewarding for the carer and the person being cared for.</p>
                        <p>Social isolation can also play a big part for the carer in their caring role.</p>
                        <p>Important aspects to support the carer for a sense of positive well-being:</p>
                        <ul className="bullet-list">
                            <li>A walk up the road amongst people.</li>
                            <li>To take a leisurely bath and relax without disturbance.</li>
                            <li>To look at what has grown in the garden.</li>
                            <li>To catch up over coffee with a friend.</li>
                        </ul>
                        <p>We commit to providing respite support for the carer, for either a few hours or an overnight stay.</p>
                        <p>Knowing that you can relax and have peace of mind that your loved one is in safe hands. We provide personal care needs, medication administration and companionship.</p>
                        <p>A supported carer can return to their role, refreshed and with a positive sense of well-being.</p>
                    </div>

                </div>
                
            </main>
            <Footer />
        </>
    )
}

export default SupportingCarers;