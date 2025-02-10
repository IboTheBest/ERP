import React, { useState } from 'react'
import { Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import getRequest from '../../service'
import { Delete } from '../../service/auth'
import toast, { Toaster } from 'react-hot-toast'


const SingleTeacher = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const singleData = getRequest(`/teachers/${id}`, true)
    const [deleteLoading, setDeleteLoading] = useState(false)

    function handleDeleteTeacher() {
        setDeleteLoading(true)
        Delete(`/teachers/${id}`, setDeleteLoading, toast, navigate)
    }
    return (
        <div className='p-5'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <button className='cursor-pointer' type='button' onClick={() => navigate(-1)}><ArrowLeftOutlined className='text-[25px]' /></button>
                    <h2 className='font-bold text-[25px]'>{singleData?.name}</h2>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <Button loading={deleteLoading} onClick={handleDeleteTeacher} className='!bg-red-700' type='primary' size='large'> <DeleteOutlined className='!text-[22px]' /></Button>
                    <Button onClick={() => navigate('edit')} type='primary' size='large' icon={<EditOutlined className='text-[20px]' />}>Tahrirlash</Button>
                </div>
            </div>
        </div>
    )
}

export default SingleTeacher
