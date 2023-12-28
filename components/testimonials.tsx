import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { staticTestimonalList } from '../data/testimonials';

const settings: Settings = {
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

interface ITestimonial {
    client: string;
    quote: string;
}

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState<ITestimonial[] | null>(null);

    useEffect(() => {
        fetch(`https://graphql.contentful.com/content/v1/spaces/a2slzu40iyz7/environments/master`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `query testimonialCollectionQuery {
                    testimonialCollection {
                        items {
                            client,
                            quote
                        }
                    }
                }`
            }),
        })
        .then(response => response.json())
        .then(json => {
            const { data } = json;
            if (!data) {
                console.log('failed to fetch testimonials from contentful, using static list');
                setTestimonials(staticTestimonalList);
                return;
            }
            setTestimonials(data.testimonialCollection.items);
        }).
        catch(error => {
            throw error;
        });
    }, []);

    if (!testimonials) return null;

    return (
        <section id="testimonials">
            <div className="container grid-xl ">
                <h2>Testimonials</h2>
                <Slider {...settings}>
                    {
                       testimonials.map((testimonial, index) => {
                            return (
                                <div key={`testimonial-${index}`}>
                                    <p>
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <p className="quote-ref">
                                        {testimonial.client}
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