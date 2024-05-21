import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='wrapper2'>
    <div className='lol'> 
      <h1 className='profile'>Profile</h1>
      <form className='form'>
        <input 
          type='text' 
          placeholder='Username' 
          className='user' 
          id='username'
        />
        <input 
          type='text' 
          placeholder='E-mail' 
          className='user' 
          id='email'
        />
        <div className='password-container'>
          <input 
            id="pass" 
            type={showPassword ? "text" : "password"} 
            value={password} 
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)}
            className='user'
          />
          <span 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className='toggle-password'
          >
            {showPassword ? "Hide" : "Show"}
          </span>
          </div>
          <button className='buttonn'>Update Info</button>

          <div className='aa'>
            <span > Delete Account</span>
            <span>Sign Out</span>
          </div>
       
      </form>      
    </div>
    </div>
  );
}

export default UserProfile;
