import React, {useState, useEffect} from 'react';
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
    <nav>
      <div>
      <Link to="/">
      <IconContext.Provider value={{ className: "shared-class", size:60}}>
        <SiPetsathome />
        </IconContext.Provider>
        </Link>
      </div>
      <ul class="menu">
        <li><a>Adopt or get involved</a></li>
        <li>
          <a>Dogs And Puppies</a>
          <ul class="submenu">
            <li><a>Dog Adoption</a></li>
            <li><a>Dog Info</a></li>
          </ul>
        </li>
        <li><a>Cats and Kittens</a>
          <ul class="submenu">
            <li><a>Cat Adoption</a></li>
            <li><a>Cat Info</a></li>
          </ul>
        </li>
        <li><Link to='/Addpet'><a>Add Pet</a></Link> </li>
        
        <li><Link to='/profile'><a>Profile</a></Link> </li>
      
        {user ? (
          <li><a>welcome {user.fullName}</a></li>
                        
                    ) : null}
        

      </ul>
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
      
    </nav>
  )
}

export default Navbar