import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
        
      </ul>
      <div>
      <Link to="/signup"> <button><span>Signup</span></button></Link>
      <Link to="/login"> <button><span>Login</span></button></Link>
      </div>
    </nav>
  )
}

export default Navbar