import React from 'react';

function Post({ post }) {
    // 비구조화 할당
    const { title, body } = post;
    console.log('title : ', title);
    console.log('body : ', body);
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default Post;
