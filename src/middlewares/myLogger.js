const myLogger = (store) => (next) => (action) => {
    // 액션 디스패치 될때 콘솔 출력
    console.log(action);
    console.log('\tPrev', store.getState());
    // 액션 다음 미들웨어 혹은 다음 리듀서에 전달 하겠다.
    const result = next(action);

    // 액션이 리듀서에서 처리가 모두 된 후 그 다음 상태를 가져와서 콘솔에 출력.
    console.log('\tNext', store.getState());

    // 컨테이너에서 디스패치 되었을 때
    return result;
};

export default myLogger;
// 이 과정이 미들웨어를 벌써 다 만든거다. 진짜 ?
