import React from 'react'
import { LineOutlined, MoreOutlined } from "@ant-design/icons"
import { instance } from "../hooks/instance"
import { Button } from "antd"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export function getTeachers(setTeachers,stackId, refresh ){
const navigate = useNavigate()
useEffect(() => {
    if(stackId){
      instance().get(`/teachers?stackId=${stackId}`).then(res => {
        setTeachers(res.data.map((item, index) => {
          item.key = index + 1
          item.name = item.name ? item.name : <LineOutlined/>
          item.age = item.age ? item.age : <LineOutlined/>
          item.stack = item.stack ? item.stack : <LineOutlined/>
          item.action = <Button onClick={()=> navigate(`${item.id}`)} className='!w-[32px] !h-[32px] flex items-center justify-center !pr-[20px]' size='middle' type='primary'> <MoreOutlined className='rotate-90'/></Button>
          return item
        }))
      })
    }else{
      instance().get(`/teachers`).then(res => {
        setTeachers(res.data.map((item, index) => {
          item.key = index + 1 
          item.name = item.name ? item.name : <LineOutlined/>
          item.age = item.age ? item.age : <LineOutlined/>
          item.stack = item.stack ? item.stack : <LineOutlined/>
          item.action = <Button onClick={()=> navigate(`${item.id}`)} className='!w-[32px] !h-[32px] flex items-center justify-center !pr-[20px]' size='middle' type='primary'> <MoreOutlined className='rotate-90'/></Button>
          return item
        }))
      })
    }
  }, [refresh, stackId])
  
}