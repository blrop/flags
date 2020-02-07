import React, { useState } from 'react';
import classNames from 'classnames';

import FlagsList from "./flagsList/FlagsList";
import Filter from "./filters/Filter";
import { FLAGS } from '../common/flags-defenitions';
import './App.scss';

// todo: do the actual filtering here (instead of the FlagList component) to be able to show flags count on the button

enum Screen {
    Filters,
    Flags,
}

const App = () => {
    const [filtersState, setFiltersState] = useState({});
    const [currentScreen, setCurrentScreen] = useState(Screen.Filters); // for mobile only; on wide devices both parts of the app are shown simultaneously

    const handleFilterChange = (state: object) => {
        setFiltersState(state);
    };

    const setFiltersScreen  = () => {
        setCurrentScreen(Screen.Filters);
    };
    const setFlagsScreen  = () => {
        setCurrentScreen(Screen.Flags);
    };
    const isFiltersScreenSet = (currentScreen === Screen.Filters);
    const isFlagsScreenSet = (currentScreen === Screen.Flags);

    return (
        <div className="app">
            <div className="content">
                <div className={classNames("filter", { shown: isFiltersScreenSet })}>
                    <Filter
                        onChange={handleFilterChange}
                    />
                </div>

                <div className={classNames("flags-list-wrapper", { shown: isFlagsScreenSet })}>
                    <h1>Flag list</h1>
                    <FlagsList
                        flags={FLAGS}
                        filtersState={filtersState}
                    />
                    <div className="powered-by">
                        <div className="powered-by__title">Powered by:</div>
                        <div>
                            <img src="images/react-logo.svg" alt="React logo"/>
                            <img src="images/ts-logo.svg" alt="Typescript logo"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-buttons"> {/* shown on small devices only */}
                <button
                    className={classNames({ active: isFiltersScreenSet })}
                    onClick={setFiltersScreen}
                >
                    Filters
                </button>
                <button
                    className={classNames({ active: isFlagsScreenSet })}
                    onClick={setFlagsScreen}
                >
                    Flags (256)
                </button>
            </div>
        </div>
    );
};

export default App;
