import React, { useEffect, useState } from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
import { useForm } from 'react-hook-form'
import { collection } from "firebase/firestore";
import { db, auth } from '../firebaseConfig';
import { getCurrentUser, updateCurrentUser } from "../utils/firebase_helper"
import { getDocs } from 'firebase/firestore';
import DashboardHeader from './DashboardHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from "react-spinners/HashLoader";

function Profile() {
    const [loader, setLoader] = useState(false)
    const customId = "custom-id-yes";
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm()

    const updateUser = (data) => {
        setLoader(true)
        updateCurrentUser({
            fullname: data.fullName,
            email: data.email,
            birthdate: data.birthDate,
            phonenumber: data.phoneNumber,
            province: data.province,
            city: data.city,
            fulladdress: data.fullAddress,
            password: data.password,
        }).then((res)=>{
            
            curretUser().then((response)=>{
                setLoader(false)
                toast.success('Data Updated Successfully', {
                    toastId: customId,
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
        })
    }
    const curretUser = async () => {
        const userData1 = await getCurrentUser()
        const { fullname, email, birthdate, phonenumber, province, city, fulladdress, password } = userData1

        setValue('fullName', fullname)
        setValue('email', email)
        setValue('birthDate', birthdate)
        setValue('phoneNumber', phonenumber)
        setValue('province', province)
        setValue('city', city)
        setValue('fullAddress', fulladdress)
        setValue('password', password)
        setValue('confirmPassword', password)
    }

    useEffect(() => {
        setLoader(true)
        curretUser().then(()=>{
            setLoader(false)
        })
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
                    <ToastContainer />
                    <div>
                        <div className='py-9 flex justify-between'>
                            <div className='title'>
                                <h1 className='heading-color'>Profile</h1>
                                <span className='lightgray'>Profile of Logedin User</span>
                            </div>
                            {/* <DashboardHeader /> */}
                        </div>


                        <div className='bg-white px-9 rounded-2xl'>
                            <form className='form' onSubmit={handleSubmit(updateUser)}>
                                <div className="pt-5">
                                    <span className="gray">Full Name <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="text" name="fullname" id="fullname"  {...register('fullName', { required: true })} placeholder="Full Name" className="w-full" /></div>
                                        {errors.fullName && <span className='error-color'>Enter Your Full Name</span>}
                                    </div>
                                </div>
                                <div>
                                    <span className="gray">Email Address <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><input type="email" name="email" id="email" {...register('email', { required: true })} placeholder="Email Address" className="w-full" /></div>
                                        {errors.email && <span className='error-color'>Enter Your Email</span>}
                                    </div>
                                </div>
                                <div className="full-fields flex justify-between">
                                    <div className='w-full mr-5'>
                                        <span className="gray">Birth Date <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="date" name="birthdate" id="birthdate" {...register('birthDate', { required: true })} placeholder="Birth Date" className="w-full" /></div>
                                            {errors.birthDate && <span className='error-color'>Enter Your Birth Date</span>}
                                        </div>
                                    </div>
                                    <div className='w-full ml-5'>
                                        <span className="gray">Phone Number <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="number" name="phonenumber" id="phonenumber" {...register('phoneNumber', { required: true })} placeholder="Phone Number" className="w-full" /></div>
                                            {errors.phoneNumber && <span className='error-color'>Enter Your Phone Number</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="full-fields flex justify-between">
                                    <div className='w-full mr-5'>
                                        <span className="gray">Province <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="text" name="province" id="province" {...register('province', { required: true })} placeholder="Province" className="w-full" /></div>
                                            {errors.province && <span className='error-color'>Enter Your Province Name</span>}
                                        </div>
                                    </div>
                                    <div className='w-full ml-5'>
                                        <span className="gray">City <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="text" name="city" id="city" {...register('city', { required: true })} placeholder="City" className="w-full" /></div>
                                            {errors.city && <span className='error-color'>Enter Your City Name</span>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="gray">Full Address <span className='text-red-600'>*</span></span>
                                    <div className="my-4">
                                        <div className="input-outline py-5 px-7"><textarea name='fullAddress' id='fullAddress' {...register('fullAddress', { required: true })} placeholder="Full Address" cols="12" rows="2" className="w-full" /></div>
                                        {errors.fullAddress && <span className='error-color'>Enter Your Full Address</span>}
                                    </div>
                                </div>
                                <div className="full-fields flex justify-between">
                                    <div className='w-full mr-5'>
                                        <span className="gray">Password <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="password" name="password" id="password" {...register('password', { required: true })} placeholder="Password" className="w-full" /></div>
                                            {errors.password && <span className='error-color'>Enter Your Password</span>}
                                        </div>
                                    </div>
                                    <div className='w-full ml-5'>
                                        <span className="gray">Confirm Password <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="password" name="confirmPassword" id="confirmPassword" {...register('confirmPassword', {
                                                required: true, validate: (val) => {
                                                    if (watch('password') != val) {
                                                        return "Your passwords do no match";
                                                    }
                                                }
                                            })} placeholder="Confirm Password" className="w-full" /></div>
                                            {errors.confirmPassword && <span className='error-color'>Enter Correct Password</span>}
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' className="text-white w-full py-5 my-4">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile
