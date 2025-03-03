import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"


export const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
     title="Join the millions learning to code with studyNotion for free."
     desc1="Build skills for today, tommorow, and beyond."
     desc2="Education to future-proof your career."
     image={signupImg}
     formtype = "signup"
     setIsLoggedIn={setIsLoggedIn}
    />
  )
}
export default SignUp