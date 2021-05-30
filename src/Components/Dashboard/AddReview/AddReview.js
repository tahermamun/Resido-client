import axios from 'axios';
import React, { useState } from 'react';


const AddReview = () => {
    const [review, setReview] = useState({})
    const [imageURL, setImageURL] = useState(null)



    const handleBlur = e => {
        const newReview = { ...review }
        newReview[e.target.name] = e.target.value
        setReview(newReview)
    }
    console.log(review)



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
        const newReview = { ...review }
        newReview.imageURL = imageURL
        // newReview.AdminEmail = loggedInUser.email
        setReview(newReview)

        const url = 'https://evening-temple-69510.herokuapp.com/addReview';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
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
                        <label className='global-form-input-label' for="house-title">User Name</label>
                        <input onBlur={handleBlur} name='reviewUserName' type="text" id="house-title" className='global-form-input' placeholder="Enter Title" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-location">User Profession</label>
                        <input onBlur={handleBlur} name='reviewUserProfession' type="text" id="house-location" className='global-form-input' placeholder="Enter Location" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-price">Review</label>
                        <textarea onBlur={handleBlur} name='review' rows='8' type="text" id="house-price" className='global-form-input' placeholder="Enter Price" />
                    </div>
                    <div>
                        <label for="my-file" className='global-form-input-label'>User Image for Review</label>
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

export default AddReview;