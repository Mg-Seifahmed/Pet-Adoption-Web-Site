import React, { useState, useEffect } from 'react'
import Postcard from '../Components/postitem/Postcard'
import './dogpage.css'
import axios from 'axios'


const Dogspage = () => {


    useEffect(() => {

        const fetchData = async () => {
          try {
            const res = await axios.post('http://localhost:3001/pet/getDog');
            console.log(res.data);
            setPosts(res.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const [posts, setPosts] = useState([])
    return (
        <>
            <div className='Search'>

                <div className='Right' >
                    <form className='Lform'>

                        <div className='Checkk'>
                            <label className='label' >Preferred Gender
                                <div className='gender'
                                >
                                    <input type='checkbox' id='Male'
                                        className='box'></input>
                                    <span>Male </span>
                                    <input type='checkbox' id='Female'
                                        className='box'></input>
                                    <span>Female</span>
                                </div>

                                <div className='gender'
                                >

                                </div>


                            </label>
                        </div>

                        <div className='Checkk'>
                            <label className='label' >Preferred Color
                                <div className='color'
                                >
                                    <input type='checkbox' id='Black'
                                        className='box'></input>
                                    <span>Black </span>
                                </div>

                                <div className='color'
                                >
                                    <input type='checkbox' id='Brown'
                                        className='box'></input>
                                    <span>Brown</span>
                                </div>

                                <div className='color'
                                >
                                    <input type='checkbox' id='Ornage'
                                        className='box'></input>
                                    <span>Orange</span>
                                </div>
                                <div className='color'
                                >
                                    <input type='checkbox' id='White'
                                        className='box'></input>
                                    <span>White</span>
                                </div>
                            </label>
                        </div>

                        <div className='Checkk'>

                            <label className='label'>House trained:
                                <div className='color'
                                >
                                    <input type='checkbox' id='housetrained'
                                        className='box'></input>
                                    <span>HouseTrained </span>
                                </div>
                            </label>

                        </div>

                        <div className='Checkk'>
                            <label className='label'>Adult:
                                <div className='color'
                                >
                                    <input type='checkbox' id='adult'
                                        className='box'></input>
                                    <span>Adult </span>
                                </div>
                            </label>
                        </div>

                        <div className='Checkk'>
                            <label className='label'>Spayed/neutered:
                                <div className='color'
                                >
                                    <input type='checkbox' id='spayedneutered'
                                        className='box'></input>
                                    <span>Spayed/neutered </span>
                                </div>
                            </label>
                        </div>
                        <button className='srch'> Search </button>


                    </form>

                </div>

                <div className='Left' >
                    <div>
                        <section className='posts'>
                            <div className='posts_container'>
                                {
                                    posts.map(({ breed, name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, publisher, pEmail }) =>
                                        <Postcard key={name} breed={breed} img={img} name={name} description={description} characteristics={characteristics} adult={adult}
                                            houseTrained={houseTrained} spayedNeutered={spayedNeutered} color={color} gender={gender} health={health} publisher={publisher} pEmail={pEmail} />)
                                }
                            </div>
                        </section>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dogspage