import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='usercontainer'>
        <div className='wrapper2'>
          <h1>
            Published:
          </h1>
        </div>
        <div className='wrapper2'>
          <h1>
            Your Adoptions:
          </h1>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
