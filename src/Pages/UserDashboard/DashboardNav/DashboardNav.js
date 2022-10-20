import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardNav.css'
const DashboardNav = () => {
    return (
        <div className="portal-navbar pt-5">
            <div className="navbar-container w-100">
                <Link to='/user/dashboard' className="navbar-item d-flex align-items-center">
                    <span class="material-symbols-outlined mx-3">
                        home
                    </span>
                    Dashboard
                </Link>
                <div className="navbar-heading fw-semibold text-uppercase my-4 mx-3 fw-normal fs-6 text-black">
                    My Profile
                </div>
                <Link to='/user/edit-password' className="navbar-item d-flex my-3 align-items-center">
                    <span class="material-symbols-outlined mx-3">
                        lock_reset
                    </span>
                    Change Password
                </Link>
                <div className="navbar-heading fw-semibold text-uppercase my-3 mx-3 fw-normal fs-6 text-black">
                    Activity
                </div>
                <Link to='/user/booking' className="navbar-item d-flex my-4 align-items-center">
                    <span class="material-symbols-outlined mx-3">
                        calendar_month
                    </span>
                    My Booking
                </Link>
            </div>
        </div>
    )
}

export default DashboardNav