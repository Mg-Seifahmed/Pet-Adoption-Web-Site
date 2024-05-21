import React from 'react'
import './Search.css'
import { FaArrowDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div className='Search'>
         
    <div className = "search-bar">
        <div className = "dropdown">
            <span>Everything</span>
            <FaArrowDown />

            <ul className='dropdown-list'>
        <li className='dropdown-list-item'>Show All</li>
        <li className='dropdown-list-item'>Dogs and Puppies</li>
        <li className='dropdown-list-item'>Cats and Kittens</li>
        <li className='dropdown-list-item'>Other Pets</li>
    </ul>
       </div> 
       <div className = "search-box">
        <input type ='text' id='search-input' placeholder='Start Adopting...'>

        </input>
         <FaSearch />
    </div>

    </div>


    
 
    </div>
  )
}

export default Search