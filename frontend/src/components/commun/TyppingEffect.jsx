import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text = '', speed = 100, pause = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (!isDeleting && index < text.length) {
            timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
        } else if (isDeleting && index > 1) { // Adjusted condition to keep the first letter
            timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, speed);
        } else if (!isDeleting && index === text.length) {
            timeoutId = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && index === 1) { // Adjusted condition to keep the first letter
            setIsDeleting(false);
            timeoutId = setTimeout(() => setIndex(0), speed);
        }

        return () => clearTimeout(timeoutId);
    }, [index, isDeleting, text, speed, pause]);

    return <p className="banner-welcome">{displayedText}</p>;
};

export default TypingEffect;
