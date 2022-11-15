import React, { useEffect, useState } from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
import { getAllUsers, deleteDocument } from '../utils/firebase_helper'
import editicon from '../assets/images/edit.png'
import deleteicon from '../assets/images/delete.png'
import EditUser from './EditUser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component'
import DashboardHeader from './DashboardHeader'
function ManageUsers(props) {
    const customId = "custom-id-yes";
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const getUsersList = async () => {
        const users = await getAllUsers()
        console.log("iiidddd:", users)
        setData(users)
        setFilteredData(users)
    }

    const deleteUser = async (id) => {
        const response = await deleteDocument(id)
        console.log(response)
        getUsersList()
    }
    const EditUser = (userid) => {
        props.setActiveTab('editUser')
        localStorage.setItem('userid', userid)
    }

    useEffect(() => {
        getUsersList()
    }, [])

    // react-data-table-component columns

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: 'User Name',
            selector: (row) => row.username,
        },
        {
            name: 'Account Number',
            selector: (row) => row.accountnumber,
        },
        {
            name: 'Balance',
            selector: (row) => row.balance,
        },
        {
            name: 'Branch',
            selector: (row) => row.branch,
        },
        {
            name: 'Swift Code',
            selector: (row) => row.swiftCode,
        },
        {
            name: 'Action',
            cell: (row) => <div className='flex'><div className='h-5 w-5 pr-1 cursor-pointer' onClick={() => EditUser(row.id)}><img src={editicon}></img></div><div className='h-5 w-5 pl-1 cursor-pointer' onClick={() => deleteUser(row.id)} ><img src={deleteicon}></img></div></div>,
        }
    ]

    //react-data-table-component filtered data

    useEffect(() => {
        const result = data.filter(filterData => {
            return filterData.name.toLowerCase().match(search.toLowerCase())
        })
        setFilteredData(result)
    }, [search])

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
                        {/* <DashboardHeader /> */}
                    </div>
                    <div className='allUsers bg-white min-h-screen rounded-2xl px-9'>
                        <h1 className='sub-heading py-9'>User List</h1>
                        <DataTable
                            columns={columns}
                            data={filteredData}
                            pagination
                            fixedHeader
                            highlightOnHover
                            subHeader
                            subHeaderComponent={
                                <input
                                    type='text'
                                    placeholder='Search Here'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ManageUsers
