import { 
    //ADD_POST,
    ADD_COMMENT,
    ADD_LIKE,
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
    //CREATING_POST POST_CREATE
} from '../actions/actionTypes'
 
const initialState = {
    posts: [],
    isUploading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        // case ADD_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.concat({
        //             ...action.payload
        //         })
        //     }
        case SET_POSTS:
            return{
                ...state,
                posts: action.payload
            }
        case ADD_COMMENT:
            return{
                ...state,
                posts: state.posts.map(post=>{
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(
                               action.payload.comment 
                            )
                        }else{
                            post.comments=[action.payload.comment]
                        }
                    }
                    return post
                })
            }
        case ADD_LIKE:
            return{
                ...state,
                posts: state.posts.map(post=> {
                    if(post.id === action.payload.postId) {                        
                        post.likes=[action.payload.like]                        
                    }
                    return post
                })
            }
        case CREATING_POST:
            return{
                ...state,
                isUploading: true
            }

        case POST_CREATED:
            return{
                ...state,
                isUploading: false
            }

        default: 
            return state
    }
}

export default reducer