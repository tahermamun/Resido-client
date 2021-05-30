import {
    FETCH_MANAGE_RENT_HOUSE_REQUEST,
    FETCH_MANAGE_RENT_HOUSE_SUCCESS,
    FETCH_MANAGE_RENT_HOUSE_FAILURE
} from './ManageRentHouseType'
import axios from 'axios'


export const fetchManageRentHouseRequest = () => {
    return {
        type: FETCH_MANAGE_RENT_HOUSE_REQUEST
    }
}

export const fetchManageRentHouseSuccess = (rentHouses) => {
    return {
        type: FETCH_MANAGE_RENT_HOUSE_SUCCESS,
        payload: rentHouses

    }
}

const fetchManageRentHouseFailure = (error) => {
    return {
        type: FETCH_MANAGE_RENT_HOUSE_FAILURE,
        payload: error
    }
}

export const fetchManageRentHouse = () => {
    return (dispatch) => {
        dispatch(fetchManageRentHouseRequest)
        axios.get('https://evening-temple-69510.herokuapp.com/rentHouse')
            .then(res => {
                console.log(res, 'manage data')
                const rentHouses = res.data
                dispatch(fetchManageRentHouseSuccess(rentHouses))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchManageRentHouseFailure(errorMessage))
            })
    }
}
