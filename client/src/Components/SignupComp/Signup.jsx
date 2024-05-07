import React from 'react';
import './Signup.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiPetsathome } from "react-icons/si";
import { IconContext } from "react-icons";
import { MdAlternateEmail } from "react-icons/md";


const Signup = () => {
  return (
    <div className='wrapper'>
        <form action="">
        <div className='loginicon'>
        <IconContext.Provider value={{ className: "shared-class", size:60}}>
        <SiPetsathome />
        </IconContext.Provider>
        </div>
        <h1>Welcome To PetsAtHome</h1>
        
        <div className='input-box'>
                <input type="text" placeholder='FullName' required />
                <FaUser className='icon' />
            </div>
        
            <div className='input-box'>

                <input type="text" placeholder='Email' required />
                <MdAlternateEmail className='icon' />

            </div>
        <div className='input-box'>

            <input type="text" placeholder='Password' required />
            <RiLockPasswordFill className='icon'/>
        </div>  
        <div className='input-box'>

            <input type="text" placeholder='Repeat Password' required />
            <RiLockPasswordFill className='icon'/>
        </div>  
           
        
        <button type = "sumbit">Signup</button>

        <div className='register-link'>

        <p>Dont have an account?
        <a href="/login">Login</a> </p>
        </div>



    </form> 

</div>
  )
}

export default Signup