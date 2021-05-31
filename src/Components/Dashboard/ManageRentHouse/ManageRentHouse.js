import React, { useEffect } from 'react';
import './ManageRentHouse.scss';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchManageRentHouse, fetchManageReview } from '../../../Redux'

import { fetchUsers } from '../../../Redux'

import ManageRentHouseData from '../ManageRentHouseData/ManageRentHouseData';


const ManageRentHouse = () => {

    const rentHouses = useSelector(state => state.rentHouse.rentHouses)
    const reviews = useSelector(state => state.review.reviews)
    const dispatch = useDispatch()
    console.log(rentHouses, 'ami rent')
    useEffect(() => {
        dispatch(fetchManageRentHouse())
        dispatch(fetchManageReview())

    }, [dispatch])

    return (
        <div>
            <div class=" global-form" >
                <table class="table table-striped" >
                    <thead>
                        <tr>
                            <th scope="col">House Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Admin Email</th>
                            <th scope="col">Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rentHouses.map(houseData => <ManageRentHouseData houseData={houseData}></ManageRentHouseData>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {
                rentHouses.map(house => <p>{house.houseTitle}</p>)

            }
            <hr />
             {
                reviews.map(review => <p>{review.reviewUserName}</p>)

            } */}
        </div>
    );
};

export default ManageRentHouse;