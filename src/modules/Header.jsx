import { BellOutlined, ExclamationCircleOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Badge, Button } from 'antd'
import React from 'react'

const Header = () => {
    return (
        <div className='h-[7vh] w-full bg-blue-950 flex items-center justify-between px-[30px]'>
            <MenuFoldOutlined className='!text-white text-[33px] align-center' />
            <div className='flex items-center gap-[30px]'>
                <Button className='!hover:border-white !text-white bg-white' type='primary'>
                    <span><ExclamationCircleOutlined /></span>
                    <span>Synxronlash</span>
                </Button>
                <Badge count={99} overflowCount={10}>
                    <BellOutlined className='text-[30px] !text-white'/>
                </Badge>
                <Button className='' type='text'>
                    <span>Chiqish</span>
                    <span><LogoutOutlined /></span>
                </Button>
            </div>
        </div>
    )
}

export default Header