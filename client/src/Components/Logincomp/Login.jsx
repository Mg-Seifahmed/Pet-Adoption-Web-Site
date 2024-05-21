import React, {useState} from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiPetsathome } from "react-icons/si";
import { IconContext } from "react-icons";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();



  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [logError, setLogError] = useState('')


  const Log = (e) =>
    {
        e.preventDefault();
        setLogError('');
  
        const url = 'http://localhost:3001/auth/login';
        const data = 
        {
            email : email,
            password : pass
  
        }
  
        axios.post(url, data)
        .then((res) => 
        {
            const dt = res.data;
            console.log(dt);
            if(dt == "not found")
              {
                 
                  setLogError("Email or Password Do not match")
              }
              else
              {
                  localStorage.setItem("user", JSON.stringify(dt));
                  navigate('/');
  
              }
            
        })
        .catch((error)=>
        {
            console.log(error);
        })
    }
  


  
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

                {logError && <p className="error-message">{logError}</p>}
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                <FaUser className='icon' />

            </div>
        <div className='input-box'>

            <input type="text" placeholder='Password' onChange={(e) => setPass(e.target.value)} required />
            <RiLockPasswordFill className='icon'/>


        </div>  
        <div className='remember-forgot'>

           <label><input type="checkbox"   /> Remember me </label>
           <a href="#">Forgot Password</a>

        </div>      
        
        <button type = "sumbit" onClick={(e) => Log(e)}>Login</button>

        <div className='register-link'>

        <p>Dont have an account?
        <Link to="/Signup">Register</Link> </p>
        </div>



    </form> 

</div>
  )
}

export default Login