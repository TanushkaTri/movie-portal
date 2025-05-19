import React from 'react'
import tv1 from '../assets/tv.jpg'
import tv3 from '../assets/tv1.jpg'
import tv2 from '../assets/tv2.jpg'
import tv4 from '../assets/tv4.jpg'
import tv5 from '../assets/tv5.jpg'
import tv6 from '../assets/tv6.jpg'
import tv7 from '../assets/tv7.jpg'
import tv from '../assets/tv.jpg'
// anohter 
import a from "../assets/a.jpeg"
import b from "../assets/b.jpeg"
import c from "../assets/c.jpeg"
import d from "../assets/d.jpeg"
import e from "../assets/e.jpeg"
import f from "../assets/f.jpeg"
import g from "../assets/g.jpeg"
import h from "../assets/g.jpeg"
import i from "../assets/h.jpeg"
import j from "../assets/j.jpeg"
import m from "../assets/m.jpeg"
import n from "../assets/n.jpeg"
import o from "../assets/o.jpeg"
import z from "../assets/z.jpeg"
import { Helmet } from 'react-helmet'
export default function TvShow() {
  return (
    <div>
      <Helmet>
        <title>Movie Portal | Tv show</title>
      </Helmet>
     <h1 className='text-3xl text-pink-500 font-semibold my-3'> See all TV Show</h1>

     <saction className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
        <img src={tv1} alt="" className='rounded-md transform hover:scale-110 transition-all duration-300' />
        {/* <img src={tv} alt=""  className='rounded-md' /> */}
        <img src={tv2} alt=""  className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={tv3} alt=""  className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={tv4} alt=""  className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={tv5} alt=""  className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={tv6} alt=""  className='rounded-md transform hover:scale-110 transition-all duration-300' />
        <img src={tv7} alt=""  className='rounded-md transform hover:scale-110 transition-all duration-300' />
        {/* another add image  */}
        <img src={a} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={b} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={c} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={d} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={e} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={f} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={g} alt="" className='rounded-md h-44 w-80 transform hover:scale-110 transition-all duration-300' />
        {/* <img src={h} alt="" className='rounded-md h-44' /> */}
        <img src={j} alt="" className='rounded-md h-44 w-80 transform hover:scale-110 transition-all duration-300' />
        <img src={m} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={n} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={o} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        <img src={z} alt="" className='rounded-md h-44 transform hover:scale-110 transition-all duration-300' />
        {/* <img src={a} alt="" className='rounded-md h-44' /> */}
     </saction>
      
    </div>
  )
}
