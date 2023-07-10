import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './context/UserProvider'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GalleryApp from './GalleryApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <GalleryApp />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
