import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
// @ts-ignore
import GithubCorner from 'react-github-corners';
import 'react-github-corners/dist/GithubCorner.css'

import FlagsList from "./flagsList/FlagsList";
import Filter from "./filters/Filter";
import { FLAGS } from '../common/flags-defenitions';
import FlagProps, { FLAG_PROPS_KEYS } from "../common/FlagProps";
import Flag from "../common/Flag";
import { getProp } from "../common/functions";
import { GITHUB_URL, SESSION_STORAGE_KEY } from "../common/constants";

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

const saveFiltersState = (state: any) => {
    const objectToSave: any = {};
    Object.keys(state).forEach((item) => {
        objectToSave[item] = state[item];
    });
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(objectToSave));
};

const loadFiltersState = () => {
    const savedString = sessionStorage.getItem(SESSION_STORAGE_KEY);
    let savedObject: any = {};
    if (savedString) {
        savedObject = JSON.parse(savedString);
    }
    return savedObject;
};

const App = () => {
    const [filtersState, setFiltersState] = useState({});
    const [currentScreen, setCurrentScreen] = useState(Screen.Filters); // for mobile only; on wide devices both parts of the app are shown simultaneously

    const handleFilterChange = (state: object) => {
        setFiltersState(state);
        saveFiltersState(state);
    };

    useEffect(() => {
        setFiltersState(loadFiltersState());
    }, []);

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
                        state={filtersState}
                    />
                </div>

                <div className={classNames("flags-list-wrapper", { shown: isFlagsScreenSet })}>
                    <GithubCorner url={GITHUB_URL} target="_blank" />

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
