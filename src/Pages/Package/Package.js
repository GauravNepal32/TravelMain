import React, { useState, useEffect } from 'react'
import DayTrip from './DayTrip';
import './Package.css'
import "react-datepicker/dist/react-datepicker.css";
import ReviewStar from './ReviewStar';
import PackageSlider from './PackageSlider';
import { useParams } from 'react-router-dom';
import AddComment from './AddComment';
import { useAuth } from '../../Components/Auth/auth';
import { Link } from 'react-router-dom'
import BookPackage from './BookPackage';
import axios from 'axios';
const Package = () => {
    const { id } = useParams();
    const totalStars = 5;
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);
    const auth = useAuth();
    const [packageInfo, setPackageInfo] = useState([]);
    const [load, setLoad] = useState(false)
    const [wishlist, setWishlist] = useState([])
    const [isWishlist, setIsWishlist] = useState(false)

    const removeWishList = async () => {
        try {
            const response = await axios.delete(`${auth.baseURL}/api/remove-wishlist/${id}`,
                { withCredentials: true }, {
            })
            console.log(response)
            { response.status === 200 && setIsWishlist(false); document.getElementById('wishlist-btn').classList.remove('added') }
        } catch (err) {
            console.log(err)
        }
    }
    const addWishlist = async () => {
        try {
            const response = await axios.post(`${auth.baseURL}/api/add-wishlist`, { package: id },
                { withCredentials: true }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)
            { response.status === 200 && setIsWishlist(true) }
        } catch (err) {
            console.log(err)
        }
    }

    const checkWishlist = () => {
        {
            wishlist.length > 0 &&
                wishlist.map((wish) => {
                    Number(wish.package) === Number(id) && setIsWishlist(true)
                })
        }
    }

    const loadData = async () => {
        try {
            Promise.all([
                await axios.get(`http://localhost:8000/api/get-package/${id}`),
                await axios.get(`http://localhost:8000/api/get-comments/${id}`),
                await axios.get(`http://localhost:8000/api/get-review/${id}`),
                await axios.get(`${auth.baseURL}/api/get-wishlist`, { withCredentials: true })
            ]
            ).then(response => {
                setPackageInfo(response[0].data.data)
                setComments(response[1].data.data)
                setReviews(response[2].data.data[0])
                setWishlist(response[3].data.data)

            })
            setLoad(true)
        } catch (err) {
            console.log(err)
            setLoad(true)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        checkWishlist();
    }, [wishlist])

    return (
        <div>
            {load &&
                <>
                    <PackageSlider />
                    <div className="package-details-container">
                        <div className="container  d-flex justify-content-between px-md-5 py-5">
                            <div className="">
                                {console.log(wishlist)}
                                <div className="big-heading fs-3 fw-bolder">
                                    {packageInfo[0].package_title}
                                </div>
                                <div className="package-location mt-3 d-flex align-items-center">
                                    <span class="material-symbols-outlined me-2 icons-color">
                                        location_on
                                    </span>
                                    <span className='light-text fs-6'>
                                        {packageInfo[0].location}

                                    </span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="package-price-contanier me-3 d-flex align-items-center">
                                    <span class="material-symbols-outlined me-2 fs-3 icons-color">
                                        payments
                                    </span>
                                    <div className=" ms-1">
                                        <div className="light-text fs-6">From</div>

                                        <div className="fs-6 fw-semibold">${packageInfo[0].starting_price}</div>
                                    </div>
                                </div>
                                <div className="package-duration-contanier me-3 d-flex align-items-center">
                                    <span class="material-symbols-outlined me-2 fs-3 icons-color">
                                        schedule
                                    </span>
                                    <div className=" ms-1">
                                        <div className="light-text fs-6">Duration</div>
                                        <div className="fs-6 fw-semibold">
                                            {packageInfo[0].duration} Days
                                        </div>
                                    </div>
                                </div>
                                <div className="package-type-contanier d-flex align-items-center">
                                    <span class="material-symbols-outlined me-2 fs-3 icons-color">
                                        flight
                                    </span>
                                    <div className=" ms-1">
                                        <div className="light-text fs-6">Tour Type</div>
                                        <div className="fs-6 fw-semibold">{packageInfo[0].category}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="package-action-contianer mb-5">
                        <div className="container d-flex justify-content-between px-md-5 py-3">
                            <div className="d-flex align-content-center">
                                <div className="review-star-container">
                                    <div className="review-container d-flex">
                                        {[...new Array(totalStars)].map((arr, index) => {
                                            return index < (Number(reviews.qualityRating) + Number(reviews.locationRating) + Number(reviews.serviceRating) + Number(reviews.amenitiesRating) + Number(reviews.priceRating)) / 5 ?
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
                                <div className="review-number ms-3 light-text fs-6">
                                    {(Number(reviews.qualityRating) + Number(reviews.locationRating) + Number(reviews.serviceRating) + Number(reviews.amenitiesRating) + Number(reviews.priceRating)) / 5} by {reviews.number} reviews
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="action-button-wrapper d-flex">
                                    <button className='btn secondary-btn me-3'>
                                        <span class="material-symbols-outlined me-2">
                                            google_plus_reshare
                                        </span>
                                        Share
                                    </button>
                                    <button className='btn secondary-btn me-3'>
                                        <span class="material-symbols-outlined me-2">
                                            google_plus_reshare
                                        </span>
                                        Reviews
                                    </button>
                                    {console.log(isWishlist)}
                                    {auth.isLogin ?
                                        <button id='wishlist-btn'
                                            onClick={
                                                isWishlist ? removeWishList :
                                                    addWishlist
                                            } className={isWishlist ? 'btn secondary-btn added' : 'btn secondary-btn not-added'}>
                                            <span class="material-symbols-outlined me-2">
                                                favorite
                                            </span>
                                            Wishlist
                                        </button> :
                                        <Link to='/login' className='btn secondary-btn'>
                                            <span class="material-symbols-outlined me-2">
                                                favorite
                                            </span>
                                            Wishlist
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="package-content-container container px-md-5">
                        <div className="row">
                            <div className="col-8">
                                <div className="big-heading fs-3 fw-bolder">
                                    Overview
                                </div>
                                <p className='mt-3'>
                                    <div className='' dangerouslySetInnerHTML={{ __html: `${packageInfo[0].description}` }}></div>
                                </p>
                                <div className="include-exclude-container mb-4 pb-3">
                                    <div className="big-heading fs-5 mt-5 fw-bolder">
                                        Included/Exclude
                                    </div>
                                    <div className="row row-cols-2">
                                        <div className="col">
                                            <div className="include-container">

                                                <ul className='mt-4 include-list light-text fs-6 list-unstyled'>
                                                    <div className='lsit-unstyled' dangerouslySetInnerHTML={{ __html: `${packageInfo[0].include_list}` }}></div>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="exclude-container">
                                                <ul className='mt-4 exclude-list light-text fs-6 list-unstyled'>
                                                    <div className='lsit-unstyled' dangerouslySetInnerHTML={{ __html: `${packageInfo[0].exclude_list}` }}></div>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-container">
                                    <div className="big-heading fs-3 fw-bolder">
                                        Tour Amenities
                                    </div>
                                    <div className="row row-cols-3 g-3 mt-4">
                                        <div className="col">
                                            <div className="icon-text">
                                                <span class="material-symbols-outlined">
                                                    credit_card
                                                </span>
                                                <span>
                                                    Accepts Credit Cards
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-text">
                                                <span class="material-symbols-outlined">
                                                    garage_home
                                                </span>
                                                <span>
                                                    Car Parking
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-text">
                                                <span class="material-symbols-outlined">
                                                    sell
                                                </span>
                                                <span>
                                                    Free Coupons
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-text">
                                                <span class="material-symbols-outlined">
                                                    restaurant
                                                </span>
                                                <span>
                                                    Resturant
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-text">
                                                <span class="material-symbols-outlined">
                                                    smoking_rooms
                                                </span>
                                                <span>
                                                    Smoking Allowed
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-text">
                                                <span class="material-symbols-outlined">
                                                    wifi
                                                </span>
                                                <span>
                                                    Wifi Available
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour-day-plan-container mt-5">
                                    <div className="big-heading fs-3 fw-bolder">
                                        Tour Plan
                                    </div>
                                    <div className="day-plan-wrapper mt-3">
                                        {
                                            packageInfo.map((t) => (
                                                <DayTrip tripName={`Day ${t.day}`} tripDescription={t.day_description} />

                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="package-review-container mt-5">
                                    <div className="big-heading fs-3 fw-bolder">
                                        Review Scores
                                    </div>

                                    <div className="review-socres-container my-4">
                                        <div className="row h-100">
                                            <div className="col-4 center-item">
                                                <div className="">
                                                    {console.log(reviews.qualityRating)}
                                                    <span className='fs-1 fw-bolder'>{(Number(reviews.qualityRating) + Number(reviews.locationRating) + Number(reviews.serviceRating) + Number(reviews.amenitiesRating) + Number(reviews.priceRating)) / 5}</span><span className='fs-5 light-text'>/5</span>
                                                    <div className="text-primary fs-4">Wonderful</div>
                                                    <div className="light-text fs-6 fw-light">{reviews.number} verified reviews</div>
                                                </div>
                                            </div>
                                            <div className="col-8 side-border p-5">
                                                <div className="w-100">
                                                    <div className="review-graph-wrapper">
                                                        <div className="quality-progress mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="big-heading fs-6 fw-bolder">
                                                                    Quality
                                                                </div>
                                                                <div className="light-text fs-6 fw-normal">
                                                                    {reviews.qualityRating}/5
                                                                </div>
                                                            </div>
                                                            <div class="progress" style={{ height: '10px' }}>
                                                                <div class="progress-bar" role="progressbar" style={{ width: `${reviews.qualityRating / 5 * 100}%` }} ></div>
                                                            </div>
                                                        </div>
                                                        <div className="quality-progress mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="big-heading fs-6 fw-bolder">
                                                                    Location
                                                                </div>
                                                                <div className="light-text fs-6 fw-normal">
                                                                    {reviews.locationRating}/5
                                                                </div>
                                                            </div>
                                                            <div class="progress" style={{ height: '10px' }}>
                                                                <div class="progress-bar" role="progressbar" style={{ width: `${reviews.locationRating / 5 * 100}%` }} aria-valuemin="0" aria-valuemax="5"></div>
                                                            </div>
                                                        </div>
                                                        <div className="quality-progress mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="big-heading fs-6 fw-bolder">
                                                                    Amenities
                                                                </div>
                                                                <div className="light-text fs-6 fw-normal">
                                                                    {reviews.amenitiesRating}/5
                                                                </div>
                                                            </div>
                                                            <div class="progress" style={{ height: '10px' }}>
                                                                <div class="progress-bar" role="progressbar" style={{ width: `${reviews.amenitiesRating / 5 * 100}%` }} aria-valuemin="0" aria-valuemax="5"></div>
                                                            </div>
                                                        </div>
                                                        <div className="quality-progress mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="big-heading fs-6 fw-bolder">
                                                                    Price
                                                                </div>
                                                                <div className="light-text fs-6 fw-normal">
                                                                    {reviews.priceRating}/5
                                                                </div>
                                                            </div>
                                                            <div class="progress" style={{ height: '10px' }}>
                                                                <div class="progress-bar" role="progressbar" style={{ width: `${reviews.priceRating / 5 * 100}%` }} aria-valuemin="0" aria-valuemax="5"></div>
                                                            </div>
                                                        </div>
                                                        <div className="quality-progress">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="big-heading fs-6 fw-bolder">
                                                                    Services
                                                                </div>
                                                                <div className="light-text fs-6 fw-normal">
                                                                    {reviews.serviceRating}/5
                                                                </div>
                                                            </div>
                                                            <div class="progress" style={{ height: '10px' }}>
                                                                <div class="progress-bar" role="progressbar" style={{ width: `${reviews.serviceRating / 5 * 100}%` }} aria-valuemin="0" aria-valuemax="5"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-container mb-5">
                                        <div className="big-heading fs-5 fw-bolder">
                                            {comments.length} thoughts on “Java & Bali One Life Adventures”
                                        </div>
                                        <div className="small-line"></div>
                                        <div className="review-wrapper mt-3">
                                            {comments.map((comment) => (
                                                <div className="review-child">
                                                    <div className="review-post-name fw-bold">{comment.name}</div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="small-line">
                                                        </div>
                                                        <div className="review-post-date light-text fs-6 fw-light mt-2 ms-3">
                                                            {comment.date.slice(0, 10)}
                                                            {console.log(comment.date)}
                                                        </div>
                                                    </div>
                                                    <div className="review-post-stars d-flex flex-wrap mt-3">
                                                        <div className="review-post-star-child me-4">
                                                            <div className="light-text fs-6">Quality</div>
                                                            <ReviewStar totalStars={5} activeStars={comment.qualityRating} />
                                                        </div>
                                                        <div className="review-post-star-child me-4">
                                                            <div className="light-text fs-6">Location</div>
                                                            <ReviewStar totalStars={5} activeStars={comment.locationRating} />
                                                        </div>
                                                        <div className="review-post-star-child me-4">
                                                            <div className="light-text fs-6">Amenities</div>
                                                            <ReviewStar totalStars={5} activeStars={comment.amenitiesRating} />
                                                        </div>
                                                        <div className="review-post-star-child me-4">
                                                            <div className="light-text fs-6">Services</div>
                                                            <ReviewStar totalStars={5} activeStars={comment.serviceRating} />
                                                        </div>
                                                        <div className="review-post-star-child me-4">
                                                            <div className="light-text fs-6">Price</div>
                                                            <ReviewStar totalStars={5} activeStars={comment.priceRating} />
                                                        </div>
                                                    </div>
                                                    <div className="review-post-text light-text fs-6 fw-normal mt-3">{comment.description}</div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>

                                <AddComment id={id} loadData={loadData} />
                            </div>
                            <div className="col-4">
                                <BookPackage id={id} max_guests={packageInfo[0].max_guests} />
                                <div className="tour-summary-box mt-5">
                                    <div className="booking-tour-heading">
                                        <div className="big-heading fs-5 fw-bolder ps-3 mt-2">
                                            Tour Information
                                        </div>
                                        <div className="tour-summary-icons-wrapper mt-3 ps-3">
                                            <div className="max-guests-contanier icon-container mb-3">
                                                <div className="d-flex align-items-center">
                                                    <span class="material-symbols-outlined text-primary fs-2">
                                                        group
                                                    </span>
                                                    <div className="ms-3">
                                                        <div className="light-text fs-6">Max Guests</div>
                                                        <div className="max-guest-number ">{packageInfo[0].max_guests}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="max-child-contanier icon-container mb-3">
                                                <div className="d-flex align-items-center">
                                                    <span class="material-symbols-outlined text-primary fs-2">
                                                        escalator_warning
                                                    </span>
                                                    <div className="ms-3">
                                                        <div className="light-text fs-6">Minimum Age</div>
                                                        <div className="max-guest-number ">{packageInfo[0].min_age}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="max-child-contanier icon-container mb-3">
                                                <div className="d-flex align-items-center">
                                                    <span class="material-symbols-outlined text-primary fs-2">
                                                        flight
                                                    </span>
                                                    <div className="ms-3">
                                                        <div className="light-text fs-6">Location</div>
                                                        <div className="max-guest-number ">{packageInfo[0].location}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="max-child-contanier icon-container">
                                                <div className="d-flex align-items-center">
                                                    <span class="material-symbols-outlined text-primary fs-2">
                                                        translate
                                                    </span>
                                                    <div className="ms-3">
                                                        <div className="light-text fs-6">Languages Support</div>
                                                        <div className="max-guest-number ">{packageInfo[0].language}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}

export default Package