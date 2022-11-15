import members from '../assets/images/members.png'
import leftArrow from '../assets/images/left-arrow.png'
import rightArrow from '../assets/images/right-arrow.png'
import map from '../assets/images/map.png'
import logo from '../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage, db, auth } from '../firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable, getMetadata } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore/lite'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";
import { useState } from 'react'
export default function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const customId = "custom-id-yes";
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const registration = (data) => {
        data.preventDefault;
        setLoader(true)
        const storageRef = ref(storage, `files/${data.profileImage[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, data.profileImage[0]);
        uploadTask.on('state_changed',
            (snapShot) => {
                console.log('snapshot', snapShot)
            }, (err) => {
                console.log('error', err)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(fireBaseUrl => {

                        const userAuthenticaion = createUserWithEmailAndPassword(
                            auth,
                            data.email,
                            data.password
                        ).then(async res => {
                            const userUUID = res.user.uid.toString()
                            console.log("UUID:", userUUID)
                            const newUser = await setDoc(doc(db, "user-registration", userUUID), {
                                fullname: data.fullName,
                                email: data.email,
                                birthdate: data.birthDate,
                                phonenumber: data.phoneNumber,
                                province: data.province,
                                city: data.city,
                                fulladdress: data.fullAddress,
                                profileimage: fireBaseUrl,
                                password: data.password,
                            }).then(() => {
                                setLoader(false)
                                navigate('/')
                            })
                        })
                            .catch((err) => {
                                console.log(err)
                                toast.error('Something went Wrong!', {
                                    toastId: customId,
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                })
                            })
                    })
            })

    }
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
                    <div className="form-bg w-full flex justify-between">
                        <div className="form bg-white w-3/5 pt-16 pb-11">
                            <div className="container mx-auto px-28">
                                <h1 className="heading-color">Get started</h1>
                                <form action="" onSubmit={handleSubmit(registration)}>
                                    <div className="pt-5">
                                        <span className="gray">Full Name <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="text" name="fullname" id="fullname" {...register('fullName', { required: true })} placeholder="Full Name" className="w-full" /></div>
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
                                    <div>
                                        <span className="gray">Profile Picture <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="file" name="profileImage" id="profileImage" {...register('profileImage', { required: true })} placeholder="profileImage" className="w-full" /></div>
                                            {errors.profileImage && <span className='error-color'>Select Your Profile Image</span>}
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
                                    <button type='submit' className="text-white w-full py-5 my-4">Sign Up</button>
                                </form>
                                <p className='text-center lightgray signup pt-2'>You already Have an Account? <Link to="/" className='yellow cursor-pointer'>Log In</Link></p>
                            </div>
                        </div>
                        <div className="side-design relative pt-16 w-2/5">
                            <div className="container mx-auto pl-16">
                                <h1 className="text-white"><span className="yellow">Our Members</span> are Arround the World</h1>
                                <p className="pt-5 text-white">Over 10,000 Investor join us monthly</p>
                                <div className='pt-5 flex items-center underline decoration-white'><img src={members} /><span className='pl-3 text-white'>dan lainnya</span></div>
                                <div className='flex pt-20'>
                                    <img src={leftArrow} />
                                    <img src={rightArrow} className="pl-4" />
                                </div>
                                <div className="pt-24"><img src={map} className="w-full" /></div>
                                <div className='logo absolute bottom-16 right-11 pt-24 flex justify-end items-end w-full'><img src={logo} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}