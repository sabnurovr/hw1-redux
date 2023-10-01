const initialState = {
    texts: [],
    counter: 0,
};

export const ADD_TEXT = 'ADD_TEXT';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';


export const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                texts: [...state.texts, action.payload],
            };
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};
