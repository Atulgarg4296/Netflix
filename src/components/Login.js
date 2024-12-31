import React from 'react'
import Header from './Header'
import background from "../utils/background.jpg"
const Login = () => {
  return (
    <div>
        <Header/>
        <img src={background} alt='background'/>
        <div className='absolute'>
        <form className='absolute'>
            <input type='text' placeholder='username'/>
            <input type='text' placeholder='password'/>
            <button>Sign In</button>
        </form>
        </div>           
    </div>
  )
}

export default Login