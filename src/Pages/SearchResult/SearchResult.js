import React from 'react'
import { useLocation } from 'react-router-dom'
import feature from '../../image/Home/package.jpeg';
import { Link } from 'react-router-dom';


const SearchResult = () => {
    const { state } = useLocation();
    const totalStars = 5;
    const activeStars = 4;
    return (
        <div className='px-md-4 py-3'>
            <div className="fs-3 fw-bold my-3">Search Result</div>
            {state.result.map((res) => (
                <div className="rounded mx-md-0 mx-auto">
                    <Link to={`/package/${res.id}`}>
                        <div className="feature-card-child position-relative me-3 mx-md-0 mx-auto">
                            <div className="overlay-wrapper">
                                <img className='img-fluid rounded' src={feature} alt="" />
                            </div>
                            <div className="overlay-content">
                                <div className="d-flex h-100 flex-column justify-content-between">
                                    <div className="featured-top d-flex justify-content-between">
                                        <div className="featured-card">
                                            featured
                                        </div>
                                        <div className="react-icon-container">
                                            <span class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                    </div>
                                    <div className="featured-bottom  mt-auto">
                                        <div className="action-package d-flex justify-content-between">
                                            <div className="review-container d-flex">

                                                {[...new Array(totalStars)].map((arr, index) => {
                                                    return index < activeStars ?
                                                        <div className="review-star">
                                                            <span class="material-symbols-outlined">
                                                                star
                                                            </span>
                                                        </div> :
                                                        <div className="review-star-half">
                                                            <span class="material-symbols-outlined">
                                                                star
                                                            </span>
                                                        </div>;
                                                })}
                                            </div>
                                        </div>
                                        <div className="package-name">
                                            <div className="">{res.title}</div>
                                        </div>
                                        <div className="package-loaction d-flex align-items-center">
                                            <span>
                                                {res.location_name}
                                            </span>
                                        </div>
                                        <div className="package-price">
                                            From <span className='ms-2 price'>${res.starting_price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default SearchResult