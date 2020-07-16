import * as actionTypes from './actionTypes';

export const getPosts = (dispatch, getState ) => {
    
    dispatch({ type: actionTypes.POSTS_REQ});
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then( res => {
            dispatch({ type: actionTypes.POSTS_LOADING })
            return res.json();
        })
        .then( res => {
            dispatch({ type: actionTypes.POSTS_RES, payload: res });
        })
        .catch( err => {
            dispatch({ type: actionTypes.POSTS_ERR, error: err });
        })    

    // dispatch({
    //     type: PROMISE,
    //     actions: [
    //         POSTS_REQ,
    //         POSTS_RES,
    //         POSTS_ERR
    //     ],
    //     promise: fetch(`https://jsonplaceholder.typicode.com/posts`)
    // });

};