import React, { useState } from 'react';

import FlagsList from "./flagsList/FlagsList";
import Filter from "./filters/Filter";
import { FLAGS } from '../common/flags-defenitions';
import './App.scss';

const App = () => {
    const [filtersState, setFiltersState] = useState({});

    const handleFilterChange = (state: object) => {
        setFiltersState(state);
    };

    return (
        <div className="app">
            <div className="filter">
                <Filter
                    onChange={handleFilterChange}
                />
            </div>
            <div className="flags-list-wrapper">
                <h1>Flag list</h1>
                <FlagsList
                    flags={FLAGS}
                    filtersState={filtersState}
                />
            </div>
        </div>
    );
};

export default App;
