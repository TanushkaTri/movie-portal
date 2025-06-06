import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/routers'
import AuthProvider from './AuthProvider/AuthProvider'
import  { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider >
    <RouterProvider router={routers} />
    <Toaster />
    </AuthProvider>  
      
    </HelmetProvider>
  
  
  </StrictMode>,
)
