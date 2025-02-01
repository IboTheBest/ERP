import React, { useContext } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import { Context } from './context/Contex'
import DashboardRoutes from './routes/DashboardRoutes'

function App() {
  const {token} = useContext(Context)
  if(token){
    return <DashboardRoutes/>
  }
  else{
    return <Login/>
  }
}

export default App
