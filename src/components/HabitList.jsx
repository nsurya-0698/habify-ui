import React from 'react';

function HabitList({ habits }) {
    return (
        <div>
            <h2>Your Habits</h2>
            <ul>
                {habits.map((habit) => (
                    <li key={habit.id}>
                        <strong>{habit.name}</strong> - {habit.completed ? 'Completed' : 'Pending'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HabitList;
