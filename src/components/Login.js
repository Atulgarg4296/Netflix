import React from 'react'
import Header from './Header'
import background from "../utils/background.jpg"
const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={background} alt='background'/>
        </div>
        <form className='w-3/12 absolute bg-black p-12 my-32 mx-auto left-0 right-0 text-white bg-opacity-70 rounded-lg'>
            <h1 className='text-3xl font-bold py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
            <button className='bg-red-700 rounded w-full py-2 my-5'>Sign In</button>
            <p className='py-4'>New to netflix? Sign Up Now</p>
        </form>
       
       
    </div>
  )
}

export default Login