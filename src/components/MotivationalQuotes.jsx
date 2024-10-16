import React, { useState, useEffect } from 'react';

const quotes = [
    "The secret of getting ahead is getting started.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is the sum of small efforts, repeated day-in and day-out.",
    "Your habits will determine your future.",
    "Small daily improvements lead to stunning results.",
    "Motivation gets you started, but habit keeps you going.",
];

function MotivationalQuotes() {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="quote">{quotes[quoteIndex]}</div>
    );
}

export default MotivationalQuotes;
