import React, { useState, useEffect } from 'react'
import BookingTable from '../Dashboard/BookingTable'
import { useAuth } from '../../../Components/Auth/auth'
import axios from 'axios'


const Booking = () => {
    const auth = useAuth()
    const [bookingInfo, setBookingInfo] = useState([])
    const [load, setLoad] = useState(false)
    const loadData = async () => {
        try {
            Promise.all([
                await axios.get(`${auth.baseURL}/api/get-booking-info`, { withCredentials: true })
            ]).then((response) => {
                response[0].status === 200 && setBookingInfo(response[0].data.data)
                setLoad(true)
            })
        } catch (err) {
            console.log(err)
            setLoad(true)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            {
                load &&
                <div className='text-grey'>
                    <div className="fs-3 pt-md-5 fw-bold ps-2 text-black">My Booking</div>
                    <BookingTable bookingInfo={bookingInfo} />

                </div>
            }
        </div>
    )
}

export default Booking