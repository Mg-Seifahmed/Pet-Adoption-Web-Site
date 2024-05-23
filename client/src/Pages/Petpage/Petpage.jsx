import React from 'react'
import './petpage.css'
import { useLocation } from 'react-router-dom';
import { BsDot } from "react-icons/bs";


const Petpage = () => {
    const location = useLocation();
    const { name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, breed } = location.state;

    return (
        <>
            <h1 className='petname'>Introducing: {name}</h1>
            <div className='petimagemain'>
                <img className='petimage' src={'/' + img} />
            </div>
            <div className='split'>
                <div className='petcontentmain'>
                    <h1 >{name}</h1>
                    <h2 className='petbreed'>{breed && <span>{breed} <BsDot /> </span>}  {color}</h2>

                    <hr></hr>
                    <h2 className='petbreed'>{adult && <span>{adult}  <BsDot /> </span>} {gender && <span>{gender} <BsDot /></span>}  {houseTrained && <span>{houseTrained} <BsDot /></span>}  {spayedNeutered && <span>{spayedNeutered} </span>}</h2>

                    <hr></hr>

                    <h1 className='petbreed' >
                        About
                    </h1>

                    <h2 style={{ color: '#40c9ff' }}>Characteristics </h2>
                    <h2>{characteristics}</h2>
                    <br />

                    <h2 style={{ color: '#40c9ff' }}>Health </h2>
                    <h2>{health}</h2>
                    <hr style={{ margin: 20 }} />
                    <h1 className='petbreed' >Meet {name}</h1>
                    <h3>{description}</h3>

                </div>
                <div className='petadoptmain'>
                    <h2 className='petadopth2'>Looking to adopt {name}?</h2>
                    <div className='postfooter'>
                        <button className='cardbutton3'>
                            Start the Adoption Process
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Petpage