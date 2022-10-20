import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../Components/Auth/auth'
import BookingTable from './BookingTable'
import './Table.css'
const Dashboard = () => {
    const auth = useAuth()
    const [userInfo, setUserInfo] = useState([])
    const [bookingInfo, setBookingInfo] = useState([])
    const [load, setLoad] = useState(false)
    const loadData = async () => {
        try {
            Promise.all([
                await axios.get(`${auth.baseURL}/api/get-info`, { withCredentials: true }),
                await axios.get(`${auth.baseURL}/api/get-booking-info`, { withCredentials: true })
            ]).then((response) => {
                response[0].status === 200 && setUserInfo(response[0].data.data[0])
                console.log(response[1])
                response[1].status === 200 && setBookingInfo(response[1].data.data)
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
            {load &&
                <div className='text-grey'>
                    <div className="fs-3 pt-md-5 fw-bold ps-2 text-black">Dashboard</div>
                    {console.log(userInfo)}
                    <div className="edit-pass-container mt-3 d-flex align-items-center">
                        <span class="material-symbols-outlined fs-1">
                            account_circle
                        </span>
                        <div className="personal-info ms-3 d-flex flex-column">
                            <span className='mb-1'>
                                username:
                                <span className='fw-bold ms-3'>
                                    {userInfo.username}
                                </span>
                            </span>
                            <span className='mb-1'>
                                Name:
                                <span className='fw-bold ms-3'>
                                    {userInfo.first_name + ' ' + userInfo.last_name}
                                </span>
                            </span> <span className='mb-1'>
                                Email:
                                <span className='fw-bold ms-3'>
                                    {userInfo.email}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="fs-3 pt-md-5 fw-bold ps-2 text-black">My Booking</div>
                    <BookingTable bookingInfo={bookingInfo} />

                </div>
            }
        </div >
    )
}

export default Dashboard