import React from 'react'
import logo from "../utils/logo.png"
const Header = () => {
  return (
    <div className='absolute z-10'>
        <img className='w-48' src={logo} alt='logo'/>
    </div>
  )
}

export default Header