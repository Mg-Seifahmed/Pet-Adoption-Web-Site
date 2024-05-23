import React from 'react'
import './homepage.css'
import { IconContext } from "react-icons";
import { FaBlackTie, FaDog } from "react-icons/fa6"
import { FaCat } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { Link } from 'react-router-dom';



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
          <img className='homeimg' src={img}></img>
        </div>
      </div>
      <div className='part2'>
        <h2 className='title'>Choose Your Pet Companion</h2>
        <div className='card-align'>
          <div class="cards">

            <div class="card red">
              <Link to='/dogs'>
                <div className='class-img'>
                  <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                    <FaDog />
                  </IconContext.Provider>
                </div>
                <h2 className='card-title'>Dogs</h2>
              </Link>
            </div>


            <div class="card blue">
              <Link to='/dogs'>
                <div className='class-img'>
                  <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                    <FaCat />
                  </IconContext.Provider>

                </div>
                <h2 className='card-title'>Cats</h2>
              </Link>
            </div>


            <div class="card green">
              <Link to='/edu'>
                <div className='class-img'>
                  <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                    <MdPets />
                  </IconContext.Provider>
                </div>
                <h2 className='card-title'>Educational Content</h2>
              </Link>
            </div>

          </div>

        </div>

      </div >
    </div >
  )
}

export default Homepage