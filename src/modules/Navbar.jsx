import React from 'react'
import Logo from '../assets/images/logo.svg'
const Navbar = () => {
    return (
        <div className='h-[100vh] w-[360px] bg-blue-950'>
            <div className='text-[white] flex items-center m-[20px]'>
                <img className='logo-in-login' src={Logo} alt="" />
                <span className='text-[30px] font-normal'>Admin paneli</span>
            </div>
        </div>
    )
}

export default Navbar