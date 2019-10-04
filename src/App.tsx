import React from 'react';

import FlagsList from "./flagsList/FlagsList";
import {FLAGS} from './flags-defenitions';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="filters">
                Filters go here
            </div>
            <FlagsList
                flags={FLAGS}
            />
        </div>
    );
};

export default App;
