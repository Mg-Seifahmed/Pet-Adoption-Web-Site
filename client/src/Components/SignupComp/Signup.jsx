import React, {useState} from 'react';
import './Signup.css';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import { SiPetsathome } from "react-icons/si";
import { IconContext } from "react-icons";
import { MdAlternateEmail } from "react-icons/md";
import axios from "axios";


const Signup = () => {

  const navigate = useNavigate();

  const [fullNamee, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const Log = (e) =>
  {
      e.preventDefault();

      const url = 'http://localhost:3001/auth/register';
      const data = 
      {
          fullName: fullNamee,
          email : email,
          password : pass

      }

      axios.post(url, data)
      .then((res) => 
      {
          const dt = res.data;
          console.log(dt);
          if(dt == "used")
            {
                alert("Email Already in use Exist");
            }
            else
            {
                alert("User Created");
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
        <h1>Welcome To PetsAtHome</h1>
        
        <div className='input-box'>
                <input type="text" placeholder='FullName' onChange={(e) => setFullName(e.target.value)} required />
                <FaUser className='icon' />
            </div>
        
            <div className='input-box'>

                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                <MdAlternateEmail className='icon' />

            </div>
        <div className='input-box'>

            <input type="text" placeholder='Password' onChange={(e) => setPass(e.target.value)} required />
            <RiLockPasswordFill className='icon'/>
        </div>  
        <div className='input-box'>

            <input type="text" placeholder='Repeat Password' required />
            <RiLockPasswordFill className='icon'/>
        </div>  
           
        
        <button type = "sumbit"  onClick={(e) => Log(e)}>Signup</button>

        <div className='register-link'>

        <p>Already Have an Accoutn?
        <Link to='/login'>Login</Link> </p>
        </div>



    </form> 

</div>
  )
}

export default Signup