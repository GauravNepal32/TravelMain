import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import './SearchSlider.css'

const SearchSlider = () => {
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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                <div className="">
                    <div className="search-card mx-auto">
                        <div className="icons-container">
                            <span class="material-symbols-outlined">
                                paragliding
                            </span>
                        </div>
                        <div className="card-name">Adventure</div>
                    </div>
                </div>
                <div>
                    <div className="search-card mx-auto">
                        <div className="icons-container">
                            <span class="material-symbols-outlined">
                                nature
                            </span>
                        </div>
                        <div className="card-name">Nature</div>
                    </div>
                </div>
                <div>
                    <div className="search-card mx-auto">
                        <div className="icons-container">
                            <span class="material-symbols-outlined">
                                surfing
                            </span>
                        </div>
                        <div className="card-name">Surfing</div>
                    </div>
                </div>
                <div>
                    <div className="search-card mx-auto">
                        <div className="icons-container">
                            <span class="material-symbols-outlined">
                                beach_access
                            </span>
                        </div>
                        <div className="card-name">Beach</div>
                    </div>
                </div>
                <div>
                    <div className="search-card mx-auto">
                        <div className="icons-container">
                            <span class="material-symbols-outlined">
                                hiking
                            </span>
                        </div>
                        <div className="card-name">Hiking</div>
                    </div>
                </div>
                <div>
                    <div className="search-card mx-auto">
                        <div className="icons-container">
                            <span class="material-symbols-outlined">
                                beach_access
                            </span>
                        </div>
                        <div className="card-name">Beach</div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SearchSlider