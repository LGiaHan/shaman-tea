import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import imageTitle1 from "../../../assets/product1/banner1.png";
import imageTitle2 from "../../../assets/product1/banner2.png";
import imageDrink1 from "../../../assets/product1/product1.png";
import imageDrink2 from "../../../assets/product1/product2.png";
import imageDrink3 from "../../../assets/product1/product3.png";
import elip from "../../../assets/product1/Ellip1.png";
import icon from "../../../assets/product1/icon.png";

const Slide = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: true,
                },
            },
        ],
    };
    const slide = [
        {
            id: 1,
            imageTitle: imageTitle1,
            imageDrink: imageDrink1,
        },
        {
            id: 2,
            imageTitle: imageTitle2,
            imageDrink: imageDrink2,
        },
        {
            id: 1,
            imageTitle: imageTitle1,
            imageDrink: imageDrink3,
        },
    ];
    return (
        <div className="banner">
            <Slider {...settings}>
                {slide.map((item) => (
                    <div key={item.id} className="banner-item">
                        <div className="banner-content">
                            <Row>
                                <Col md={6}>
                                    <div className="banner-content_banner">
                                        <img src={item.imageTitle} alt="" className="banner-content_image_title" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="banner-content_image">
                                        <img src={item.imageDrink} alt="" className="banner-content_image_title" />
                                        <div className="banner-content_image_elip">
                                            <img src={elip} alt="" className="banner-content_image_title" />
                                        </div>
                                        <div className="banner-content_image_icon">
                                            <img src={icon} alt="" className="banner-content_image_title" />
                                        </div>
                                        <div className="banner-content_image_icon2">
                                            <img src={icon} alt="" className="banner-content_image_title" />
                                        </div>
                                        <div className="banner-content_image_icon3">
                                            <img src={icon} alt="" className="banner-content_image_title" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;
