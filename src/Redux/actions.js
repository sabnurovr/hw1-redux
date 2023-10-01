import { ADD_TEXT, DECREMENT_COUNTER, INCREMENT_COUNTER } from './reducers';

export const addText = (text) => ({
    type: ADD_TEXT,
    payload: text,
});

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER,
});
