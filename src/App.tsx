import React, { useState } from 'react';

import FlagsList from "./flagsList/FlagsList";
import Filter from "./filters/Filter";
import { FLAGS } from './flags-defenitions';
import './App.scss';

const App = () => {
    const [filtersState, setFiltersState] = useState({});

    const handleFilterChange = (name: string, checked: boolean) => {
        setFiltersState({
            ...filtersState,
            [name]: checked,
        });
    };

    return (
        <div className="app">
            <div className="filters">
                <Filter
                    onChange={handleFilterChange}
                />
            </div>
            <FlagsList
                flags={FLAGS}
                filtersState={filtersState}
            />
        </div>
    );
};

export default App;
