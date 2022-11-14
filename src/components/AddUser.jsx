import React from 'react'
import notification from '../assets/images/notification.png'
import activeuser from '../assets/images/active-user.png'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebaseConfig';
import {collection,addDoc} from 'firebase/firestore'


function AddUser() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const customId = "custom-id-yes";
    function adduser(data){
        addDoc(collection(db,'add-user'),{
            name: data.name,
            username: data.userName,
            accountnumber: data.accountNumber,
            balance: data.balance,
            branch: data.branch,
            swiftCode: data.swiftCode,
        }).then((res)=>{
            document.getElementById('name').value=''
            document.getElementById('userName').value=''
            document.getElementById('accountNumber').value=''
            document.getElementById('balance').value=''
            document.getElementById('branch').value=''
            document.getElementById('swiftCode').value=''
            toast.success('User Added Successfully',{
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

        
        }).catch((err)=>{
            toast.error('Something went Wrong!',{
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
        <div>
            <div className='py-9 flex justify-between'>
                <div className='title'>
                    <h1 className='heading-color'>Add User</h1>
                    <span className='lightgray'>Add New User to Company</span>
                </div>
                <div className='flex items-center'>
                    <div className='p-3 mr-3 rounded-full bg-white'><img src={notification} /></div>
                    <div className='rounded-full'><img src={activeuser} /></div>
                </div>
            </div>

            <div className='bg-white px-9 rounded-2xl'>
                <form onSubmit={handleSubmit(adduser)} className="form">
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
                    <button type='submit' className="text-white w-full py-5 my-4">Add User</button>
                </form>
            </div>



        </div>
    </>
    )
}

export default AddUser
