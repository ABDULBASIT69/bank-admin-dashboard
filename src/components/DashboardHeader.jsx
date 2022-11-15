import React from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
function DashboardHeader() {
    return (
        <div className='flex items-center'>
            <div className='p-3 mr-3 rounded-full bg-white'><img src={notification} /></div>
            <div className='rounded-full'><img src={activeuser} /></div>
        </div>
    )
}

export default DashboardHeader
