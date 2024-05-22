import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './postdetail.css'
import axios from 'axios';

const PostDetails = () => {
    const location = useLocation();
    const { name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, breed, publisher, pEmail, type } = location.state;

    const navigate = useNavigate();

    const handleReject = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            pEmail: pEmail
        }


        const res = await axios.post('http://localhost:3001/pet/rejectPet',data);

        if(res.data == "Successful")
            {
                navigate('/admin');
            }
    }



    const handleAccespt = async (e) => {
        e.preventDefault();

        

        const data =
        {
            name: name,
            characteristics: characteristics,
            health: health,
            color: color,
            description: description,
            adult: adult,
            houseTrained: houseTrained,
            spayedNeutered: spayedNeutered,
            gender: gender,
            img: img,
            breed: breed,
            publisher: publisher,
            pEmail: pEmail,
            type: type

        }
        
        console.log("hehe1");

        const res = await axios.post('http://localhost:3001/pet/acceptPet',data);

        console.log(res.data);

        if(res.data == "Successful")
            {
                navigate('/admin');
            }
    }

    


    return (
        <section className='post_details'>
            <div className='postdetail_container'>
                <div className='post_detail_header'>
                    <div className='post_detail_buttons'>
                        <button onClick={(e) => handleAccespt(e)} className='cardbutton'>
                            Accept
                        </button>
                        <button onClick={(e) => handleReject(e)} className='cardbutton2'>
                        Reject
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