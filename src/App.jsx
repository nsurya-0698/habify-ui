// src/App.jsx
import { useState } from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);  // Used to refresh the habit list

  const handleFormSubmit = () => {
    setRefresh(!refresh);  // Toggle state to trigger re-fetch in HabitList
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm onSubmit={handleFormSubmit} />
      <HabitList key={refresh} />  {/* Refresh the list when refresh changes */}
    </div>
  );
};

export default App;
