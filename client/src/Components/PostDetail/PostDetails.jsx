import React from 'react'
import { useLocation } from 'react-router-dom';
import './postdetail.css'

const PostDetails = () => {
    const location = useLocation();
    const { name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, breed } = location.state;
    console.log(img);


    return (
        <section className='post_details'>
            <div className='postdetail_container'>
                <div className='post_detail_header'>
                    <div className='post_detail_buttons'>
                        <button className='cardbutton'>
                            Accept
                        </button>
                        <button className='cardbutton2'>
                            Delete
                        </button>
                    </div>
                </div>
                <h1 className='post_header'>{name}<br />
                    <span style={{ fontSize: 20 }}>{characteristics}</span></h1>
                <div className='post_detail_thumbnail'>
                    <img className='post_detail_img' src={'/' + img} alt={name} />
                </div>
                <div className='post_details_text'>
                    <h1 style={{ fontSize: 30 }}>
                        About
                    </h1>
                    <hr style={{ margin: 5 }}></hr>
                    <br />
                    <hl className='Pet_details'> {gender} . {adult} . {houseTrained} . {spayedNeutered} </hl>
                    <br></br>

                    <br></br>
                    <hr style={{ margin: 5 }}></hr>
                    <h2> Meet {name}</h2>

                    <p className='pet_description'>{description}</p>
                </div>
            </div>
        </section>
    );
}

export default PostDetails