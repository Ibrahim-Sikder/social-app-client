import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';

const Login = () => {
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            form.reset()
            alert('Login succussfully')
            navigate('/')
        })
        .catch((error)=>{
            console.error('error', error)
        })
    }
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-[#166FE5]">Facebook </h1>
      <p className="py-6">Social media help you connect and share other poeple in your life.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <input type="email" name='email' placeholder="Email address or phone number" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#166FE5] capitalize" >Log In</button>
        </div>
        <small className=" text-center">
            <a href="#" className="text-center label-text-alt link link-hover text-[#166FE5]">Forgot password?</a>
          </small>
          <hr className='mt-5'/>
          <Link to='/signup' className='btn bg-[#36A421] w-1/2 mx-auto capitalize text-xs hover-none'>Create an account </Link>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;