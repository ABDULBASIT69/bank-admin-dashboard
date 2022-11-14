import React, { useState } from 'react'
import logo from '../assets/images/dashboard-logo.png'
import cross from '../assets/images/cross.jpg'
import { useNavigate } from 'react-router-dom'
import DashboardContent from './DashboardContent'
import AddUser from './AddUser'
import Profile from './Profile'
import ReactDOM from 'react-dom/client'
import ManageUsers from './ManageUsers'
import EditUser from './EditUser'

function Dashboard() {
    const navigate = useNavigate()
    const [showToggleBar, setShowToggleBar] = useState(true)
    const [activeTab,setActiveTab] = useState('dashboardContent')
    function logout() {
        localStorage.clear();
        navigate('/')
    }


    return (
        <div className='offwhite flex min-h-screen'>
            <div className='sidebar h-screen fixed bg-white'>
                <div className='container mx-auto px-5'>
                    <div className='pt-7 px-5'><img src={logo} /></div>
                    <div className='general pt-12 px-5 heading-color'>General</div>
                    <div className='change-color dashboard flex my-8 cursor-pointer  pl-3 general lightgray' onClick={()=> setActiveTab('dashboardContent')}>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0024 13.3798C12.0559 13.3798 12.9134 14.2312 12.9134 15.2777V17.9692C12.9134 18.1941 13.0936 18.3743 13.3246 18.3796H14.9924C16.3066 18.3796 17.375 17.3243 17.375 16.0276V8.39409C17.3689 7.94784 17.1562 7.52784 16.7914 7.24872L11.0225 2.64797C10.2481 2.03459 9.16488 2.03459 8.38788 2.64972L2.65838 7.24697C2.2795 7.53484 2.06687 7.95484 2.0625 8.40897V16.0276C2.0625 17.3243 3.13087 18.3796 4.44512 18.3796H6.12862C6.36575 18.3796 6.55825 18.1915 6.55825 17.9605C6.55825 17.9097 6.56437 17.859 6.57487 17.8108V15.2777C6.57487 14.2373 7.42712 13.3868 8.47275 13.3798H11.0024ZM14.9924 19.6921H13.3089C12.3446 19.6693 11.6009 18.9125 11.6009 17.9692V15.2777C11.6009 14.9548 11.3322 14.6923 11.0024 14.6923H8.47713C8.15425 14.6941 7.88738 14.9575 7.88738 15.2777V17.9605C7.88738 18.0261 7.87863 18.0891 7.86025 18.1486C7.76575 19.0148 7.0255 19.6921 6.12862 19.6921H4.44512C2.40725 19.6921 0.75 18.048 0.75 16.0276V8.40285C0.75875 7.53309 1.1595 6.73684 1.85163 6.21272L7.56975 1.62334C8.82887 0.625844 10.5833 0.625844 11.8398 1.62159L17.599 6.21534C18.2754 6.73072 18.6761 7.52522 18.6875 8.38447V16.0276C18.6875 18.048 17.0303 19.6921 14.9924 19.6921Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Dashboard</span>
                    </div>
                    <div className='change-color manage-user flex pl-3 cursor-pointer general lightgray' onClick={()=> setActiveTab('ManageUsers')}>
                        <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33333 12.9091C11.3104 12.9091 14.6667 13.5554 14.6667 16.0487C14.6667 18.543 11.2884 19.1663 7.33333 19.1663C3.35718 19.1663 0 18.5201 0 16.0267C0 13.5325 3.37827 12.9091 7.33333 12.9091ZM7.33333 0.833008C10.0275 0.833008 12.1862 2.99086 12.1862 5.68314C12.1862 8.37542 10.0275 10.5342 7.33333 10.5342C4.64007 10.5342 2.48051 8.37542 2.48051 5.68314C2.48051 2.99086 4.64007 0.833008 7.33333 0.833008Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Manage Users</span>
                    </div>

                    <div className='change-color add-user flex my-8 cursor-pointer  pl-3 general lightgray' onClick={()=> setActiveTab('adduser')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12L20 8L15 4V6.999H2V8.999H15V12ZM22 15H9V12L4 16L9 20V17H22V15Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Add User</span>
                    </div>
                    <div className='change-color profile flex pl-3 cursor-pointer general lightgray' onClick={()=> setActiveTab('profile')}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7016 0C16.6154 0 18.8125 2.37738 18.8125 5.53V11.5395C18.8125 13.153 18.242 14.6107 17.2051 15.645C16.275 16.5716 15.0684 17.0625 13.7156 17.0625H5.09425C3.74412 17.0625 2.53837 16.5725 1.60737 15.645C0.5705 14.6107 0 13.153 0 11.5395V5.53C0 2.37738 2.19712 0 5.11087 0H13.7016ZM13.7016 1.3125H5.11087C2.91025 1.3125 1.3125 3.08613 1.3125 5.53V11.5395C1.3125 12.8021 1.7465 13.93 2.534 14.7149C3.213 15.393 4.09937 15.75 5.09687 15.75H13.7016C13.7034 15.7483 13.7104 15.75 13.7156 15.75C14.714 15.75 15.5995 15.393 16.2785 14.7149C17.0669 13.93 17.5 12.8021 17.5 11.5395V5.53C17.5 3.08613 15.9022 1.3125 13.7016 1.3125ZM15.0806 5.3627C15.309 5.64357 15.2661 6.05657 14.9852 6.28582L11.0967 9.44633C10.605 9.83658 10.017 10.0317 9.42987 10.0317C8.8445 10.0317 8.26087 9.83832 7.77262 9.45157L3.84825 6.28757C3.56562 6.06007 3.52187 5.6462 3.7485 5.36445C3.97687 5.08357 4.38987 5.03895 4.67162 5.26557L8.5925 8.42607C9.08512 8.81633 9.779 8.81633 10.2751 8.42257L14.1566 5.26733C14.4384 5.0372 14.8514 5.08095 15.0806 5.3627Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Profile</span>
                    </div>
                    <div onClick={logout} className=' change-color logout flex px-2 general cursor-pointer absolute bottom-14 gray'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4741 2.16699C21.1163 2.16699 23.2678 4.31741 23.2678 6.96074V19.028C23.2678 21.6778 21.1109 23.8337 18.4622 23.8337H13.1701C10.5278 23.8337 8.37742 21.6832 8.37742 19.0399V18.0194C8.37742 17.5709 8.74142 17.2069 9.18992 17.2069C9.63842 17.2069 10.0024 17.5709 10.0024 18.0194V19.0399C10.0024 20.7862 11.4237 22.2087 13.1701 22.2087H18.4622C20.2161 22.2087 21.6428 20.783 21.6428 19.028V6.96074C21.6428 5.21441 20.2204 3.79199 18.4741 3.79199H13.182C11.4292 3.79199 10.0024 5.21766 10.0024 6.97049V7.98124C10.0024 8.42974 9.63842 8.79374 9.18992 8.79374C8.74142 8.79374 8.37742 8.42974 8.37742 7.98124V6.97049C8.37742 4.32174 10.5333 2.16699 13.182 2.16699H18.4741ZM14.5083 9.26608L17.6814 12.4259C17.7071 12.4516 17.7311 12.4791 17.7532 12.5081L17.6814 12.4251C17.7247 12.4677 17.7625 12.5148 17.7946 12.5653C17.8012 12.5779 17.8086 12.5903 17.8156 12.6029C17.828 12.6223 17.8384 12.6429 17.848 12.6639C17.8534 12.6788 17.8596 12.6936 17.8654 12.7087C17.8747 12.7292 17.8818 12.7504 17.8881 12.7719C17.8918 12.7888 17.8961 12.8056 17.8999 12.8227C17.9058 12.8433 17.9096 12.8641 17.9126 12.885C17.9126 12.8946 17.9139 12.9046 17.9149 12.9146C17.9193 12.9432 17.9208 12.9717 17.9208 13.0003L17.9129 13.0859L17.912 13.1105C17.9117 13.1124 17.9115 13.1142 17.9112 13.116L17.9208 13.0003C17.9208 13.0605 17.9142 13.12 17.9012 13.1779C17.8961 13.195 17.8918 13.2119 17.8869 13.2285C17.8818 13.2502 17.8747 13.2714 17.8667 13.2922C17.8596 13.307 17.8534 13.3219 17.8468 13.3365C17.8384 13.3578 17.828 13.3784 17.8166 13.3985C17.8086 13.4104 17.8012 13.4227 17.7935 13.4348C17.7818 13.4555 17.7681 13.4751 17.7534 13.4941C17.7434 13.5054 17.7341 13.5169 17.7245 13.5281C17.7115 13.5447 17.6968 13.5604 17.6814 13.5756L14.5083 16.7335C14.3502 16.8917 14.1422 16.9707 13.9352 16.9707C13.7272 16.9707 13.5182 16.8917 13.36 16.7313C13.0426 16.4128 13.0447 15.8993 13.3622 15.583L15.1396 13.8128H4.0625C3.614 13.8128 3.25 13.4488 3.25 13.0003C3.25 12.5518 3.614 12.1878 4.0625 12.1878H15.1396L13.3622 10.4166C13.0447 10.1002 13.0426 9.58674 13.36 9.26824C13.6774 8.94974 14.1909 8.94974 14.5083 9.26608Z" fill="#98A0B2" />
                        </svg>
                        <span className='pl-4'>Log Out</span>
                    </div>
                </div>
            </div>


            {/* Toggle nav bar */}

            {showToggleBar ? <div className='togglebar hidden h-screen fixed bg-white'>
                <div className='container mx-auto px-5'>
                    <div className='px-5 w-24 absolute right-0' onClick={() => setShowToggleBar(false)}><img src={cross} /></div>
                    <div className='pt-16 px-5'><img src={logo} /></div>
                    <div className='general pt-12 px-5 heading-color'>General</div>
                    <div className='change-color dashboard flex my-8 cursor-pointer  pl-3 general lightgray'  onClick={()=> setActiveTab('dashboardContent')}>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0024 13.3798C12.0559 13.3798 12.9134 14.2312 12.9134 15.2777V17.9692C12.9134 18.1941 13.0936 18.3743 13.3246 18.3796H14.9924C16.3066 18.3796 17.375 17.3243 17.375 16.0276V8.39409C17.3689 7.94784 17.1562 7.52784 16.7914 7.24872L11.0225 2.64797C10.2481 2.03459 9.16488 2.03459 8.38788 2.64972L2.65838 7.24697C2.2795 7.53484 2.06687 7.95484 2.0625 8.40897V16.0276C2.0625 17.3243 3.13087 18.3796 4.44512 18.3796H6.12862C6.36575 18.3796 6.55825 18.1915 6.55825 17.9605C6.55825 17.9097 6.56437 17.859 6.57487 17.8108V15.2777C6.57487 14.2373 7.42712 13.3868 8.47275 13.3798H11.0024ZM14.9924 19.6921H13.3089C12.3446 19.6693 11.6009 18.9125 11.6009 17.9692V15.2777C11.6009 14.9548 11.3322 14.6923 11.0024 14.6923H8.47713C8.15425 14.6941 7.88738 14.9575 7.88738 15.2777V17.9605C7.88738 18.0261 7.87863 18.0891 7.86025 18.1486C7.76575 19.0148 7.0255 19.6921 6.12862 19.6921H4.44512C2.40725 19.6921 0.75 18.048 0.75 16.0276V8.40285C0.75875 7.53309 1.1595 6.73684 1.85163 6.21272L7.56975 1.62334C8.82887 0.625844 10.5833 0.625844 11.8398 1.62159L17.599 6.21534C18.2754 6.73072 18.6761 7.52522 18.6875 8.38447V16.0276C18.6875 18.048 17.0303 19.6921 14.9924 19.6921Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Dashboard</span>
                    </div>
                    <div className='change-color manage-user flex pl-3 cursor-pointer general lightgray' onClick={()=> setActiveTab('ManageUsers')}>
                        <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33333 12.9091C11.3104 12.9091 14.6667 13.5554 14.6667 16.0487C14.6667 18.543 11.2884 19.1663 7.33333 19.1663C3.35718 19.1663 0 18.5201 0 16.0267C0 13.5325 3.37827 12.9091 7.33333 12.9091ZM7.33333 0.833008C10.0275 0.833008 12.1862 2.99086 12.1862 5.68314C12.1862 8.37542 10.0275 10.5342 7.33333 10.5342C4.64007 10.5342 2.48051 8.37542 2.48051 5.68314C2.48051 2.99086 4.64007 0.833008 7.33333 0.833008Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Manage Users</span>
                    </div>

                    <div className='change-color add-user flex my-8 cursor-pointer  pl-3 general lightgray'  onClick={()=> setActiveTab('adduser')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12L20 8L15 4V6.999H2V8.999H15V12ZM22 15H9V12L4 16L9 20V17H22V15Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Add User</span>
                    </div>
                    <div className='change-color profile flex pl-3 cursor-pointer general lightgray' onClick={()=> setActiveTab('profile')}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7016 0C16.6154 0 18.8125 2.37738 18.8125 5.53V11.5395C18.8125 13.153 18.242 14.6107 17.2051 15.645C16.275 16.5716 15.0684 17.0625 13.7156 17.0625H5.09425C3.74412 17.0625 2.53837 16.5725 1.60737 15.645C0.5705 14.6107 0 13.153 0 11.5395V5.53C0 2.37738 2.19712 0 5.11087 0H13.7016ZM13.7016 1.3125H5.11087C2.91025 1.3125 1.3125 3.08613 1.3125 5.53V11.5395C1.3125 12.8021 1.7465 13.93 2.534 14.7149C3.213 15.393 4.09937 15.75 5.09687 15.75H13.7016C13.7034 15.7483 13.7104 15.75 13.7156 15.75C14.714 15.75 15.5995 15.393 16.2785 14.7149C17.0669 13.93 17.5 12.8021 17.5 11.5395V5.53C17.5 3.08613 15.9022 1.3125 13.7016 1.3125ZM15.0806 5.3627C15.309 5.64357 15.2661 6.05657 14.9852 6.28582L11.0967 9.44633C10.605 9.83658 10.017 10.0317 9.42987 10.0317C8.8445 10.0317 8.26087 9.83832 7.77262 9.45157L3.84825 6.28757C3.56562 6.06007 3.52187 5.6462 3.7485 5.36445C3.97687 5.08357 4.38987 5.03895 4.67162 5.26557L8.5925 8.42607C9.08512 8.81633 9.779 8.81633 10.2751 8.42257L14.1566 5.26733C14.4384 5.0372 14.8514 5.08095 15.0806 5.3627Z" fill="#C4C4C4" />
                        </svg>
                        <span className='pl-4'>Profile</span>
                    </div>
                    <div onClick={logout} className=' change-color logout flex px-2 general cursor-pointer absolute bottom-14 gray'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4741 2.16699C21.1163 2.16699 23.2678 4.31741 23.2678 6.96074V19.028C23.2678 21.6778 21.1109 23.8337 18.4622 23.8337H13.1701C10.5278 23.8337 8.37742 21.6832 8.37742 19.0399V18.0194C8.37742 17.5709 8.74142 17.2069 9.18992 17.2069C9.63842 17.2069 10.0024 17.5709 10.0024 18.0194V19.0399C10.0024 20.7862 11.4237 22.2087 13.1701 22.2087H18.4622C20.2161 22.2087 21.6428 20.783 21.6428 19.028V6.96074C21.6428 5.21441 20.2204 3.79199 18.4741 3.79199H13.182C11.4292 3.79199 10.0024 5.21766 10.0024 6.97049V7.98124C10.0024 8.42974 9.63842 8.79374 9.18992 8.79374C8.74142 8.79374 8.37742 8.42974 8.37742 7.98124V6.97049C8.37742 4.32174 10.5333 2.16699 13.182 2.16699H18.4741ZM14.5083 9.26608L17.6814 12.4259C17.7071 12.4516 17.7311 12.4791 17.7532 12.5081L17.6814 12.4251C17.7247 12.4677 17.7625 12.5148 17.7946 12.5653C17.8012 12.5779 17.8086 12.5903 17.8156 12.6029C17.828 12.6223 17.8384 12.6429 17.848 12.6639C17.8534 12.6788 17.8596 12.6936 17.8654 12.7087C17.8747 12.7292 17.8818 12.7504 17.8881 12.7719C17.8918 12.7888 17.8961 12.8056 17.8999 12.8227C17.9058 12.8433 17.9096 12.8641 17.9126 12.885C17.9126 12.8946 17.9139 12.9046 17.9149 12.9146C17.9193 12.9432 17.9208 12.9717 17.9208 13.0003L17.9129 13.0859L17.912 13.1105C17.9117 13.1124 17.9115 13.1142 17.9112 13.116L17.9208 13.0003C17.9208 13.0605 17.9142 13.12 17.9012 13.1779C17.8961 13.195 17.8918 13.2119 17.8869 13.2285C17.8818 13.2502 17.8747 13.2714 17.8667 13.2922C17.8596 13.307 17.8534 13.3219 17.8468 13.3365C17.8384 13.3578 17.828 13.3784 17.8166 13.3985C17.8086 13.4104 17.8012 13.4227 17.7935 13.4348C17.7818 13.4555 17.7681 13.4751 17.7534 13.4941C17.7434 13.5054 17.7341 13.5169 17.7245 13.5281C17.7115 13.5447 17.6968 13.5604 17.6814 13.5756L14.5083 16.7335C14.3502 16.8917 14.1422 16.9707 13.9352 16.9707C13.7272 16.9707 13.5182 16.8917 13.36 16.7313C13.0426 16.4128 13.0447 15.8993 13.3622 15.583L15.1396 13.8128H4.0625C3.614 13.8128 3.25 13.4488 3.25 13.0003C3.25 12.5518 3.614 12.1878 4.0625 12.1878H15.1396L13.3622 10.4166C13.0447 10.1002 13.0426 9.58674 13.36 9.26824C13.6774 8.94974 14.1909 8.94974 14.5083 9.26608Z" fill="#98A0B2" />
                        </svg>
                        <span className='pl-4'>Log Out</span>
                    </div>
                </div>
            </div> : null
            }





            {/* DashBoard Contet */}

            <div className='container mx-auto px-9 pt-9'>
                <div className='dashboard-content'>
                    {/* Toggle Button */}
                    <div className='togglebtn hidden' onClick={() => setShowToggleBar(true)}>
                        <div className='menubtn'></div>
                        <div className='menubtn'></div>
                        <div className='menubtn'></div>
                    </div>

                    <div>
                        {activeTab==='dashboardContent' && <DashboardContent />}
                        {activeTab==='adduser' && <AddUser />}
                        {activeTab==='profile' && <Profile />}
                        {activeTab==='ManageUsers' && <ManageUsers setActiveTab={setActiveTab}/>}
                        {activeTab==='editUser' && <EditUser setActiveTab={setActiveTab}/>}
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
