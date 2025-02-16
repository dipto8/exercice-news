import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Home/Navbar/Navbar";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  // console.log("Login page Location", location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" ">
      <div className=" mr-48  py-6">
        <Navbar></Navbar>
      </div>

      <div className=" hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>

          <div className="card  w-full max-w-sm shadow-xl bg-base-100">
            <form onSubmit={handleLogin} className=" card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-success -mb-3">Login</button>
              </div>
            </form>

            <p className=" text-center mb-4 ">
              {" "}
              Don't have an account?
              <Link to="/register" className="text-orange-500 ml-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
