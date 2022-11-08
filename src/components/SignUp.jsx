import members from '../assets/images/members.png'
import leftArrow from '../assets/images/left-arrow.png'
import rightArrow from '../assets/images/right-arrow.png'
import map from '../assets/images/map.png'
import logo from '../assets/images/logo.png'
export default function SignUp() {
    return (
        <div className="form-bg w-full flex justify-between">
            <div className="form bg-white w-3/5 pt-16 pb-11">
                <div className="container mx-auto px-6">
                    <h1 className="heading-color">Get started</h1>
                    <form action="">
                        <div className="pt-5">
                            <span className="gray">Full Name</span>
                            <div className="input-outline py-5 px-7 my-4"><input type="text" name="fullname" id="fullname" placeholder="Full Name" className="w-full" /></div>
                        </div>
                        <div>
                            <span className="gray">Email Address</span>
                            <div className="input-outline py-5 px-7 my-4"><input type="email" name="email" id="email" placeholder="Email Address" className="w-full" /></div>
                        </div>
                        <div className="full-fields flex justify-between">
                            <div className='w-full mr-5'>
                                <span className="gray">Birth Date</span>
                                <div className="input-outline py-5 px-7 my-4"><input type="date" name="birthdate" id="birthdate" placeholder="Birth Date" className="w-full" /></div>
                            </div>
                            <div className='w-full ml-5'>
                                <span className="gray">Phone Number</span>
                                <div className="input-outline py-5 px-7 my-4"><input type="number" name="phonenumber" id="phonenumber" placeholder="Phone Number" className="w-full" /></div>
                            </div>
                        </div>
                        <div className="full-fields flex justify-between">
                            <div className='w-full mr-5'>
                                <span className="gray">Province</span>
                                <div className="input-outline py-5 px-7 my-4"><input type="text" name="province" id="province" placeholder="Province" className="w-full" /></div>
                            </div>
                            <div className='w-full ml-5'>
                                <span className="gray">City</span>
                                <div className="input-outline py-5 px-7 my-4"><input type="text" name="text" id="city" placeholder="City" className="w-full" /></div>
                            </div>
                        </div>
                        <div>
                            <span className="gray">Full Address</span>
                            <div className="input-outline py-5 px-7 my-4"><textarea placeholder="Full Address" cols="12" rows="2" className="w-full" /></div>
                        </div>
                        <div className="full-fields flex justify-between">
                            <div className='w-full mr-5'>
                                <span className="gray">Password</span>
                                <div className="input-outline py-5 px-7 my-4"><input type="password" name="password" id="password" placeholder="Password" className="w-full" /></div>
                            </div>
                            <div className='w-full ml-5'>
                                <span className="gray">Confirm Password</span>
                                <div className="input-outline py-5 px-7 my-4"><input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" className="w-full" /></div>
                            </div>
                        </div>
                        <button className="text-white w-full py-5 my-4">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="side-design relative pt-16 w-2/5">
                <div className="container mx-auto pl-16">
                    <h1 className="text-white"><span className="yellow">Our Members</span> are Arround the World</h1>
                    <p className="pt-5 text-white">Over 10,000 Investor join us monthly</p>
                    <div className='pt-5 flex items-center underline decoration-white'><img src={members} /><span className='pl-3 text-white'>dan lainnya</span></div>
                    <div className='flex pt-20'>
                        <img src={leftArrow} />
                        <img src={rightArrow} className="pl-4"/>
                    </div>
                    <div className="pt-24"><img src={map} className="w-full"/></div>
                    <div className='logo absolute bottom-16 right-11 pt-24 flex justify-end items-end w-full'><img src={logo}/></div>
                </div>
            </div>
        </div>
    )
}