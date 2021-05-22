import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
    return (
        <ul>
            {
                // 각 post에 대하여 li 생성
                posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/${post.id}`}>{post.title}</Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default PostList;
