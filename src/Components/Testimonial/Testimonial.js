import React, { Fragment,useState,useEffect } from 'react'
import { Row,Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialData from '../AllProductData/TestimonialData/TestimonialData'
import CustomerReviewCard from '../ReuseAbleComponent/Card/CustomerReviewCard';
import CustomerReviewSkeletonAnimation from '../ReuseAbleComponent/SkeletonComponent/CustomerReviewSkeletonAnimation';

let settings = {
    autoplaySpeed: 3000,
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 3000,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function Testimonial () {
    const [ spinner, setSpinner ] = useState(true);
      
    useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
    }, [])

    const data = TestimonialData.map(item=>{
        return (
           <CustomerReviewCard 
              name={item.name}
              image={item.image}
              review={item.review}
              key={item.id}
        />
        )
     })

        return (
            <Fragment>
                <Container className="text-center mb-5">
                    <Row>
                        {
                            spinner ?
                            <Row>
                                <Slider {...settings}>
                                    <CustomerReviewSkeletonAnimation />
                                    <CustomerReviewSkeletonAnimation />
                                    <CustomerReviewSkeletonAnimation />
                                    <CustomerReviewSkeletonAnimation />
                                </Slider>
                            </Row>

                            :
                            <Row>
                                <Slider {...settings}>
                                    {data}
                                </Slider>
                            </Row>
                        }
                   
                    </Row>
                </Container>
            </Fragment>
        )
    }

