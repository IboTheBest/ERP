import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UsingContext } from './Context/Contex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsingContext>
      <App />
    </UsingContext>
  </BrowserRouter>
)
