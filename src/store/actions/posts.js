// import {
//     // SET_POSTS,
//     // ADD_COMMENT,
//     // CREATING_POST,
//     // POST_CREATED
//     ADD_POST, ADD_COMMENT
// } from './actionTypes'
// // import { setMessage } from './message'
// import axios from 'axios'

// export const addPost = post => {
//     return dispatch => {
//         axios.post('/posts.json', { ...post })
//             .catch(err => console.log(err))
//             .then(res => console.log(res.data))
//     }
//     // return  {
//     //     type: ADD_POST,
//     //     payload: post
//     // }
// }

// export const addComment = payload => {
//     return {
//         type: ADD_COMMENT,
//         payload: payload
//     }
// }

import {
    POST_CREATED,CREATING_POST, ADD_COMMENT, SET_POSTS
} from './actionTypes'
// import { setMessage } from './message'
import axios from 'axios'

export const addPost = post => {

    // return dispatch => {
    //     axios.post('/posts.json', { ...post })
    //         .catch(err => console.log(err))
    //         .then(res => console.log(res.data))
    // }

    return dispatch => {
       dispatch(creatingPost())
       axios({
           url: 'uploadImage',
           baseURL: 'https://us-central1-lambe-7ef95.cloudfunctions.net/uploadImage',
           method: 'post',
           data: {
               image: post.image.base64
           }
       })
            .catch(err => console.log(err))
            .then(resp => {
                post.image = resp.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .catch(err => console.log(err))
                    .then(res => {
                       //console.log(res.data)                        
                       dispatch(fetchPosts()) 
                       dispatch(postCreated())
            })
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

export const setPosts = posts => {
    return{
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawPosts=res.data
                const posts = []
                for(let key in rawPosts){
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }
                dispatch(setPosts(posts.reverse()))
            })
    }

}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}

