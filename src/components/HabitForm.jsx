// src/components/HabitForm.jsx
import { useState } from 'react';
import api from '../api';  // Axios instance

const HabitForm = ({ habit = {}, onSubmit }) => {
  // State variables to manage form input
  const [name, setName] = useState(habit.name || '');
  const [description, setDescription] = useState(habit.description || '');
  const [startDate, setStartDate] = useState(habit.startDate || '');
  const [completed, setCompleted] = useState(habit.completed || false);
  const [remarks, setRemarks] = useState(habit.remarks || '');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload

    const updatedHabit = { name, description, startDate, completed, remarks };

    if (habit.id) {
      // Update an existing habit
      api.put(`/habits/${habit.id}`, updatedHabit)
        .then(() => onSubmit())  // Trigger parent update
        .catch((err) => console.error('Error updating habit:', err));
    } else {
      // Create a new habit
      api.post('/habits', updatedHabit)
        .then(() => onSubmit())  // Trigger parent update
        .catch((err) => console.error('Error creating habit:', err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <input
        type="text"
        placeholder="Remarks"
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
      />
      <button type="submit">Save Habit</button>
    </form>
  );
};

export default HabitForm;
