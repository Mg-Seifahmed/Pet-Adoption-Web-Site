import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {


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
    window.location.reload();
  };


  return (
    <nav>
        <div>
          <h1>PetFindEgy</h1>
        </div>
      <ul class="menu">
        <li><a>Adopt or get involved</a></li>
        <ul class="submenu">
            <li><a>About PetFindEgy</a></li>
            <li><a>Animal Shelters & Rescues</a></li>
        </ul>
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
        {user ? (
          <li><a>welcome {user.fullName}</a></li>
                        
                    ) : null}
        
        
      </ul>
      {user ? (
                        <div>
                          <button onClick={handleLogout}><span>Logout</span></button>
                        </div>
                    ) : (
                      <div>
                      <Link to="/signup"> <button><span>Signup</span></button></Link>
                      <Link to="/login"> <button><span>Login</span></button></Link>
                      </div>
                    )}
      
    </nav>
  )
}

export default Navbar