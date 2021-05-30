import {
    FETCH_MANAGE_RENT_HOUSE_REQUEST,
    FETCH_MANAGE_RENT_HOUSE_SUCCESS,
    FETCH_MANAGE_RENT_HOUSE_FAILURE
} from './ManageRentHouseType'

const initialState = {
    loading: false,
    rentHouses: [],
    error: ''
}

const manageRentHouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MANAGE_RENT_HOUSE_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_MANAGE_RENT_HOUSE_SUCCESS: return {
            ...state,
            loading: true,
            rentHouses: action.payload,
            error: ''
        }
        case FETCH_MANAGE_RENT_HOUSE_FAILURE: return {
            ...state,
            loading: false,
            rentHouses: [],
            error: action.payload
        }
        default: return state
    }

}
export default manageRentHouseReducer;


