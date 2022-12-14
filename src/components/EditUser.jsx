import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
import { getSingleUser, updateSingleUser } from '../utils/firebase_helper'
import DashboardHeader from './DashboardHeader'
import HashLoader from "react-spinners/HashLoader";
function EditUser(props) {

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()
    const [fieldData, setFieldData] = useState({
        name: "",
        username: "",
        swiftCode: "",
        branch: "",
        balance: "",
        accountnumber: ""

    });
    const [loader, setLoader] = useState(false)
    const getUSerData = async () => {
        const userData = await getSingleUser()
        const { name, username, accountnumber, balance, branch, swiftCode } = userData
        setValue('name', name)
        setValue('userName', username)
        setValue('accountNumber', accountnumber)
        setValue('balance', balance)
        setValue('branch', branch)
        setValue('swiftCode', swiftCode)
    }
    const updateUser = async (data) => {
        setLoader(true)
        await updateSingleUser({
            name: data.name,
            username: data.userName,
            accountnumber: data.accountNumber,
            balance: data.balance,
            branch: data.branch,
            swiftCode: data.swiftCode
        }).then(() => {
            setLoader(false)
            props.setActiveTab('ManageUsers')
        })
    }

    useEffect(() => {
        setLoader(true)
        getUSerData().then(() => {
            setLoader(false)
        });
    }, [])
    return (
        <>
            {loader ?
                <div className='flex justify-center items-center h-screen'>
                    <HashLoader
                        color={'#034B5E'}
                        size={50}
                    />
                </div>
                :
                <div>
                    <div>
                        <div className='py-9 flex justify-between'>
                            <div className='title'>
                                <h1 className='heading-color'>Update User</h1>
                                <span className='lightgray'>Update user Information</span>
                            </div>
                            {/* <DashboardHeader /> */}
                        </div>

                        <div className='bg-white px-9 rounded-2xl'>
                            <form onSubmit={handleSubmit(updateUser)} className="form">
                                <div className="pt-5">
                                    <span className="gray">Name <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="text" name="name" id="name" {...register('name', { required: true })} placeholder="Name" className="w-full" /></div>
                                        {errors.name && <span className='error-color'>Enter User's Name</span>}
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <span className="gray">User Name <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="text" name="userName" id="userName" {...register('userName', { required: true })} placeholder="User Name" className="w-full" /></div>
                                        {errors.userName && <span className='error-color'>Enter User's UserName</span>}
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <span className="gray">Account Number <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="number" name="accountNumber" id="accountNumber" {...register('accountNumber', { required: true })} placeholder="Account Number" className="w-full" /></div>
                                        {errors.accountNumber && <span className='error-color'>Enter User's Account Number</span>}
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <span className="gray">Balance <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="number" name="balance" id="balance" {...register('balance', { required: true })} placeholder="Balance" className="w-full" /></div>
                                        {errors.balance && <span className='error-color'>Enter User's Balance</span>}
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <span className="gray">Branch <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="text" name="branch" id="branch" {...register('branch', { required: true })} placeholder="Branch" className="w-full" /></div>
                                        {errors.branch && <span className='error-color'>Enter User's Branch Name</span>}
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <span className="gray">Swift Code <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="text" name="swiftCode" id="swiftCode" {...register('swiftCode', { required: true })} placeholder="Swift Code" className="w-full" /></div>
                                        {errors.swiftCode && <span className='error-color'>Enter User's Swift Code</span>}
                                    </div>
                                </div>
                                <button type='submit' className="text-white w-full py-5 my-4">Update User</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default EditUser
