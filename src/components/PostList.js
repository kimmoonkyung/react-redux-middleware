import React from 'react';

function PostList({ posts }) {
    return (
        <ul>
            {
                // 각 post에 대하여 li 생성
                posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    );
}

export default PostList;
