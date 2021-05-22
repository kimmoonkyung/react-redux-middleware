import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
    // 루트 리듀서(state[modules/index.js] 안의 posts[combineReducers]의 posts[modules/posts 의 initialState 기본 상태])
    const { data, loading, error } = useSelector((state) => state.posts.posts);

    // api 를 호출 하기 위해 dispatch 작성
    const dispatch = useDispatch();

    // 컴포넌트 처음 렌더링 될 떄 (브라우저에 마운트 될 때) api를 요청 하기 위해 useEffect 사용
    // deps의 배열이 비어 있으면 컴포넌트가 처음 렌더링 되는 순간에만 호출 된다.
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <PostList posts={data}></PostList>;
}

export default PostListContainer;
