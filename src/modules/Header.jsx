import { BellOutlined, ExclamationCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal } from 'antd'
import React, { useContext, useState } from 'react'
import { Context } from '../context/Contex'

const Header = () => {
    const [logout, setLogout] = useState(false)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const { collapsed, setCollapsed } = useContext(Context)
    const {refresh, setRefresh} = useContext(Context)    
    function handleLogOutOk() {
        setLoadingBtn(true)
        setTimeout(() => {
            localStorage.clear()
            window.location.reload()
        }, 1000)
    }
    return (
        <div className='h-[7vh] w-full bg-[#011528] flex items-center justify-between px-[30px]'>
            <button onClick={()=>setCollapsed(!collapsed)}>
                {collapsed ? 
                    <MenuUnfoldOutlined className='!text-white text-[33px] align-center' />
                    :
                    <MenuFoldOutlined className='!text-white text-[33px] align-center' />
                }
            </button>
            <div className='flex items-center gap-[30px]'>
                <Button onClick={() => setRefresh(!refresh)} className='!hover:border-white !text-white bg-white4' type='primary'>
                    <span><ExclamationCircleOutlined /></span>
                    <span>Synxronlash</span>
                </Button>
                <Badge count={99} overflowCount={3}>
                    <BellOutlined className='text-[30px] !text-white' />
                </Badge>
                <Button onClick={() => setLogout(!logout)} className='' type='text'>
                    <span>Chiqish</span>
                    <span><LogoutOutlined /></span>
                </Button>
            </div>
            <Modal open={logout} onCancel={() => setLogout(false)} confirmLoading={loadingBtn} onOk={handleLogOutOk}>
                <span className='font-bold text-[22px]'>Platformadan chiqishni xohlaysizmi?</span>
            </Modal>
        </div>
    )
}

export default Header