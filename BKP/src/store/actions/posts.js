import {
    // SET_POSTS,
    // ADD_COMMENT,
    // CREATING_POST,
    // POST_CREATED
    ADD_POST
} from './actionTypes'
// import { setMessage } from './message'
// import axios from 'axios'

export const addPost = post => {
    return  {
        type: ADD_POST,
        payload: post
    }
}

// export const addComment = payload => {
//     return (dispatch, getState) => {
       
//     }
// }

// export const setPosts = posts => {
   
// }

// export const fetchPosts = () => {
//     return dispatch => {
        
//     }
// }

// export const creatingPost = () => {
//     return {
//         type: CREATING_POST
//     }
// }

// export const postCreated = () => {
//     return {
//         type: POST_CREATED
//     }
// }