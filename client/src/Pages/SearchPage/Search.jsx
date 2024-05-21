import React from 'react'
import './Search.css'
function Search() {
  return (
    <div className='Search'>

        <div className='Right' >
            <form className='Lform'>
                <div className='Listing'>

                    <label>Search Term</label>
                    <input type = 'text'
                           id='searchTerm'
                           placeholder='Search...'
                    
                    ></input>
                </div>
                <div className='Checkk'>
                    <label className='label' >Type
                        <div className='type'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Dogs & Puppies</span>
                        </div>
                        
                        <div className='type'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Cats & Kittens</span>
                        </div>

                        <div className='type'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Other Pets</span>
                        </div>

                    </label>
                </div>
                <div className='Checkk'>
                    <label className='label' >Preferred Age
                        <div className='age'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>4 to 12 months</span>
                        </div>
                        
                        <div className='age'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>1 to 4 years</span>
                        </div>

                        <div className='age'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>More than 4 years.. </span>
                        </div>

                    </label>
                </div>
                <div className='Checkk'>
                    <label className='label' >Preferred Gender
                        <div className='gender'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Male </span>
                        </div>
                        
                        <div className='gender'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Female</span>
                        </div>


                    </label>
                </div>

                <div className='Checkk'>
                    <label className='label' >Preferred Color
                        <div className='color'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Black </span>
                        </div>
                        
                        <div className='color'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Brown</span>
                        </div>

                        <div className='color'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>Orange</span>
                        </div>
                        <div className='color'
                        >
                            <input type ='checkbox' id='all'
                            className='box'></input>
                            <span>White</span>
                        </div>
                        <div className='color'
                        >
                            <input type ='checkbox' id='all'
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
            <h1>Listing Results</h1>

        </div>
        
    </div>
  )
}

export default Search