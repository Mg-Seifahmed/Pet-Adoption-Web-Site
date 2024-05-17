import React from 'react'
import './homepage.css'
import { IconContext } from "react-icons";
import { FaDog } from "react-icons/fa6"
import { FaCat } from "react-icons/fa";
import { MdPets } from "react-icons/md";



const Homepage = () => {


  const img = 'cat3.jpg';

  
  return (
    <div className='background'>

      <div className='half'>
        <div className='firsthalf'>
          <h1 className='pagetitle'>Welcome to our <span>Pet Store</span></h1>
          <br />
        </div>
        <div className='secondhalf'>
          <img src={img}></img>
        </div>
      </div>
      <div className='part2'>
        <h2 className='title'>Choose Your Pet Companion</h2>
        <div className='card-align'>
          <div className='card'>
            <div className='class-img'>
              <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                <FaDog />
              </IconContext.Provider>
            </div>
            <h2 className='card-title'>Dogs</h2>
          </div>
          <div className='card'>
            <div className='class-img'>
              <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                <FaCat />
              </IconContext.Provider>

            </div>
            <h2 className='card-title'>Cats</h2>
          </div>
          <div className='card'>
            <div className='class-img'>
              <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                <MdPets />
              </IconContext.Provider>
            </div>
            <h2 className='card-title'>Shelters and rescues</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage