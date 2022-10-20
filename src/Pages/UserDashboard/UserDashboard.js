import React from 'react'
import DashboardNav from './DashboardNav/DashboardNav'
import { Outlet } from 'react-router-dom'
import './UserDashboard.css'
const UserDashboard = () => {
    return (
        <div className='dashboard-container d-flex text-grey'>
            <DashboardNav />
            <div className="dashboard-content p-4 w-100">
                <Outlet />
            </div>
        </div>
    )
}

export default UserDashboard