import React from 'react';
import { useSelector } from 'react-redux';

function TextList() {
    const texts = useSelector((state) => state.texts);

    return (
        <div>
            {texts.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    );
}

export default TextList;
