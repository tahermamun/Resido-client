import { FETCH_MANAGE_REVIEW } from './ManageReviewType'

const initialState = {
    reviews: [],
}

const manageReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MANAGE_REVIEW: return {
            ...state,
            reviews: action.payload

        }
        default: return state
    }
}
export default manageReviewReducer;