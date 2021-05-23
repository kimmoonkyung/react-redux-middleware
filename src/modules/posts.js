import * as postsAPI from '../api/posts';
import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    handleAsyncActionsById,
    reducerUtils,
} from '../lib/asyncUtils';

// action.type
const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const GET_POST_BY_ID = 'posts/GET_POST_BY_ID';
const GET_POST_BY_ID_SUCCESS = 'posts/GET_POST_BY_ID_SUCCESS';
const GET_POST_BY_ID_ERROR = 'posts/GET_POST_BY_ID_ERROR';

const CLEAR_POST = 'CLEAR_POST';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(
    GET_POST_BY_ID,
    postsAPI.getPostById,
);
export const goToHome =
    () =>
    (dispatch, getState, { history }) => {
        history.push('/');
    };

export const clearPost = () => ({ type: CLEAR_POST });

// 기본 상태
const initialState = {
    posts: reducerUtils.initial(),
    post: {},
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostByIdReducer = handleAsyncActionsById(GET_POST_BY_ID, 'post', true);

// 리듀서 작성
export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST_BY_ID:
        case GET_POST_BY_ID_SUCCESS:
        case GET_POST_BY_ID_ERROR:
            return getPostByIdReducer(state, action);
        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial(),
            };
        default:
            return state;
    }
}
