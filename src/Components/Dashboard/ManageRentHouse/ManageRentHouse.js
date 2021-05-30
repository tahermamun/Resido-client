import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ManageRentHouse.scss';
import { fetchManageRentHouse, fetchManageReview } from '../../../Redux'

import { fetchUsers } from '../../../Redux'

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
            {
                rentHouses.map(house => <p>{house.houseTitle}</p>)

            }
            <hr />
             {
                reviews.map(review => <p>{review.reviewUserName}</p>)

            }


        </div>
    );
};

export default ManageRentHouse;