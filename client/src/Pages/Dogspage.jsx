import React, { useState } from 'react'
import Postcard from '../Components/postitem/Postcard'
import './dogpage.css'

const dummyposts = [
    {
        breed: 'sexy',
        name: 'neural network',
        characteristics: 'a dog',
        img: 'DHOM.jpg',
        description: ' a pet',
        adult: 1,
        houseTrained: 1,
        spayedNeutered: 1,
        color: 'black',
        gender: 'Male',
        health: 'healthy'

    },
    {
        breed: 'sexy',
        name: 'neural network',
        characteristics: 'a dog',
        img: 'DHOM.jpg',
        description: ' a pet',
        adult: 1,
        houseTrained: 1,
        spayedNeutered: 1,
        color: 'black',
        gender: 'Male',
        health: 'healthy'

    },
    {
        breed: 'sexy',
        name: 'neural network',
        characteristics: 'a dog',
        img: 'DHOM.jpg',
        description: ' a pet',
        adult: 1,
        houseTrained: 1,
        spayedNeutered: 1,
        color: 'black',
        gender: 'Male',
        health: 'healthy'

    }
]

const Dogspage = () => {
    const [posts, setPosts] = useState(dummyposts)
    return (
        <>
            <div className='Search'>

                <div className='Right' >
                    <form className='Lform'>
                        <div className='Listing'>

                            <label>Search Term</label>
                            <input type='text'
                                id='searchTerm'
                                placeholder='Search...'

                            ></input>
                        </div>
                        <div className='Checkk'>
                            <label className='label' >Type
                                <div className='type'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Dogs & Puppies</span>
                                </div>

                                <div className='type'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Cats & Kittens</span>
                                </div>

                                <div className='type'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Other Pets</span>
                                </div>

                            </label>
                        </div>
                        <div className='Checkk'>
                            <label className='label' >Preferred Age
                                <div className='age'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>4 to 12 months</span>
                                </div>

                                <div className='age'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>1 to 4 years</span>
                                </div>

                                <div className='age'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>More than 4 years.. </span>
                                </div>

                            </label>
                        </div>
                        <div className='Checkk'>
                            <label className='label' >Preferred Gender
                                <div className='gender'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Male </span>
                                </div>

                                <div className='gender'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Female</span>
                                </div>


                            </label>
                        </div>

                        <div className='Checkk'>
                            <label className='label' >Preferred Color
                                <div className='color'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Black </span>
                                </div>

                                <div className='color'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Brown</span>
                                </div>

                                <div className='color'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Orange</span>
                                </div>
                                <div className='color'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>White</span>
                                </div>
                                <div className='color'
                                >
                                    <input type='checkbox' id='all'
                                        className='box'></input>
                                    <span>Mixed</span>
                                </div>
                            </label>
                        </div>

                        <div >
                            <label className='srt'>
                                Sort
                                <select id='sort_order'>

                                    <option>Best Match</option>
                                    <option>Newest Addition</option>
                                    <option>Oldetst Addition</option>
                                    <option>Randomize</option>
                                </select>
                            </label>
                        </div>


                        <button className='srch'> Search </button>


                    </form>

                </div>

                <div className='Left' >
                    <div>
                        <h1 className='petlistingtitle'>Dog page</h1>
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