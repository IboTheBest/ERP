import React from 'react'
import Navbar from '../modules/Navbar'
import Header from '../modules/Header'

const Layaut = ({ children }) => {
    return (
        <div className='flex item-top'>
            <Navbar />
            <div className='w-full'>
                <Header />
                <div className='h-[93vh] w-full bg-red-200'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layaut