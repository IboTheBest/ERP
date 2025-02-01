import React from 'react'
import {PATH} from './usePath'
import {Home, Market, Students, Teachers} from '../pages/Dashboard'
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