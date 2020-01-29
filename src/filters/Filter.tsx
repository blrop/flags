import React, { useReducer } from 'react';

import './Filter.scss';

type Actions =
    | { type: 'setHorizontalLines', payload: boolean }
    | { type: 'setVerticalLines', payload: boolean };

interface State {
    horizontalLines: boolean,
    verticalLines: boolean,
}

const initialState: State = {
    horizontalLines: false,
    verticalLines: false,
};

const FlagsFiltersReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'setHorizontalLines':
            return {
                ...state,
                horizontalLines: action.payload,
            };

        case 'setVerticalLines':
            return {
                ...state,
                verticalLines: action.payload,
            };

        default:
            return state;
    }
};

const setHorizontalLines = (checked: boolean): Actions => ({
    type: 'setHorizontalLines',
    payload: checked,
});

const setVerticalLines = (checked: boolean): Actions => ({
    type: 'setVerticalLines',
    payload: checked,
});

function useCheckboxInputReducer(initialValue: State, action: (checked: boolean) => Actions, stateField: keyof State) {
    const [state, dispatch] = useReducer(FlagsFiltersReducer, initialValue);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(action(e.target.checked));
    }

    function prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    return {
        checked: prop(state, stateField),
        onChange: handleChange,
    };
}

const Filter = () => {
    const horizontalLines = useCheckboxInputReducer(initialState, setHorizontalLines, 'horizontalLines');
    const verticalLines = useCheckboxInputReducer(initialState, setVerticalLines, 'verticalLines');

    console.log(horizontalLines);
    console.log(verticalLines);

    return (
        <div className="filter">
            <div className="filter__group">
                <h3>The flag consists of:</h3>
                <div className="filter-item">
                    <label>
                        <input type="checkbox" {...horizontalLines} /> Horizontal lines</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox" {...verticalLines}/> Vertical lines</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag has colors:</h3>
                <div className="filter-item">
                    <label><input type="checkbox"/> White</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Black</label>
                </div>

                <div className="filter-item">
                    <label><input type="checkbox"/> Red</label>
                </div>
                <div>
                    <label><input type="checkbox"/> Green</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Blue</label>
                </div>

                <div className="filter-item">
                    <label><input type="checkbox"/> Yellow / Orange</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag also has:</h3>
                <div className="filter-item">
                    <label><input type="checkbox"/> Cross</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Star(s)</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Circle</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Triangle</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Crescent</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Other picture</label>
                </div>
            </div>
        </div>
    );
};

export default Filter;
