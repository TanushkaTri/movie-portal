import React from 'react'
import { IoLogoYoutube } from 'react-icons/io'
import { RiMovie2Line } from 'react-icons/ri'

export default function Foter() {
  return (
    <div>
      <footer className="footer p-20">
 
  <nav>
  <aside className=''>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <RiMovie2Line />
    </svg>
    <p className='text-lg font-medium '>
     Movie Portal Industries Ltd.
      <br />
      Providing reliable tech since 2024
    </p>
  </aside>
    <h6 className="text-2xl font-semibold ">Services</h6>
    <a href="http://localhost:5173/allMovie" className="link link-hover my-3 font-medium">
  Movies
</a>
    <a className="link link-hover font-medium">TV Channel</a>
    <a className="link link-hover my-3 font-medium">Chinema Ticket</a>
    <a className="link link-hover font-medium ">Newsletter</a>
    <a className="link link-hover my-3 font-medium ">Blogs article</a>
  </nav>
  <nav>
    <h6 className=" text-2xl  font-semibold mt-24">Company</h6>
    <a className="link link-hover my-3 font-medium">Patnership</a>
    <a className="link link-hover font-medium" >Terms of Use</a>
    <a className="link link-hover my-3 font-medium">About us</a>
    <a className="link link-hover font-medium">Contact</a>
    <a className="link link-hover my-3 font-medium">Jobs</a>
    <a className="link link-hover font-medium"  >Press kit</a>
  </nav>
  <nav>

   
    <h6 className="text-2xl font-semibold mt-24">Legal</h6>
    <a className="link link-hover my-3 font-medium">Terms of use</a>
    <a className="link link-hover font-medium">Privacy policy</a>
    <a className="link link-hover my-3 font-medium">Cookie policy</a>
   
  </nav>
  
  <form>
  
    <h6 className="text-2xl mt-20">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered join-item" />
        <button className="btn btn- join-item">Subscribe</button>
      </div>
    </fieldset>
    <aside className='mt-3'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Movie Portal Industry</p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  </form>
</footer>
    </div>
  )
}
