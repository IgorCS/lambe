import {
    // SET_POSTS,
    // ADD_COMMENT,
    // CREATING_POST,
    // POST_CREATED
    ADD_POST, ADD_COMMENT
} from './actionTypes'
// import { setMessage } from './message'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios.post('/posts.json', { ...post })
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
    // return  {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}
