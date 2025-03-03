import React, { useState } from 'react'
import{AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({setIsLoggedIn}) => {
const navigate = useNavigate();
    const[formData, setFormData] = useState({
        firstName:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
    })

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    const[showPassword, setPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmpassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard")

    }
  return (
    <div>
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
       
        <form onSubmit={submitHandler}>
            <div className='flex gap-10'>
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                <input
                 required
                 type='text'
                 name='firstName'
                 onChange={changeHandler}
                 placeholder='Enter First Name'
                 value={formData.firstName}
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                 required
                 type='text'
                 name='lastname'
                 onChange={changeHandler}
                 placeholder='Enter First Name'
                 value={formData.lastname}
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>
            </div>
            {/* email address */}
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                <input
                 required
                 type='email'
                 name='email'
                 onChange={changeHandler}
                 placeholder='Enter Email Address'
                 value={formData.email}
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>

            {/* createpassword and confirm */}
            <div className='flex gap-x-4'>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                <input
                 required
                 type={showPassword ? ("text") : ("password")}
                 name='password'
                 onChange={changeHandler}
                 placeholder='Enter Password'
                 value={formData.password}
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span className='absolute right-3 top-[38px] cursor-pointer z-10' onClick={()=>setPassword((prev)=>!prev)}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                 required
                 type={showConfirmPassword ? ("text") : ("password")}
                 name='confirmpassword'
                 onChange={changeHandler}
                 placeholder='Confirm Password'
                 value={formData.confirmpassword}
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span className='absolute right-3 top-[38px] cursor-pointer z-10' onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
            </label>
            </div>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
                Create Account
            </button>

           
        </form>
    </div>
  )
}

export default SignUpForm