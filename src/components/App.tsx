import React, { useState } from 'react';
import classNames from 'classnames';

import FlagsList from "./flagsList/FlagsList";
import Filter from "./filters/Filter";
import { FLAGS } from '../common/flags-defenitions';
import FlagProps, { FLAG_PROPS_KEYS } from "../common/FlagProps";
import Flag from "../common/Flag";
import { getProp } from "../common/functions";

import './App.scss';

enum Screen {
    Filters,
    Flags,
}

const getFilteredFlags = (filtersState: FlagProps) => {
    const isFilterEmpty = (filtersState: FlagProps): boolean => {
        return !FLAG_PROPS_KEYS.reduce((accumulator: boolean, currentValue: any) => {
            return accumulator || getProp(filtersState, currentValue);
        }, false);
    };

    const isFilterFieldOk = (name: keyof FlagProps, filterState: any, flagProps: FlagProps): boolean => {
        if (filterState.strictMode) {
            return (!!getProp(filtersState, name) === !!getProp(flagProps, name));
        } else {
            return !getProp(filtersState, name) || (getProp(filtersState, name) && getProp(flagProps, name)) || false;
        }
    };

    if (isFilterEmpty(filtersState)) {
        return FLAGS;
    }

    return FLAGS.filter((flag: Flag) => {
        return FLAG_PROPS_KEYS.reduce((accumulator: boolean, currentValue) => {
            return accumulator && isFilterFieldOk(currentValue, filtersState, flag.props);
        }, true);
    });
};

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

    const filteredFlags = getFilteredFlags(filtersState);

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
                        flags={filteredFlags}
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
                    Flags ({filteredFlags.length})
                </button>
            </div>
        </div>
    );
};

export default App;
