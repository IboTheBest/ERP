import React from 'react'
import {PATH} from './usePath'
import {Home, Market, Students, Teachers, TeachersCrud } from '../pages/Dashboard'
import { CodeSandboxOutlined, HomeFilled, ShoppingCartOutlined, TeamOutlined } from '@ant-design/icons'
import SingleTeacher from '../pages/Dashboard/SingleTeacher'

export const dashboardRoutesList = [
    {
        id:1,
        element: <Home/>,
        path: PATH.home
    },
    {
        id:2,
        element: <Teachers/>,
        path: PATH.teachers
    },
    {
        id:3,
        element: <Students/>,
        path: PATH.students
    },
    {
        id:4,
        element: <Market/>,
        path: PATH.market
    },
    {
        id:5,
        element: <TeachersCrud/>,
        path: PATH.teachersAdd
    },
    {
        id:6,
        element: <TeachersCrud/>,
        path: PATH.teachersEdit
    },
    {
        id:7,
        element: <SingleTeacher/>,
        path: PATH.singleTeacher
    },
]
export const dashboardNavbarList = [
    {
        id:1,
        title:"Home",
        path: PATH.home,
        icon:<HomeFilled className='!text-[20px]'/>
    },
    {
        id:2,
        title:"Teachers",
        path: PATH.teachers,
        icon:<TeamOutlined className='!text-[20px]'/>
    },
    {
        id:3,
        title:"Students",
        path: PATH.students,
        icon:<CodeSandboxOutlined  className='!text-[20px]'/>
    },
    {
        id:4,
        title:"Market",
        path: PATH.market,
        icon: <ShoppingCartOutlined  className='!text-[20px]'/>
    },
]