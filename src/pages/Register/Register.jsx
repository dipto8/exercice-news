import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar';

export default function Register() {
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,name)
    }
  return (
   <div>
     <Navbar></Navbar>

    <div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left ">
        <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
      

      <div className="card  w-full max-w-sm shadow-xl bg-base-100">
        <form onSubmit={handleRegister} className=" card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary -mb-3">Register</button>
          </div>
        </form>
            
        <p className=" text-center mb-4 "> Already have an account!
            <Link className="text-orange-500 ml-1" to='/login'>Login</Link>
        </p>
      </div>
   
  </div>
  </div>
</div>
  )
}
