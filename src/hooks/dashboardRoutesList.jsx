import React from 'react'
import {PATH} from './usePath'
import {Home, Market, Students, Teachers} from '../pages/Dashboard'
import { CodeSandboxOutlined, HomeFilled, ShoppingCartOutlined, TeamOutlined, UserAddOutlined } from '@ant-design/icons'

export const dashboardRoutesList = [
    {
        id:1,
        title:"Home",
        element: <Home/>,
        path: PATH.home
    },
    {
        id:2,
        title:"Teachers",
        element: <Teachers/>,
        path: PATH.teachers
    },
    {
        id:3,
        title:"Students",
        element: <Students/>,
        path: PATH.students
    },
    {
        id:4,
        title:"Market",
        element: <Market/>,
        path: PATH.market
    },
]
export const dashboardNavbarList = [
    {
        id:1,
        title:"Home",
        path: PATH.home,
        icon:<HomeFilled/>
    },
    {
        id:2,
        title:"Teachers",
        path: PATH.teachers,
        icon:<TeamOutlined/>
    },
    {
        id:3,
        title:"Students",
        path: PATH.students,
        icon:<CodeSandboxOutlined />
    },
    {
        id:4,
        title:"Market",
        path: PATH.market,
        icon: <ShoppingCartOutlined />
    },
]