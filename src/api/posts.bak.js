// n 밀리세컨즈 동안 기다려 주는 (뒤에 실행되는) 함수
// sleep(1000).then(() => console.log('HI'));
// 1초 뒤 호출됨
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body }
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어 학습 !',
        body: '리덕스 미들웨어를 직접 만들어보면 이해가 쉽나?..',
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다.',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해보자',
    },
    {
        id: 3,
        title: 'redux-saga도 배울거임',
        body: 'redux-saga로 비동기 작업을 처리하는것도 배울거임',
    },
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find((post) => post.id === id);
};
