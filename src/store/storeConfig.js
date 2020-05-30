import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import messageReducer from './reducers/message'
//import likeReducer from './reducers/like'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer,
    //like: likeReducer
})

const storeConfig = () => {
    //return createStore(reducers)
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig