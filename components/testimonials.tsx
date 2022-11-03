import Slider from 'react-slick';

interface SliderSettings {
    slidesToShow?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    dots?: boolean;
    breakpoint?: number;
    arrows?: boolean;
    settings?: SliderSettings;
    responsive?: SliderSettings[];
}

const Testimonials = () => {

    const settings: SliderSettings = {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
        ]
    };

    return (
        <section id="testimonials">
            <div className="container grid-xl ">
                <h2>Testimonials</h2>
                <Slider {...settings}>
                    <div>
                        <p>
                            &quot;Dionne and her team provide outstanding all-around care. Every aspect is covered to suit our needs and the team are passionate about the persons well-being. I would not hesitate to recommend this caring, lovely team.&quot;
                        </p>
                        <p className="quote-ref">Pat, friend of client</p>
                    </div>
                    <div>
                        <p>
                            &quot;We have been very impressed with the reliable, professional and friendly support provided by Dionne and her staff over this past year. Dee Dee Care really does go above and beyond to care for my mother-in-law and we feel very confident depending on them.&quot;
                        </p>
                        <p className="quote-ref">Holly, daughter of client</p>
                    </div>
                    <div>
                        <p>
                            &quot;I would be happy to recommend Dionne. She always presents as professional and competent and is very conscientious. When supporting customers I have found Dionne will go above and beyond in order to ensure customers get a good service that is person centred and shows them respect and dignity.&quot;
                        </p>
                        <p className="quote-ref">Andre, client</p>
                    </div>
                    <div>
                        <p>
                            &quot;With my admiration for the way you are setting up your agency and helping so many. With my thanks and beyond words for all your inspiration and what you have done for me during 2020.&quot;
                        </p>
                        <p className="quote-ref">Michael, client</p>
                    </div>
                    <div>
                        <p>
                            &quot;Thank you for all your support this year (2020).&quot;
                        </p>
                        <p className="quote-ref">Christina, client</p>
                    </div>
                </Slider>
            </div>		
        </section>
    )
}

export default Testimonials