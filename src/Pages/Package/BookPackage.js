import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import { useAuth } from '../../Components/Auth/auth';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


const BookPackage = (props) => {
    const [startdate, setStartDate] = useState(new Date());
    const [guests, setGuests] = useState('');
    const [showName, setShowName] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = useAuth();
    const [disabledbtn, setDisableBtn] = useState(true);

    useEffect(() => {
        { guests > 0 ? setDisableBtn(false) : setDisableBtn(true) }
    }, [guests])
    const handleBook = async (data) => {
        try {
            const response = await axios.post(`${auth.baseURL}/api/book-package`, { package_id: props.id, booking_date: startdate.toISOString().slice(0, 19).replace('T', ' '), guests, contact_name: data.booking_contact, contact_email: data.booking_contact_email }, {
                withCredentials: true
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="booking-tour-container">
            <div className="booking-tour-heading">
                <div className="big-heading fs-5 fw-bolder ps-3 mt-3">
                    Booking Tour
                </div>
            </div>
            <div className="booking-date-picker d-flex light-border-top mt-3 justify-content-between align-items-center">
                <div className="big-heading fs-6 fw-bolder ps-3">
                    From:
                </div>
                <div className="date-picker-wrapper">
                    <DatePicker selected={startdate} onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        showDisabledMonthNavigation
                    />
                </div>
            </div>
            <div className="booking-tickets-picker d-flex justify-content-between light-border-top mt-3">
                <div className="big-heading fs-6 fw-bolder ps-3">
                    Guests:
                </div>
                <div className="number-of-guest fs-6 text-end fw-bolder ps-3">
                    <input className='text-end' {
                        ...register('guests_number', {
                            required: true,
                            min: 1,
                            max: props.max_guests
                        })
                    } defaultValue={guests} onChange={(e) => { setGuests(e.target.value); setShowName(true) }} type="number" min={1} max={100} />
                    {errors?.guests_number?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                    {errors?.guests_number?.type === "min" && <p className='mt-1 text-danger'>Atleast 1 guests required</p>}
                    {errors?.guests_number?.type === "max" && <p className='mt-1 text-danger'>Too many guests</p>}

                </div>
            </div>
            <div className={showName ? "collect-contact-container light-border-top mt-3" : 'd-none'} >
                <div className="big-heading fs-5 fw-bolder ps-3">
                    Personal Details:
                </div>
                <div className="booking-contact-name-container mt-3 px-3">
                    <input
                        {
                        ...register('booking_contact', {
                            required: true,
                        })}
                        className={errors?.booking_contact_email ? 'form-control w-100 border-danger' : 'form-control w-100'} type="text" placeholder='Contact Name' />
                    <small className='mt-5 text-secondary'>Please enter details of one person in the trip</small>
                    {errors?.booking_contact?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}

                </div>
                <div className="booking-contact-email-container mt-3 px-3">
                    <input
                        {
                        ...register('booking_contact_email', {
                            required: true,
                        })}
                        className={errors?.booking_contact_email ? 'form-control w-100 border-danger' : 'form-control w-100'} type="email" placeholder='Contact Email' />
                    <small className='mt-5 text-secondary'>Note we will use this email for further communication</small>
                    {errors?.booking_contact_email?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                </div>

            </div>
            {
                auth.isLogin ?
                    <div className="d-flex mt-3">
                        <button disabled={disabledbtn} onClick={handleSubmit(handleBook)} className='btn w-100 primary-btn d-flex align-items-center justify-content-center'>
                            <span class="material-symbols-outlined me-3">
                                shopping_cart
                            </span>
                            Book Now</button>
                    </div> :
                    <>
                        <div className="d-flex mt-3">
                            <Link to='/login' className='btn w-100 primary-btn d-flex align-items-center justify-content-center'>
                                Login to continue</Link>
                        </div>
                    </>
            }

        </div>
    )
}

export default BookPackage