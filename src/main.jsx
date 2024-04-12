import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import App from './pages/App/App.jsx'
import './index.css'
import router from './routers/index.router.jsx'
import { ActiveLinkProvider } from './context/ActiveLinkContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveLinkProvider>
      <RouterProvider router={router}/>
    </ActiveLinkProvider>
  </React.StrictMode>,
)
