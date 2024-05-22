import React, { useState, useEffect } from 'react'
import Postcard from '../postitem/Postcard'
import './Adminpanel.css'
import axios from 'axios'




const AdminPanel = () => {



  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.post('http://localhost:3001/pet/getPet');
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
    <div>
      <h1 className='petlistingtitle'>Admin panel</h1>
      <section className='posts'>
        <div className='posts_container'>
          {
            posts.map(({ breed, name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health, publisher, pEmail, type }) =>
              <Postcard key={name} breed={breed} img={img} name={name} description={description} characteristics={characteristics} adult={adult}
                houseTrained={houseTrained} spayedNeutered={spayedNeutered} color={color} gender={gender} health={health} publisher={publisher} pEmail={pEmail} type={type} />)
          }
        </div>
      </section>
    </div>
  )
}

export default AdminPanel