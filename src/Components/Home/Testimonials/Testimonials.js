import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchManageReview } from '../../../Redux';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.scss'

const Testimonials = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchManageReview()) , [dispatch])
    const reviews = useSelector(state => state.review.reviews)
    console.log(reviews)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="Testimonials" id="Testimonials">
            <div className="container pb-5">
                <div className="TestimonialsHeader text-center mb-4">
                    <h2 class="fw-bold">Testimonial</h2>
                    <h2 class="sub-title">Some Reviews</h2>
                </div>
                <Carousel responsive={responsive}>
                    {
                        reviews.map(ts => <Testimonial ts={ts} />)
                    }
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;