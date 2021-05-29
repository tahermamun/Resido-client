import React from 'react';
import './AddRentHouse.scss'

const AddRentHouse = () => {
    return (
        <div>
            <form className='global-form' action="">

                <div className='global-form-container'>
                    <div>
                        <label className='global-form-input-label' for="house-title">House Title</label>
                        <input type="text" id="house-title" className='global-form-input' placeholder="Enter Title" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-price">Price</label>
                        <input type="text" id="house-price" className='global-form-input' placeholder="Enter Price" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-location">Location</label>
                        <input type="text" id="house-location" className='global-form-input' placeholder="Enter Location" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-no-bedrooms">No of Bedrooms</label>
                        <input type="text" id="house-no-bedrooms" className='global-form-input' placeholder="Enter Bedrooms" />
                    </div>
                    <div>
                        <label className='global-form-input-label' for="house-no-bathrooms">No of Bathrooms</label>
                        <input type="text" id="house-no-bathrooms" className='global-form-input' placeholder="Enter Bathrooms" />
                    </div>
                    <div class="input-file-container">
                        <label for="my-file" className='global-form-input-label'>Thumbnail</label>
                        <div className='input-file-style'>
                            <span>Upload Image</span>
                            <input class="input-file" id="my-file" type="file"  />

                        </div>
                    </div>
                </div>

                <div className='dashboard-global-btn-container'>
                    <button type="button" className="dashboard-global-btn">Submit</button>
                </div>
            </form>



        </div>
    );
};

export default AddRentHouse;