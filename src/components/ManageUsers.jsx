import React, { useEffect, useState } from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
import { getAllUsers, deleteDocument } from '../utils/firebase_helper'
import editicon from '../assets/images/edit.png'
import deleteicon from '../assets/images/delete.png'
import EditUser from './EditUser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ManageUsers(props) {
    const customId = "custom-id-yes";
    const [data, setData] = useState([])
    // const [editView,setEditView]=useState(false)
    // const [editData,setEditData]=useState()

    const getUsersList = async () => {
        const users = await getAllUsers()
        console.log("iiidddd:", users)
        setData(users)
        // console.log("iiidddd:",users[0].id)
    }

    const deleteUser = async (id) => {
        const response = await deleteDocument(id)
        console.log(response)
        getUsersList()
    }

    useEffect(() => {
        getUsersList()
    }, [])




    return (
        <>
            <ToastContainer />
            <div>
                <div>
                    <div className='py-9 flex justify-between'>
                        <div className='title'>
                            <h1 className='heading-color'>Manage Users</h1>
                            <span className='lightgray'>Manage and organize your users</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-3 mr-3 rounded-full bg-white'><img src={notification} /></div>
                            <div className='rounded-full'><img src={activeuser} /></div>
                        </div>
                    </div>
                    <div className='allUsers bg-white min-h-screen rounded-2xl px-9'>
                        <h1 className='sub-heading py-9'>User List</h1>
                        <div className='sub-heading border rounded-2xl min-h-screen'>
                            <div className=' flex justify-between p-8'>
                                <h6 className='general'>Name</h6>
                                <h6 className='general'>User Name</h6>
                                <h6 className='general'>Account Number</h6>
                                <h6 className='general'>Balance</h6>
                                <h6 className='general'>Branch</h6>
                                <h6 className='general'>Swift Code</h6>
                                <h6 className='general'>Action</h6>
                            </div>

                            {data.map((user) => (

                                <div className='flex justify-between p-8'>
                                    <h6 className='user-list text-black'>{user?.name}</h6>
                                    <h6 className='user-list lightgray'>{user?.username}</h6>
                                    <h6 className='user-list text-black'>{user?.accountnumber}</h6>
                                    <h6 className='user-list text-black'>{user?.balance}</h6>
                                    <h6 className='user-list text-black'>{user?.branch}</h6>
                                    <h6 className='user-list text-black'>{user?.swiftCode}</h6>
                                    <h6 className='user-list text-black flex'>
                                        <div className='h-5 w-5 pr-1 cursor-pointer' onClick={() => props.setActiveTab('editUser')}><img src={editicon}></img></div>
                                        <div className='h-5 w-5 pl-1 cursor-pointer' onClick={() => deleteUser(user.id)} ><img src={deleteicon}></img></div>
                                    </h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUsers
