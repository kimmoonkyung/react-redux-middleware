// type -> GET_POST, GET_POSTS 액션 / promiseCreator -> 특정 파라미터로 프로미스를 만들어주는
export const createPromiseThunk = (type, promiseCreator) => {
    // 배열 비구조화 할당 success = `${type}_SUCCESS` / error = `${type}_ERROR`
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async (dispatch) => {
        dispatch({ type });
        try {
            const payload = await promiseCreator(param);
            console.log('payload : ', payload);
            dispatch({
                type: SUCCESS,
                payload,
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
                error: true,
            });
        }
    };
};

const defaultIdSelector = (param) => param;
export const createPromiseThunkById = (
    type,
    promiseCreator,
    idSelector = defaultIdSelector,
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async (dispatch) => {
        const id = idSelector(param);
        dispatch({ type, meta: id });
        try {
            const payload = await promiseCreator(param);
            console.log('payload : ', payload);
            dispatch({
                type: SUCCESS,
                payload,
                meta: id,
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
                error: true,
                meta: id,
            });
        }
    };
};

// handleAsyncActions
// type -> action.type / key -> posts OR post
export const handleAsyncActions = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(
                        keepData ? state[key].data : null,
                    ),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                };
            default:
                return state;
        }
    };
};

// type -> action.type / key -> posts OR post
export const handleAsyncActionsById = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        const id = action.meta;
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            keepData
                                ? state[key][id] && state[key][id].data
                                : null,
                        ),
                    },
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload),
                    },
                };
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload),
                    },
                };
            default:
                return state;
        }
    };
};

// reducer 유틸 객체 생성
export const reducerUtils = {
    // initialData 기본 값 null 설정
    initial: (data = null) => ({
        data,
        loading: false,
        error: null,
    }),
    // prevState 기본 값 null 설정
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null,
    }),
    success: (data) => ({
        data,
        loading: false,
        error: null,
    }),
    error: (error) => ({
        data: null,
        loading: false,
        error,
    }),
};
