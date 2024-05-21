import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SiPetsathome } from "react-icons/si";
import { IconContext } from "react-icons";


const Navbar = () => {

  const navigate = useNavigate();


  const [user, setUser] = useState("");
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      setUser(userObject);
    }
  }, [location.pathname]);


  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };


  return (
    <>

      <div className='navbarfully'>
        <div>
          <Link to="/">
            <IconContext.Provider value={{ className: "shared-class", size: 60 }}>
              <SiPetsathome />
            </IconContext.Provider>
          </Link>
        </div>
        <nav>


          <ul class="menu">
            <li><Link to='/aboutus'><a>About Us</a></Link></li>
            <li><Link to='/dogs'>
              <a>Dogs And Puppies</a>
            </Link>
            </li>
            <li><Link to='/cats'>
              <a>Cats and Kittens</a>
            </Link>
            </li>
            <li><Link to='/Addpet'><a>Add Pet</a></Link></li>
            {user.fullName == "ZOBR" ? (
              <li><Link to='/admin'><a>Admin Panel</a></Link></li>
            ) : null}
            {user.fullName != "ZOBR" ? (
              <li><Link to='/user'><a>User Panel</a></Link></li>
            ) : null}


          </ul>

          <div class="container-input">
            <input type="text" placeholder="Search" name="text" class="input" />
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
            </svg>
          </div>

        </nav>
        {user ? (
          <li><a className='Welcometext'>welcome {user.fullName}</a></li>

        ) : null}

        {user ? (
          <div>
            <button className='navbarbutton' onClick={handleLogout}><span>Logout</span></button>
          </div>
        ) : (
          <div>
            <Link to="/signup"> <button className='navbarbutton'><span>Signup</span></button></Link>
            <Link to="/login"> <button className='navbarbutton'><span>Login</span></button></Link>
          </div>
        )}

      </div>

    </>
  )
}

export default Navbar