import React from 'react'
import CusForm from '../../components/form'
import Logo from '../../assets/images/Logo.svg'
const Login = () => {
    return (
        <div className='bg-[#F1F0EE] h-[100vh] overdl flex items-center justify-center '>
            <div className=' w-[360px] mx-auto'>
                <div className='text-[black] flex mt-[-140px] items-center m-[42px]'>
                    <img className='logo-in-login' src={Logo} alt="" />
                    <span className='text-[30px] font-normal'>Admin paneli</span>
                </div>
                <CusForm />
            </div>

        </div>
    )
}

export default Login