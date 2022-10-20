import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import './SearchSlider.css'
import image1 from '../../image/Destination/tour-4.jpeg'
import image2 from '../../image/Destination/image-2.jpeg'
import image3 from '../../image/Destination/image-3.jpeg'
import image4 from '../../image/Destination/image-4.jpeg'
import image5 from '../../image/Destination/image-5.jpeg'

const PackageSlider = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#21211e64", borderRadius: "50%", padding: '10px', width: '40px', height: '40px' }}
                onClick={onClick}
            />
        );
    }


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#21211e64", borderRadius: "50%", padding: '10px', width: '40px', height: '40px' }}
                onClick={onClick}
            />
        );
    }
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="test px-md-0 px-3">
            <Slider {...settings}>
                <div className="package-image-child">
                    <img className="img-fluid" src={image1} alt="" />
                </div>
                <div className="package-image-child">
                    <img className="img-fluid" src={image2} alt="" />
                </div>
                <div className="package-image-child">
                    <img className="img-fluid" src={image3} alt="" />
                </div>
                <div className="package-image-child">
                    <img className="img-fluid" src={image1} alt="" />
                </div>
                <div className="package-image-child">
                    <img className="img-fluid" src={image2} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default PackageSlider