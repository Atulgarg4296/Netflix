import React from 'react'
import logo from "../utils/logo.png"
const Header = () => {
  return (
    <div className='absolute'>
        <img className='w-48 py-10' src={logo} alt='logo'/>
    </div>
  )
}

export default Header