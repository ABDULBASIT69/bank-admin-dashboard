import leftArrow from '../assets/images/left-arrow.png'
import rightArrow from '../assets/images/right-arrow.png'
import android from '../assets/images/android.png'
import ios from '../assets/images/IOS.png'
import mobiles from '../assets/images/mobiles.png'
import eye from '../assets/images/eye.png'
import logo from '../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
export default function Login() {
    const navigate = useNavigate()
    const [passwordShown, setPasswordShown] = useState(false);
    const [loader, setLoader] = useState(false)
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const customId = "custom-id-yes";
    function login(data) {
        data.preventDefault;
        setLoader(true)
        localStorage.setItem("login", data)
        
        signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
            .then((response) => {
                if (response) {
                    localStorage.setItem('login', data.email)
                    setLoader(false)
                    navigate('/dashboard')
                }
            })
            .catch(err => {
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
                        <div className="login-form form bg-white w-3/5 pt-40">
                            <div className="container mx-auto px-28">
                                <h1 className="heading-color">Hi, Welcome Back Fellas!</h1>
                                <form action="" onSubmit={handleSubmit(login)}>
                                    <div className="pt-14">
                                        <span className="gray">Email <span className='text-red-600'>*</span></span>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7"><input type="email" name="email" id="email" {...register('email', { required: true })} placeholder="Email Address" className="w-full" /></div>
                                            {errors.email && <span className='error-color'>Enter Your Email</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex justify-between'>
                                            <div><span className="gray">Password <span className='text-red-600'>*</span></span></div>
                                            <Link to="/forgetpassword" className='yellow cursor-pointer'>Forgot Password?</Link>
                                        </div>
                                        <div className="my-4">
                                            <div className="input-outline py-5 px-7 flex"><input type={passwordShown ? "text" : "password"} name="password" id="password" {...register('password', { required: true })} placeholder="Password" className="w-full" /><img src={eye} onClick={togglePassword} className="cursor-pointer" /></div>
                                            {errors.password && <span className='error-color'>Enter Your Password</span>}
                                        </div>
                                    </div>
                                    <button type='submit' className="text-white w-full py-5 my-4">Sign In</button>
                                </form>
                                <div className='divider gray py-5'><span className='bg-white px-7'>Or sign in with</span></div>
                                <div className="input-outline py-5 px-7 my-4 flex justify-center darkgray another-method">Another Method</div>
                                <p className='text-center lightgray signup pt-2'>You dont Have an Account? <Link to="/signup" className='yellow cursor-pointer'>Sign Up</Link></p>
                            </div>
                        </div>
                        <div className="side-design relative pt-16 w-2/5">
                            <div className="container mx-auto pl-16">
                                <h1 className="text-white">Getting Easier Pay for Any Transfer <span className='yellow'>with IbankCare</span></h1>
                                <p className="pt-5 text-white">Install Ibankcare application right now!</p>
                                <div className='pt-5 flex items-center underline decoration-white'><img src={android} className="pt-2" /><img src={ios} className="pl-7" /></div>
                                <div className='flex pt-12'>
                                    <img src={leftArrow} />
                                    <img src={rightArrow} className="pl-4" />
                                </div>
                            </div>
                            <div className="pt-4 pb-16"><img src={mobiles} className="w-full" /></div>
                            <div className='logo absolute bottom-4 right-11 pt-24 flex justify-end items-end w-full'><img src={logo} /></div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}