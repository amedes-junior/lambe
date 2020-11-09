import {
    SET_POSTS,
    ADD_POST,
    ADD_COMMENT,
    CREATING_POST,
    POST_CREATED
} from '../actions/actionTypes'

const initialState = {
        posts: [{
            id: Math.random(),
            nickname: "Rafael Pereira Filho",
            email: "rafaelpf@gmail.com",
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: "Jonh Ray Sheldon",
                comment: "Stuning!!"
            }, {
                 nickname: "Ana Júlia Arruda",
                 comment: "Foto linda ! Onde foi tirada."
            }]
        }, {
             id: Math.random(),
             nickname: "Francisco Leandro Lima",
             email: "franciscolm@gmail.com",
             image: require('../../../assets/imgs/bw.jpg'),
             comments: []
        }]

    //isUploading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ... initialState,
                posts: state.posts.concat({
                    ... action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map( post => {
                    if (post.id == action.payload.postId){
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                    action.payload.comment
                            )
                        }
                        else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        // case SET_POSTS:
        //     return {
        //         ...state,
        //         posts: action.payload
        //     }
        // case ADD_COMMENT:
        //     return {
        //         ...state,
        //         posts: state.posts.map(post => {
        //             if (post.id === action.payload.postId) {
        //                 if (post.comments) {
        //                     post.comments = post.comments.concat(
        //                         action.payload.comment
        //                     )
        //                 } else {
        //                     post.comments = [action.payload.comment]
        //                 }
        //             }
        //             return post
        //         })
        //     }
        // case CREATING_POST:
        //     return {
        //         ...state,
        //         isUploading: true
        //     }
        // case POST_CREATED:
        //     return {
        //         ...state,
        //         isUploading: false
        //     }
        default:
            return state
    }
}

export default reducer