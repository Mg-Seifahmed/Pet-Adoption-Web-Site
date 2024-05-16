import React, { useState } from 'react'
import './petadd.css'

const PetListing = () => {
    const [files, setFiles] = useState([]);
    const handleimgsubmit = (e) => { /*this is for back end insahllah lmao*/
        if (files.length > 0 && files.length < 7) {
            const promises = [];
            for (let i = 0; i < files.length; i++) {
                promises.push(storeimage(files[i]))
            }
        }
    }
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };
    const handleImgRemove = (index) => {
        setFiles(prevFiles => prevFiles.filter((files, i) => i !== index));
    };
    return (
        <main className='maincont'>
            <h1 className='petlistingtitle'>Pet Listing</h1>
            <form className='formstyle'>
                <div className='inputcont'>
                    <input type='text' placeholder='Name' className='inputstyle' id='name' maxLength='62' minLength='2' required />
                    <input type='text' placeholder='Characteristics' className='inputstyle' id='Characteristics' required />
                    <input type='text' placeholder='Health' className='inputstyle' id='Health' required />
                    <input type='text' placeholder='Color' className='inputstyle' id='Color' required />
                    <textarea type='text' placeholder='Description' className='inputstyle' id='description' required />
                    <div className='checkboxes'>
                        <div className='checkbox'>
                            <input type='checkbox' id='adult' className='check' />
                            <span>Adult</span>
                        </div>
                        <div className='checkbox'>
                            <input type='checkbox' id='adult' className='check' />
                            <span>HouseTrained</span>
                        </div>
                        <div className='checkbox'>
                            <input type='checkbox' id='adult' className='check' />
                            <span>spayed/neutred</span>
                        </div>

                    </div>
                    <div className='checkboxes'>
                        <div className='checkbox'>
                            <input type="radio" id="male" name="gender" value="male" />
                            <label for="male">Male</label><br />
                            <input type="radio" id="female" name="gender" value="female" />
                            <label for="female">Female</label><br />
                        </div>
                    </div>
                </div>
                <div className='imagecont'>
                    <p className='imgtitle'>Images:
                        <span> The first image will be the cover (max 6)</span>
                    </p>
                    <div className='nextoeachother'>
                        <input onChange={handleFileChange/*(e) => setFiles(e.target.files)*/} className='imginput' type='file' id='images' accept='image/*' multiple />
                        <button type='button' onChange={handleimgsubmit} className='imgupload'>Upload</button>
                    </div>
                    {files.map((file, index) => (
                        <div className='imglistingcont'>
                            <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index}`}
                                className='imgstyle'
                            />
                            <button onClick={() => handleImgRemove(index)} className='deletebutton'>delete</button>
                        </div>
                    ))
                    }
                    <button className='createpetlisting'>Create Pet Listing</button>
                </div>

            </form>
        </main>


    )
}

export default PetListing