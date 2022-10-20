import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import SetReviewStar from './SetReviewStar';
import axios from 'axios';
const AddComment = (props) => {
    const [quality, setQuality] = useState(5)
    const [location, setLocation] = useState(5)
    const [am, setAm] = useState(5)
    const [service, setService] = useState(5)
    const [price, setPrice] = useState(5)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        let today = new Date().toISOString().slice(0, 10)
        try {
            const response = await axios.post('http://localhost:8000/api/add-comment', { name: data.fName, email: data.email, description: data.comment, quality: quality, location: location, amenities: am, services: service, price: price, package: props.id, date: today }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            props.loadData();
            console.log(response)
        } catch (err) {
            console.log(err)
        }
        console.log(data)

    }
    return (
        <div className="post-package-review mb-5">
            <div className="big-heading fs-4 fw-bolder">
                Add a Comment
            </div>
            <div className="small-line">
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='comment-form mt-3' action="">
                <div className="light-text fs-6 mb-3 fw-normal">*Your email address will not be published</div>
                <div className="d-flex justify-content-between star-rating-form mb-3">
                    <div className="d-flex flex-wrap">
                        <div className="star-rating-form-child">
                            <div className="light-text fs-6 ">Quality</div>
                            <SetReviewStar rated={setQuality} />
                        </div>
                        <div className="star-rating-form-child">
                            <div className="light-text fs-6 ">Location</div>
                            <SetReviewStar rated={setLocation} />
                        </div>
                        <div className="star-rating-form-child">
                            <div className="light-text fs-6 ">Amenities</div>
                            <SetReviewStar rated={setAm} />
                        </div>
                        <div className="star-rating-form-child">
                            <div className="light-text fs-6 ">Services</div>
                            <SetReviewStar rated={setService} />

                        </div>
                        <div className="star-rating-form-child">
                            <div className="light-text fs-6 ">Price</div>
                            <SetReviewStar rated={setPrice} />

                        </div>
                    </div>
                    <div className="total-score-rating">
                        <div className="">
                            <div className="golden fs-1 text-center">{(quality + price + am + location + service) / 5}</div>
                            <span className='light-text fs-6 fw-normal text-center'>Average Rating</span>
                        </div>
                    </div>

                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <div class="mb-3">
                            <input type="text"
                                {...register('fName', {
                                    required: true
                                })}
                                class="form-control" id='fName' placeholder="Your Name*" />
                            {errors?.fName?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}

                        </div>
                    </div>
                    <div className="col">
                        <div class="mb-3">
                            <input type="email"
                                {
                                ...register('email', {
                                    required: true,
                                    pattern: /^\S+@\S+$/i

                                })
                                } class="form-control" placeholder="Email*" />
                            {errors?.email?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                            {errors?.email?.type === "pattern" && <p className='mt-1 text-danger'>Please enter a valid email</p>}

                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" {
                        ...register('comment', {
                            required: true
                        })
                    } placeholder='Write Your Comment' rows="3"></textarea>
                    {errors?.comment?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}

                </div>
                <input className='primary-btn btn' type="submit" value={'POST COMMENT'} />
            </form>
        </div>
    )
}

export default AddComment