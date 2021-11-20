import './App.scss';
import React from "react";

import AppRouter from './router/AppRouter';
import Navbar from 'container/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;
