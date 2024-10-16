import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Header from './components/Header';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';
import 'react-calendar/dist/Calendar.css';
import './index.css';

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        fetchHabits(selectedDate);
    }, [selectedDate]);

    const fetchHabits = async (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        const data = await getHabitsByDate(formattedDate);
        setHabits(data);
    };

    return (
        <div className="app-container">
            <Header />
            <div className="content">
                <div className="left-panel">
                    <Calendar onChange={setSelectedDate} value={selectedDate} />
                    <HabitList habits={habits} />
                </div>
                <HabitForm selectedDate={selectedDate} />
            </div>
        </div>
    );
}

export default App;
