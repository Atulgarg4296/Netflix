import React from 'react'
import Header from './Header'
import background from "../utils/background.jpg"
import { useState } from 'react'
import { useRef } from 'react'
const Login = () => {
    const[isSignIn,setIsSignIn] = useState(true);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const toggleForm = ()=>{
        setIsSignIn((isSignIn)=> !isSignIn);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if(isSignIn){
            console.log(email,password);
        }
        else{
            console.log(firstName,lastName,email,password);
        }
    }
  



  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={background} alt='background'/>
        </div>
        <form onSubmit={handleSubmit} className='w-3/12 absolute bg-black p-12 my-32 mx-auto left-0 right-0 text-white bg-opacity-70 rounded-lg'>
            <h1 className='text-3xl font-bold py-4'>{isSignIn? "Sign In" : "Sign Up"}</h1>

            {isSignIn? "" : <input type='text' placeholder='First Name' ref={firstNameRef} className='p-2 my-2 w-full bg-gray-700'></input>}
            {isSignIn? "" : <input type='text' placeholder='Last Name' ref={lastNameRef} className='p-2 my-2 w-full bg-gray-700'></input>}
            <input type='text' placeholder='Email Address' ref={emailRef} className='p-2 my-2 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' ref={passwordRef} className='p-2 my-2 w-full bg-gray-700'/>
            <button className='bg-red-700 rounded w-full py-2 my-5' type='submit'>{isSignIn? "Sign In" : "Sign Up"}</button>
            <p className='py-4 inline'>{isSignIn? "New to netflix? ": "Already registered? "}</p>
            <p className='inline cursor-pointer' onClick={toggleForm}>{isSignIn? "Sign Up Now":"Sign In now"} </p>
        </form>
       
       
    </div>
  )
}

export default Login