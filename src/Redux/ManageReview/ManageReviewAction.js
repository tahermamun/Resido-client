import { FETCH_MANAGE_REVIEW } from './ManageReviewType'
import axios from 'axios'

export const fetchManageReviewSuccess = (reviews) => {
    return {
        type: FETCH_MANAGE_REVIEW,
        payload: reviews
    }
}

export const fetchManageReview = () => {
    return (dispatch) => {
        axios.get('https://evening-temple-69510.herokuapp.com/reviews')
            .then(res => {
                console.log(res.data, 'review')
                dispatch(fetchManageReviewSuccess(res.data))
            })
            .catch(error => {

            })
    }
}