import {React} from 'react'
import message from '../assets/images/message.png'
import cell from '../assets/images/cell.png'
import backbutton from '../assets/images/back-button.png'
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import {useForm} from 'react-hook-form' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

function ForgetPassword() {
    const navigate=useNavigate()
    const {register, handleSubmit, watch, formState: { errors }}=useForm()
    const customId = "custom-id-yes";
    function sendmail(data){
        data.preventDefault;
        sendPasswordResetEmail(auth,data.email)
        .then(()=>{
            navigate('/')
        })
        .catch(err => {
            toast.error('User Does Not Exist!',{
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
        <ToastContainer />
        <div className='offwhite py-32 px-8 flex justify-center'>
            <div className='forget-password bg-white'>
                <div className='container mx-auto px-12 pt-8 pb-14'>
                    <h1 className='heading-color  text-center'>Forgot Password</h1>
                    <p className='lightgray pt-5  text-center'>Please select option to send link reset password</p>
                    <form action="" onSubmit={handleSubmit(sendmail)}>
                        <div className='reset actv p-8 my-10'>
                            <div className='flex items-center'>
                                <div className='message p-4'><img src={message} /></div>
                                <div className='pl-4 heading-color'>
                                    <h4>Reset via Email</h4>
                                    <p className='pt-1.5'>We will send a link to reset your passwordo</p>
                                </div>
                            </div>
                            <div className='mt-8'>
                            <div className="input-outline py-5 px-7 email-bg"><input type="email" name="email" id="email" {...register('email',{required:true})} placeholder="Email Address" className="w-full" /></div>
                            {errors.email && <span className='error-color'>Enter Your Email</span>}
                            </div>
                        </div>
                        <div className='reset p-8'>
                            <div className='flex items-center'>
                                <div className='cell p-4'><img src={cell} /></div>
                                <div className='pl-4'>
                                    <h4 className='mediam-gray'>Reset via SMS</h4>
                                    <p className='pt-1.5'>We will send a link to reset your passwordo</p>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className="send-link text-white w-full py-5 my-10">Send Link Reset Password</button>
                    </form>
                    <div className='flex items-center'>
                        <div><img src={backbutton} /></div>
                        <Link to="/" className='backbnt lightgray ml-3 cursor-pointer font-medium text-sm'>Back to sign in</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgetPassword
