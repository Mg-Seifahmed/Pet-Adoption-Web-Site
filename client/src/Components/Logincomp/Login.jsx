import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiPetsathome } from "react-icons/si";
import { IconContext } from "react-icons";

const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
        <div className='loginicon'>
        <IconContext.Provider value={{ className: "shared-class", size:60}}>
        <SiPetsathome />
        </IconContext.Provider>
        </div>
        <h1>Welcome Back</h1>
        
        
        
            <div className='input-box'>

                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />

            </div>
        <div className='input-box'>

            <input type="text" placeholder='Password' required />
            <RiLockPasswordFill className='icon'/>


        </div>  
        <div className='remember-forgot'>

           <label><input type="checkbox"   /> Remember me </label>
           <a href="#">Forgot Password</a>

        </div>      
        
        <button type = "sumbit">Login</button>

        <div className='register-link'>

        <p>Dont have an account?
        <a href="/Signup">Register</a> </p>
        </div>



    </form> 

</div>
  )
}

export default Login