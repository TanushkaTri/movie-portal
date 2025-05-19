import React from 'react'
import errorimg from '../assets/error.png'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div>
      <img src={errorimg} alt="" />
      <Link to={`/`} className='btn bg-pink-500 text-white ml-44 mt-3'>Back to Home</Link>
    </div>
  )
}
