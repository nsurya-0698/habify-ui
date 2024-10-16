import React, { useState } from 'react';

function HabitForm({ selectedDate }) {
    const [habitName, setHabitName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Habit "${habitName}" added for ${selectedDate.toDateString()}`);
        setHabitName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Habit</h2>
            <input
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                placeholder="Enter habit name"
                required
            />
            <button type="submit">Add Habit</button>
        </form>
    );
}

export default HabitForm;
