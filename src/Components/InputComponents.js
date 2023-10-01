import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addText, decrementCounter, incrementCounter } from './../Redux/actions';

function InputComponent() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleAddClick = () => {
        if (inputText.trim() !== '') {
            dispatch(addText(inputText));
            setInputText('');
        }
    };

    const handleIncrementClick = () => {
        dispatch(incrementCounter());
    };

    const handleDecrementClick = () => {
        dispatch(decrementCounter());
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Введите текст"
            />
            <button onClick={handleAddClick}>Добавить</button>

            <div>
                <button onClick={handleIncrementClick}>+</button>
                <span>{counter}</span>
                <button onClick={handleDecrementClick}>-</button>
            </div>
        </div>
    );
}

export default InputComponent;
