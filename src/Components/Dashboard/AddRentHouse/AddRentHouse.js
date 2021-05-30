import axios from 'axios';
import React, { useState } from 'react';
import './AddRentHouse.scss'

const AddRentHouse = () => {
    const [rentHouse, setRentHouse] = useState({})
    const [imageURL, setImageURL] = useState(null)



    const handleBlur = e => {
        const newRentHouse = { ...rentHouse }
        newRentHouse[e.target.name] = e.target.value
        setRentHouse(newRentHouse)
    }
    console.log(rentHouse)


    const handleFileChange = (event) => {
        console.log(event.target.files)
        const imageData = new FormData()
        imageData.set('key', '59b9f92bf1b5d3036dd00cceba773135')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }

    const handleSubmit = (e) => {
        const newRentHouse = { ...rentHouse }
        newRentHouse.imageURL = imageURL
        // newRentHouse.AdminEmail = loggedInUser.email
        setRentHouse(newRentHouse)

        const url = 'https://evening-temple-69510.herokuapp.com/addHouse';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRentHouse)
        }).then(res => {
            console.log(res, 'ami')
        })


        e.preventDefault();
        e.target.reset();
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='global-form' action="">

                <div className='global-form-container'>
                    <div>
                        <label className='global-form-input-label' for="house-title">House Title</label>
                        <input onBlur={handleBlur} name='houseTitle' type="text" id="house-title" className='global-form-input' placeholder="Enter Title" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-price">Price</label>
                        <input onBlur={handleBlur} name='price' type="text" id="house-price" className='global-form-input' placeholder="Enter Price" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-location">Location</label>
                        <input onBlur={handleBlur} name='location' type="text" id="house-location" className='global-form-input' placeholder="Enter Location" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-no-bedrooms">No of Bedrooms</label>
                        <input onBlur={handleBlur} name='bedrooms' type="text" id="house-no-bedrooms" className='global-form-input' placeholder="Enter Bedrooms" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-no-bathrooms">No of Bathrooms</label>
                        <input onBlur={handleBlur} name='bathrooms' type="text" id="house-no-bathrooms" className='global-form-input' placeholder="Enter Bathrooms" />
                    </div>
                    <div>
                        <label for="my-file" className='global-form-input-label'>Thumbnail</label>
                        <div className='input-file-style'>
                            <span>Upload Image</span>
                            <input onChange={handleFileChange} class="input-file" id="my-file" type="file" />
                        </div>
                    </div>
                </div>

                <div className='dashboard-global-btn-container'>
                    <button type="submit" className="dashboard-global-btn">Submit</button>
                </div>
            </form>



        </div>
    );
};

export default AddRentHouse;