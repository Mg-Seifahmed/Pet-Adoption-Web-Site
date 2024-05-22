import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './petadd.css'
import axios from 'axios'

const PetListing = () => {

    const navigate = useNavigate();

    const [picError, setPicError] = useState('');
    const [formError, setFormError] = useState('');

    const [imageFile, setImageFile] = useState(null);

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [health, setHealth] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [adult, setAdult] = useState(false);
    const [houseTrained, setHouseTrained] = useState(false);
    const [spayedNeutered, setSpayedNeutered] = useState(false);
    const [gender, setGender] = useState('');
    const [petType, setType] = useState('');



    const [user, setUser] = useState("");
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            setUser(userObject);
        }
    }, [location.pathname]);






    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };






    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormError('');
        setPicError('');

        const formData = new FormData();
        formData.append('image', imageFile);
        const url = 'http://localhost:3001/upload';

        try {
            const resImage = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Image uploaded successfully');
            console.log(resImage.data);
        } catch (error) {
            console.error('Error uploading image:', error);
            setPicError("you need to add a picture");
        }

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
            img: imageFile.name,
            breed: breed,
            publisher: user.fullName,
            pEmail: user.email,
            type: petType

        }




        const res = await axios.post('http://localhost:3001/pet/addPet', data);

        if (res.data == "not filled") {
            setFormError("fill the form correctly");
        }
        else {
            navigate('/');
            console.log("hehehe");
        }



    };


    const handleImgRemove = () => {
        setImageFile(null);
    };
    return (
        <main className='maincont'>
            <h1 className='petlistingtitle'>Pet Listing</h1>
            <form className='formstyle'>
                {user ? (
                    <>
                        <div className='inputcont'>
                            {formError && <p className="error-message">{formError}</p>}
                            <input type='text' placeholder='Name' className='inputstyle' id='name' maxLength='62' minLength='2' required onChange={(e) => setName(e.target.value)} />
                            <div className='checkbox pettype'>
                                <input type="radio" id="Dog" name="Pettype" value="Dog" onChange={(e) => setType(e.target.value)} />
                                <label for="male">Dog</label><br />
                                <input type="radio" id="Cat" name="Pettype" value="Cat" onChange={(e) => setType(e.target.value)} />
                                <label for="female">Cat</label><br />
                            </div>
                            <input type='text' placeholder='Breed' className='inputstyle' id='Breed' required onChange={(e) => setBreed(e.target.value)} />
                            <input type='text' placeholder='Characteristics' className='inputstyle' id='Characteristics' required onChange={(e) => setCharacteristics(e.target.value)} />
                            <input type='text' placeholder='Health' className='inputstyle' id='Health' required onChange={(e) => setHealth(e.target.value)} />
                            <input type='text' placeholder='Color' className='inputstyle' id='Color' required onChange={(e) => setColor(e.target.value)} />
                            <textarea type='text' placeholder='Description' className='inputstyle' id='description' required onChange={(e) => setDescription(e.target.value)} />
                            <div className='checkboxes'>
                                <div className='checkbox'>
                                    <input type='checkbox' id='adult' className='check' onChange={(e) => setAdult(e.target.checked)} />
                                    <span>Adult</span>
                                </div>
                                <div className='checkbox'>
                                    <input type='checkbox' id='Housetrained' className='check' onChange={(e) => setHouseTrained(e.target.checked)} />
                                    <span>HouseTrained</span>
                                </div>
                                <div className='checkbox'>
                                    <input type='checkbox' id='spayedneutred' className='check' onChange={(e) => setSpayedNeutered(e.target.checked)} />
                                    <span>spayed/neutred</span>
                                </div>

                            </div>
                            <div className='checkboxes'>
                                <div className='checkbox'>
                                    <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                                    <label for="male">Male</label><br />
                                    <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                                    <label for="female">Female</label><br />
                                </div>

                            </div>
                        </div>
                        <div className='imagecont'>
                            <p className='imgtitle'>Images:
                                <span> The first image will be the cover (max 6)</span>
                            </p>
                            <div className='nextoeachother'>
                                {picError && <p className="error-message">{picError}</p>}
                                <input onChange={handleFileChange} type='file' id='images' accept='image/*' multiple />
                            </div>
                            {imageFile && (
                                <div className='imglistingcont'>
                                    <img
                                        src={URL.createObjectURL(imageFile)}
                                        alt={`Preview`}
                                        className='imgstyle'
                                    />
                                    <button onClick={handleImgRemove} className='deletebutton'>delete</button>



                                </div>
                            )}
                            <button className='createpetlisting' onClick={handleSubmit}>Create Pet Listing</button>
                        </div>
                    </>

                ) : <p> you need to login</p>}

            </form>
        </main>


    )
}

export default PetListing