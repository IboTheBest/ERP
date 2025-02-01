import React from 'react'
import { dashboardRoutesList } from '../hooks/dashboardRoutesList'
import { Route, Routes } from 'react-router-dom'
import Layaut from '../features'

const DashboardRoutes = () => {
    return (
        <>
            <Layaut>
                <Routes>
                    {dashboardRoutesList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}
                </Routes>
            </Layaut>
        </>
    )
}

export default DashboardRoutes