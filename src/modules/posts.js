import * as postsAPI from '../api/posts';
import {
    createPromiseThunk,
    handleAsyncActions,
    reducerUtils,
} from '../lib/asyncUtils';

// action.type
const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const GET_POST_BY_ID = 'posts/GET_POST_BY_ID';
const GET_POST_BY_ID_SUCCESS = 'posts/GET_POST_BY_ID_SUCCESS';
const GET_POST_BY_ID_ERROR = 'posts/GET_POST_BY_ID_ERROR';

// action 생성 함수, 생략 가능 -> thunk에서 직접 작성하여 디스패치하는 형태로 작성해도 상관 없음
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST_BY_ID, postsAPI.getPostById);

// 기본 상태
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
const getPostByIdReducer = handleAsyncActions(GET_POST_BY_ID, 'post');

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
        default:
            return state;
    }
}
