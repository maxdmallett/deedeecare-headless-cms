import Slider from 'react-slick';
import { testimonalList } from '../data/testimonials';

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
                    {
                       testimonalList.map((testimonial, index) => {
                            return (
                                <div key={`testimonial-${index}`}>
                                    <p>
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <p className="quote-ref">
                                        {testimonial.clientName}
                                    </p>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>		
        </section>
    )
}

export default Testimonials