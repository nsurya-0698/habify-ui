// src/components/HabitList.jsx
import { useEffect, useState } from 'react';
import api from '../api';  // Axios instance

const HabitList = () => {
  const [habits, setHabits] = useState([]);  // State to store habits

  // Fetch habits from the backend when the component loads
  useEffect(() => {
    api.get('/habits')
      .then((response) => setHabits(response.data))  // Store habits in state
      .catch((error) => console.error('Error fetching habits:', error));
  }, []);  // Empty dependency array ensures this runs once on load

  return (
    <div>
      <h1>Habit List</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <h3>{habit.name}</h3>
            <p>{habit.description}</p>
            <p>Start Date: {habit.startDate}</p>
            <p>Status: {habit.completed ? 'Completed' : 'In Progress'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;