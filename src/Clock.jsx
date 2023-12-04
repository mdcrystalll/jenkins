import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Зупиняємо інтервал при виході з компонента
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Поточний час:</h1>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default Clock;