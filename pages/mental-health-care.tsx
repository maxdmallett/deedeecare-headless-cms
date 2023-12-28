import type { NextPage } from 'next'
import LogoBar from '../components/logo-bar';
import Navbar, { handleLinkClick } from '../components/navbar';
import MobileMenu from '../components/mobile-menu';
import Footer from '../components/footer';
import CommonHead from '../components/common-head';
import BackToServicesButton from '../components/backToServicesButton';

const MentalHealthCare: NextPage = () => {

    const title: string = 'Mental Health Care';

    return (
        <>
            <CommonHead title={title} />
            <main>
                <MobileMenu />
                <LogoBar />
                <Navbar />

                <div id="main-content">
                    <div className="container grid-lg">
                        <section>
                            <h1>{title}</h1>
                            <p>Living with a mental health issue can be very difficult and can have a significant impact on your daily life. If a mental illness is left untreated it can become a catalyst for a variety of medical complications, however suffering from a mental illness doesn&apos;t have to stop you or a loved one from living a lifestyle you want. With the right support in place, those suffering with their mental health can live a fulfilling independent life.
                            </p>
                        </section>
                        <section>
                            <h2>What is a mental illness?</h2>
                            <p>Mental illnesses are health conditions involving changes in emotions, thinking or behavior some people experience little or no symptoms, but for many people the symptoms can be near impossible to deal with in this case it&apos;s very important this person gets help and support. There are a number of different types of mental illnesses some of the most common are depression, generalised anxiety disorder, panic disorder, obsessive compulsive disorder and post traumatic stress disorder. Approximately 1 in 6 people in the uk will experience a mental health problem each year.</p>
                        </section>
                        <section>
                            <h2>What we can do to help</h2>
                            <p>Here at Dee Dee Care we believe that everyones needs are different, therefore we have a person-centred care and support plan in place. Our services can be tailored to your needs - from companionship to full care and support. The team has a very strong understanding of mental health care, we have taken the time to learn the skills needed to help people stay in control of their mental health. Many of our team have first hand experience with mental health and this is why we feel that our care and support is first class.</p>
                        </section>
                        <section>
                            <h2>The care and support we offer</h2>
                            <p>We can offer a wide range of services to suit your needs. Some of our services include:</p>
                            <ul className="bullet-list">
                                <li>Pop ins to ensure everything is okay</li>
                                <li>Medication checks/administration</li>
                                <li>Companionship</li>
                                <li>Assistance with meals, chores and personal hygiene</li>
                                <li>Helping with daily activities.</li>
                                <li>Helping with breathing exercises and other exercises to keep calm.</li>
                                <li>We can work closely with the family and offer mood charts to keep track of the customer&apos;s mood on a daily basis.</li>
                            </ul>
                        </section>
                        <BackToServicesButton />
			        </div>
                </div>
                
            </main>
            <Footer />
        </>
    )
}

export default MentalHealthCare;