import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Foter from '../Footer/Foter'

export default function AuthLayout() {
  return (
    <div className=''>
    <header className='w-11/12 mx-auto'>
    <Navbar />
   
    <Outlet />
    </header>
    <Foter />
    </div>
  )
}
