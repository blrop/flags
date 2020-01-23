import React from 'react';

import FlagsList from "./flagsList/FlagsList";
import Filter from "./filters/Filter";
import { FLAGS } from './flags-defenitions';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <div className="filters">
                <Filter/>
            </div>
            <FlagsList
                flags={FLAGS}
            />
        </div>
    );
};

export default App;
