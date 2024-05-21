import React from 'react'
import './postitem.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Postcard = ({ name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, breed, publisher, pEmail }) => {
    const shortdesc = description.length > 150 ? description.substr(0, 150) + '...' : description;
    return (
        <article className='post'>
            <Link to={`/admin/${name}`} state={{ name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, breed, publisher, pEmail }}>
                <div className='postthumbnail'>
                    <img className='cardimg' src={img} />
                </div>
                <div className='postcontent'>
                    <h2 className='cardtitle'> {name}</h2>
                    <p>{shortdesc}</p>
                    <div className='postfooter'>
                        <button className='cardbutton3'>
                            Details
                        </button>
                    </div>
                </div>
            </Link>
        </article >
    )
}

export default Postcard