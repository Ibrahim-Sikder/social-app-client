import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';

const SignUp = () => {
  const [user, setUser] = useState({})
    const {createUser,googleSignIn} = useContext(AuthContext)
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const password = form.password.value;
        console.log(user)

        const userInfo = {
          name,
          email,
          university,
          address,
        }

        fetch('http://localhost:5000/userInfo',{
          method : 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)

      })

      .then(res=> res.json())
      .then(data=>{
          if(data.acknowledged){
              alert('Post create successfully')
          
          }
      })


        
        // create user 
        createUser(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            form.reset()
            alert('User created successfully')
        })
        .catch((error)=>{
            console.error('error', error)
        })

    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result) =>{
            const user = result.user ;
            console.log(user);
        })
        .catch((error)=>{
            console.log(error)
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
          <input name='name' type="text" placeholder="Your name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <input  name='email' type="email" placeholder="Email address or phone number" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <input  name='university' type="text" placeholder="University" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <input name='address' type="text" placeholder="Your address" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <input  type="password" name='password' placeholder="Password" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#166FE5] capitalize" >Sign Up</button>
        </div>
        <hr className='my-5'/>
        <button onClick={handleGoogleSignIn} className='btn bg-[#36A421] w-1/2 mx-auto capitalize text-xs hover-none'>LogIn With Google </button>
      
         <p>Already have an account ? <Link to='/login'>Login now</Link></p>

      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;