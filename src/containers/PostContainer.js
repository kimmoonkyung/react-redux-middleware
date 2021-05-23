import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost, goToHome } from '../modules/posts';

// 라우터를 통해 postId를 받아온다.
function PostContainer({ postId }) {
    // 루트 리듀서(state[modules/index.js] 안의 posts[combineReducers]의 post[modules/posts 의 initialState 기본 상태])
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId] || reducerUtils.initial(),
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(getPost(postId));
    }, [postId, dispatch, data]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생</div>;
    if (!data) return null;

    return (
        <>
            <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
            <Post post={data} />
        </>
    );
}

export default PostContainer;
