import React, { useEffect,useState } from 'react'
import notification from '../assets/images/Notification.png'
import activeuser from '../assets/images/active-user.png'
import { useForm } from 'react-hook-form'
import { collection } from "firebase/firestore";
import { db,auth } from '../firebaseConfig';
import {getCurrentUser} from "../utils/firebase_helper"
// import { applyActionCode, getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDocs } from 'firebase/firestore';


function Profile() {
    const [fieldData, setFieldData] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const userMail=localStorage.getItem('login')

const abc = async()=>{
    // const collec = collection(db,"user-registration");
    // const userData = await getDocs(collec)
    // const cityList = userData.docs.map(doc => doc.data());
    // console.log('userdata',cityList[1].city)
}


const curretUser = async ()=>{
    const userData1 = await getCurrentUser()
    const {fullname,email,birthdate,phonenumber,province,city,fulladdress,profileimage,password} = userData1
    setFieldData({
        fullname:fullname,
        email:email,
        birthdate:birthdate,
        phonenumber:phonenumber,
        province:province,
        city:city,
        fulladdress:fulladdress,
        profileimage:profileimage,
        password:password
    })
}

useEffect(()=>{
    curretUser();
}, [])


    return (
        <div>
            <div className='py-9 flex justify-between'>
                <div className='title'>
                    <h1 className='heading-color'>Profile</h1>
                    <span className='lightgray'>Profile of Logedin User</span>
                </div>
                <div className='flex items-center'>
                    <div className='p-3 mr-3 rounded-full bg-white'><img src={notification} /></div>
                    <div className='rounded-full'><img src={activeuser} /></div>
                </div>
            </div>


            <div className='bg-white px-9 rounded-2xl'>
            <form className='form' onSubmit={handleSubmit()}>
                        <div className="pt-5">
                            <span className="gray">Full Name <span className='text-red-600'>*</span></span>
                            <div className="my-4">
                            <div className="input-outline py-5 px-7"><input type="text" name="fullname" id="fullname" value={fieldData.fullname} {...register('fullName',{required:true})} placeholder="Full Name" className="w-full" /></div>
                            {errors.fullName && <span className='error-color'>Enter Your Full Name</span>}
                            </div>
                        </div>
                        <div>
                            <span className="gray">Email Address <span className='text-red-600'>*</span></span>
                            <div className="my-4">
                            <div className="input-outline py-5 px-7"><input type="email" name="email" id="email" value={fieldData.email} {...register('email',{required:true})} placeholder="Email Address" className="w-full" /></div>
                            {errors.email && <span className='error-color'>Enter Your Email</span>}
                            </div>
                        </div>
                        <div className="full-fields flex justify-between">
                            <div className='w-full mr-5'>
                                <span className="gray">Birth Date <span className='text-red-600'>*</span></span>
                                <div className="my-4">
                                <div className="input-outline py-5 px-7"><input type="date" name="birthdate" id="birthdate" value={fieldData.birthdate} {...register('birthDate',{required:true})} placeholder="Birth Date" className="w-full" /></div>
                                {errors.birthDate && <span className='error-color'>Enter Your Birth Date</span>}
                                </div>
                            </div>
                            <div className='w-full ml-5'>
                                <span className="gray">Phone Number <span className='text-red-600'>*</span></span>
                                <div className="my-4">
                                <div className="input-outline py-5 px-7"><input type="number" name="phonenumber" id="phonenumber" value={fieldData.phonenumber} {...register('phoneNumber',{required:true})} placeholder="Phone Number" className="w-full"  /></div>
                                {errors.phoneNumber && <span className='error-color'>Enter Your Phone Number</span>}
                                </div>
                            </div>
                        </div>
                        <div className="full-fields flex justify-between">
                            <div className='w-full mr-5'>
                                <span className="gray">Province <span className='text-red-600'>*</span></span>
                                <div className="my-4">
                                <div className="input-outline py-5 px-7"><input type="text" name="province" id="province" value={fieldData.province} {...register('province',{required:true})} placeholder="Province" className="w-full"  /></div>
                                {errors.province && <span className='error-color'>Enter Your Province Name</span>}
                                </div>
                            </div>
                            <div className='w-full ml-5'>
                                <span className="gray">City <span className='text-red-600'>*</span></span>
                                <div className="my-4">
                                <div className="input-outline py-5 px-7"><input type="text" name="city" id="city" value={fieldData.city} {...register('city',{required:true})} placeholder="City" className="w-full"  /></div>
                                {errors.city && <span className='error-color'>Enter Your City Name</span>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="gray">Full Address <span className='text-red-600'>*</span></span>
                            <div className="my-4">
                            <div className="input-outline py-5 px-7"><textarea name='fullAddress' id='fullAddress' value={fieldData.fulladdress} {...register('fullAddress',{required:true})} placeholder="Full Address" cols="12" rows="2" className="w-full"  /></div>
                            {errors.fullAddress && <span className='error-color'>Enter Your Full Address</span>}
                            </div>
                        </div>
                        <div>
                            <span className="gray">Profile Picture <span className='text-red-600'>*</span></span>
                            <div className="my-4">
                            <div className="input-outline py-5 px-7"><input type="file" name="profileImage" id="profileImage"  {...register('profileImage',{required:true})} placeholder="profileImage" className="w-full"  /></div>
                            {errors.profileImage && <span className='error-color'>Select Your Profile Image</span>}
                            </div>
                        </div>
                        <div className="full-fields flex justify-between">
                            <div className='w-full mr-5'>
                                <span className="gray">Password <span className='text-red-600'>*</span></span>
                                <div className="my-4">
                                <div className="input-outline py-5 px-7"><input type="password" name="password" id="password" value={fieldData.password} {...register('password',{required:true})} placeholder="Password" className="w-full"  /></div>
                                {errors.password && <span className='error-color'>Enter Your Password</span>}
                                </div>
                            </div>
                            <div className='w-full ml-5'>
                                <span className="gray">Confirm Password <span className='text-red-600'>*</span></span>
                                <div className="my-4">
                                <div className="input-outline py-5 px-7"><input type="password" name="confirmPassword" id="confirmPassword" value={fieldData.password} {...register('confirmPassword',{required:true,validate:(val)=>{
                                    if(watch('password')!=val){
                                        return "Your passwords do no match";
                                    }
                                }})} placeholder="Confirm Password" className="w-full" /></div>
                                {errors.confirmPassword && <span className='error-color'>Enter Correct Password</span>}
                                </div>
                            </div>
                        </div>
                        <button type='submit' className="text-white w-full py-5 my-4">Update Profile</button>
                    </form>
            </div>
        </div>
    )
}

export default Profile
