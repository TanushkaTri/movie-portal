import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Foter from '../Footer/Foter'

export default function RootElement() {
  return (
    <div className=' '>
      <header className='w-11/12 mx-auto pt-20 px-7'>
      {/* z-50  fixed top-0 shadow-md */}
      <div className=' w-11/12 mx-auto z-50  fixed top-0 shadow-md  '>
      <Navbar />
      </div>
        
        
       <div className=' '>
       <Outlet />
       </div>
      
      </header>
      <footer className='mt-10 '>
       
      <Foter />
      </footer>
    </div>
  )
}
