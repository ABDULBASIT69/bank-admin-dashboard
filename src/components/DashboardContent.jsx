import React from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
function DashboardContent() {
    return (
        <div className='py-9 flex justify-between'>
            <div className='title'>
                <h1 className='heading-color'>Hello User</h1>
                <span className='lightgray'>Welcome to DashBoard</span>
            </div>
            <div className='flex items-center'>
                <div className='p-3 mr-3 rounded-full bg-white'><img src={notification} /></div>
                <div className='rounded-full'><img src={activeuser} /></div>
            </div>
        </div>
    )
}

export default DashboardContent
