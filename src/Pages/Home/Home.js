import React, { useState } from 'react'
import './Home.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import landing from '../../image/Home/landing.jpg'
import scene from '../../image/Home/image-12.jpeg'
import SearchSlider from '../../Components/Slider/SearchSlider'
import Select from '../../Components/Select/Select'
import Activity from '../../Components/Activity/Activity'
import SelectDate from '../../Components/SelectDate/SelectDate'
import SelectPeople from '../../Components/SelectPeople/SelectPeople'
import Package from '../../Components/Package/Package'
import Destination from '../../Components/Destination/Destination'
import Offer from '../../Components/Offer/Offer'
import ParallexHome from '../../Components/ParallexHome/ParallexHome'
import axios from 'axios'

const Home = () => {
    const [locationSearch, setLocationSearch] = useState('');
    console.log(locationSearch)
    const [activitySearch, setActivitySearch] = useState('');
    const [mindurationSearch, setMinDurationSearch] = useState('');
    const [maxdurationSearch, setMaxDurationSearch] = useState('');
    const [guestSearch, setGuestsSearch] = useState('');
    const navigation = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/searchpackage', { location: locationSearch, activity: activitySearch, min_duration: mindurationSearch, max_duration: maxdurationSearch, guests: guestSearch })
            console.log(response.data.data)
            navigation('/searchResult', { state: { result: response.data.data } })

        } catch (err) {
            console.log(err)
        }
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <div>
                <div className="landing-container">
                    {/* <img className='img-fluid' src={landing} alt="" /> */}
                    <div className="h-100">
                        <div className="landing-text-container h-100">
                            <div className="my-auto">
                                <p className="fancy-font text-center mb-0">
                                    Lets Explore
                                </p>
                                <p className='hook-text mt-0 mb-0 text-center'>Where would you like to go?</p>
                                <p className="light-text text-center mt-2">Checkout beautiful places around the world</p>
                            </div>
                            <div className="landing-search-container p-lg-0 p-2 d-flex flex-wrap justify-content-center rounded m-md-0 m-3 w-100 mt-3">
                                <div className="row rounded w-100">
                                    <div className="col-md-5">
                                        <div className="row row-cols-lg-2 row-cols-1">
                                            <div className="col">
                                                <Select setLocationSearch={setLocationSearch} />

                                            </div>
                                            <div className="col">
                                                <Activity setActivitySearch={setActivitySearch} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row row-cols-lg-2 row-cols-1">
                                            <div className="col">
                                                <SelectDate setMinDurationSearch={setMinDurationSearch} setMaxDurationSearch={setMaxDurationSearch} />
                                            </div>
                                            <div className="col">
                                                <SelectPeople setGuestsSearch={setGuestsSearch} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center pe-0">
                                        <button onClick={handleSearch} className='btn w-100 my-auto search-btn d-flex justify-content-center align-items-center'>
                                            <span class="material-symbols-outlined me-2">
                                                search
                                            </span>
                                            Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-way-to-search container px-md-5 mb-5 ">
                    <SearchSlider />
                </div>
                <div className="why-us-container container px-md-5 mb-5">
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col order-lg-0 order-1">
                            <div className="fancy-font fs-2">
                                Why Choose Us?
                            </div>
                            <div className="big-heading">
                                Plan Your Trip with Elscript
                            </div>
                            <div className="light-text-bottom pt-4">
                                <p>
                                    There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.
                                </p>
                            </div>
                            <div className="list-container pt-4 lh-lg">
                                <ul className='check-list'>
                                    <li>
                                        <span>
                                            Invest in your simply neighborhood
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Support people in free text extreme need
                                        </span>
                                    </li>
                                    <li>
                                        <span> Largest global industrial business community</span> </li>
                                </ul>
                            </div>
                            <div className=" pt-4">
                                <button className='primary-btn btn'>
                                    Book with us now
                                </button>
                            </div>
                        </div>
                        <div className="col order-lg-1 order-0 mb-lg-0 mb-4 text-center position-relative">
                            <div className="grey-circle"></div>
                            <img className='img-fluid circle-img' src={scene} alt="" />
                            <div className="red-circle"></div>
                        </div>
                    </div>
                </div>
                <div className="featured-tours-container container-fluid mb-5 pt-4">
                    <div className="text-center fancy-font fs-1">
                        Featured Tours
                    </div>
                    <div className="big-heading text-center">Most Popular Tours</div>
                    <div className="feature-card-wrapper d-flex mt-4">
                        <Package />
                    </div>
                </div>
                <div className="top-destination-list container px-md-5 pb-5 mb-5">
                    <Destination />
                </div>
                <div className="our-offer pt-5 mb-5 pb-5">
                    <Offer />
                </div>
                <div className="parallex-home">
                    <ParallexHome />
                </div>
            </div>
        </>
    )
}

export default Home