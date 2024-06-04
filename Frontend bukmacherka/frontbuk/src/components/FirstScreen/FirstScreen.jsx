import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/logo.jpg';
import './FirstScreen.css';

export default function FirstScreen() {
    return (
        <header>
            <img src={reactLogo} alt="Betting webapp logo" />
            <h1>Fortuitous Bet</h1>
            <main>
                <div>
                    <div id='Login'>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
            </main>
        </header>
    );
}
