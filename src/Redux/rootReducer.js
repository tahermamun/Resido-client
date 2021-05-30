import { combineReducers } from 'redux'

import manageRentHouseReducer from './ManageRentHouse/ManageRentHouseReducer'
import manageReviewReducer from './ManageReview/ManageReviewReducer'


const rootReducer = combineReducers({
    rentHouse: manageRentHouseReducer,
    review: manageReviewReducer


})

export default rootReducer;