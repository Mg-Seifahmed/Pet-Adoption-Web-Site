import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Postcard from '../Components/postitem/Postcard'
import './dogpage.css'
import axios from 'axios'


const CustomPage = () => {

    const location = useLocation();
  const [query, setQuery] = useState(location.state?.query || '');
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({
    gender: {
      male: false,
      female: false,
    },
    color: {
      black: false,
      brown: false,
      orange: false,
      white: false,
    },
    houseTrained: false,
    adult: false,
    spayedNeutered: false,
  });

    useEffect(() => {

        console.log(query);


        const fetchData = async () => {

          try {
            
            const res = await axios.post('http://localhost:3001/pet/getSearch',{searchTerm: query});
            console.log(res.data);
            setPosts(res.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [query]);

      useEffect(() => {
        if (location.state?.query) {
          setQuery(location.state.query);
        }
      }, [location.state]);

  const handleInputChange = (e) => {
    const { id, checked } = e.target;
    const [category, subcategory] = id.split('_');

    if (subcategory) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [category]: {
          ...prevFilters[category],
          [subcategory]: checked,
        },
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: checked,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3001/pet/getCustom', { searchTerm: query, ...filters });
    console.log(res.data);
    setPosts(res.data);
  };


    return (
        <>
            <div className='Search'>

                <div className='Right' >
                    <form className='Lform' onSubmit={handleSubmit}>

                        <div className='Checkk'>
                            <label className='label' >Preferred Gender
                                <div className='gender'
                                >
                                    <input type='checkbox'
                                     id='gender_male'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>Male </span>
                                    <input type='checkbox' id='gender_female'
                                        className='box'
                                        onChange={handleInputChange}></input>
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
                                    <input type='checkbox' id='color_black'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>Black </span>
                                </div>

                                <div className='color'
                                >
                                    <input type='checkbox' id='color_brown'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>Brown</span>
                                </div>

                                <div className='color'
                                >
                                    <input type='checkbox' id='color_orange'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>Orange</span>
                                </div>
                                <div className='color'
                                >
                                    <input type='checkbox' id='color_white'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>White</span>
                                </div>
                            </label>
                        </div>

                        <div className='Checkk'>

                            <label className='label'>House trained:
                                <div className='color'
                                >
                                    <input type='checkbox' id='houseTrained'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>HouseTrained </span>
                                </div>
                            </label>

                        </div>

                        <div className='Checkk'>
                            <label className='label'>Adult:
                                <div className='color'
                                >
                                    <input type='checkbox' id='adult'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>Adult </span>
                                </div>
                            </label>
                        </div>

                        <div className='Checkk'>
                            <label className='label'>Spayed/neutered:
                                <div className='color'
                                >
                                    <input type='checkbox' id='spayedneutered'
                                        className='box'
                                        onChange={handleInputChange}></input>
                                    <span>Spayed/neutered </span>
                                </div>
                            </label>
                        </div>
                        <button className='srch'> Search </button>


                    </form>

                </div>

                <div className='Left' >
                    <div>
                        <h1 className='petlistingtitle'>Your Search Results: </h1>
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

export default CustomPage