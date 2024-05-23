import React, { useState } from 'react';
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

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passMatchError, setPassMatchError] = useState('');
  const [emailUse, setEmailUse] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordMatch = (password, repeatPassword) => {
    if(password == "")
      {
        return false;
      }
    return password === repeatPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError('');
    setPassMatchError('');
    setEmailUse('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }


    if (!validatePasswordMatch(pass, repeatPass)) {
      setPassMatchError('Passwords do not match');
      return;
    }

    const url = 'http://localhost:3001/auth/register';
    const data = {
      fullName: fullName,
      email: email,
      password: pass
    };

    axios.post(url, data)
      .then((res) => {
        const dt = res.data;
        console.log(dt);
        if (dt === "used") {
          setEmailUse("Email already in use");
        } else {
          localStorage.setItem("user", JSON.stringify(dt));
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='wrapper'>
      <form>
        <div className='loginicon'>
          <IconContext.Provider value={{ className: "shared-class", size: 60 }}>
            <SiPetsathome />
          </IconContext.Provider>
        </div>
        <h1>Welcome To PetsAtHome</h1>

        <div className='input-box'>
          <input type="text" placeholder='Full Name' onChange={(e) => setFullName(e.target.value)} required />
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
          <MdAlternateEmail className='icon' />
          {emailError && <p className="error-message">{emailError}</p>}
          {emailUse && <p className="error-message">{emailUse}</p>}
        </div>

        <div className='input-box'>
          <input type="password" placeholder='Password' onChange={(e) => setPass(e.target.value)} required />
          <RiLockPasswordFill className='icon' />
        </div>

        <div className='input-box'>
          <input type="password" placeholder='Repeat Password' onChange={(e) => setRepeatPass(e.target.value)} required />
          <RiLockPasswordFill className='icon' />
          {passMatchError && <p className="error-message">{passMatchError}</p>}
        </div>

        <button type="submit" onClick={handleSubmit}>Signup</button>

        <div className='register-link'>
          <p>Already Have an Account? <Link to='/login'>Login</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
