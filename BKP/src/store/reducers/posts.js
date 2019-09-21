import { ADD_POST } from '../actions/actionTypes'
 
const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Géseias Moura Filho',
        email: 'geseias@mail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'Ticiane Carvalho Silva',
            comment: 'postando esta foto!'
        }, {
            nickname: 'Laura Carvalho',
            comment: 'Postando esta foto agora ó titia Tici!!!'            
        }]
    }, {
        id: Math.random(),
        nickname: 'Jerusa Moura Filho',  
        email: 'jerusa@mail.com',  
        image: require('../../../assets/imgs/bw.jpg'),  
        comments: [] 
    }]

}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer