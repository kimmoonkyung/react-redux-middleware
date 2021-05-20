import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseAsync, increaseAsync } from '../modules/counter';

// 컴포넌트 카운터를 불러오고
// 리덕스 스토어 안의 값을 가져와야 하고 useSelector
// 액션도 디스패치 한다. useDispatch
function CounterContainer() {
    const number = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync());
    };
    const onDecrease = () => {
        dispatch(decreaseAsync());
    };

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
}

export default CounterContainer;
