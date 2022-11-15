import React from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
import DashboardHeader from './DashboardHeader'

function DashboardContent() {
    return (
        <div className='py-9 flex justify-between'>
            <div className='title'>
                <h1 className='heading-color'>Hello User</h1>
                <span className='lightgray'>Welcome to DashBoard</span>
            </div>
            {/* <DashboardHeader /> */}
        </div>
    )
}

export default DashboardContent
