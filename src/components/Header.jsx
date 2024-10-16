import React from 'react';
import MotivationalQuotes from './MotivationalQuotes';
import '../index.css';

function Header() {
    return (
        <header className="header">
            <h1>Welcome to Habify</h1>
            <div className="motivational-box">
                <MotivationalQuotes />
            </div>
        </header>
    );
}

export default Header;
