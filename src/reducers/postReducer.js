import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    loaded: false,
    data: [],
    error: null,
    counter: 10
}

const postReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.POSTS_REQ:
            return {
                ...state,
                loaded: false
            }
        case actionTypes.POSTS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.POSTS_RES:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            }
        default:
            return state
    }
}

export default postReducer;