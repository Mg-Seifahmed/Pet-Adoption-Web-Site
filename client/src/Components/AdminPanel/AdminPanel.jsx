import React, { useState } from 'react'
import Postcard from '../postitem/Postcard'
import Thumbnail1 from './cat3.jpg'
import './Adminpanel.css'

const DUMMYPOST = [
    {
        name: 'cat1',
        characteristics: ' short and fluffy',
        img: 'cat3.jpg',
        description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
        gender: 'male',
        color: 'black',
        adult: 1
    },
    {
        name: 'cat2',
        characteristics: ' tall and stupid',
        img: 'cat3.jpg',
        description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
    },
    {
        name: 'cat2',
        characteristics: ' tall and stupid',
        img: 'cat3.jpg',
        description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
    },
    {
        name: 'cat2',
        characteristics: ' tall and stupid',
        img: 'cat3.jpg',
        description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
    }
]

const AdminPanel = () => {
    const [posts, setPosts] = useState(DUMMYPOST)
    return (
        <div>
            <h1 className='petlistingtitle'>Admin panel</h1>
            <section className='posts'>
                <div className='posts_container'>
                    {
                        posts.map(({ breed, name, characteristics, img, description, adult, houseTrained, spayedNeutered, color, gender, health }) =>
                            <Postcard key={name} breed={breed} img={img} name={name} description={description} characteristics={characteristics} adult={adult}
                                houseTrained={houseTrained} spayedNeutered={spayedNeutered} color={color} gender={gender} health={health} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default AdminPanel