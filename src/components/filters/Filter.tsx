import React, { useState } from 'react';
import { FLAG_PROPS_KEYS } from "../../common/FlagProps";

interface FilterProps {
    onChange: (state: object) => void,
}

const Filter: React.FC<FilterProps> = (props: FilterProps) => {
    const filterKeys = [...FLAG_PROPS_KEYS, 'strictMode'];

    let initialState: any = {};
    filterKeys.forEach(item => {
        initialState[item] = false;
    });
    const [filtersState, setFiltersState] = useState(initialState);

    let inputsProps: any = {};
    filterKeys.forEach(item => {
        inputsProps[item] = {
            checked: filtersState[item],
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const newState = {
                    ...filtersState,
                    [item]: e.target.checked
                };

                setFiltersState(newState);

                props.onChange(newState);
            },
        };
    });


    const onFilterResetClick = () => {
        setFiltersState(initialState);

        props.onChange(initialState);
    };

    return (
        <>
            <h2>Filters</h2>
            <div className="filter__group">
                <h3>The flag consists of:</h3>
                <div className="filter__item">
                    <input type="checkbox" id="linesHorizontal" {...inputsProps['linesHorizontal']} />
                    <label htmlFor="linesHorizontal">Horizontal lines</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="linesVertical" {...inputsProps['linesVertical']} />
                    <label htmlFor="linesVertical">Vertical lines</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag has colors:</h3>
                <div className="filter__item">
                    <input type="checkbox" id="colorWhite" {...inputsProps['colorWhite']} />
                    <label htmlFor="colorWhite">White</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorBlack" {...inputsProps['colorBlack']} />
                    <label htmlFor="colorBlack">Black</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorRed" {...inputsProps['colorRed']} />
                    <label htmlFor="colorRed">Red</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorGreen" {...inputsProps['colorGreen']} />
                    <label htmlFor="colorGreen">Green</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorBlue" {...inputsProps['colorBlue']} />
                    <label htmlFor="colorBlue">Blue</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorYellow" {...inputsProps['colorYellow']} />
                    <label htmlFor="colorYellow">Yellow / Orange</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag also has:</h3>
                <div className="filter__item">
                    <input type="checkbox" id="pictureCross" {...inputsProps['pictureCross']} />
                    <label htmlFor="pictureCross">Cross</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureStar" {...inputsProps['pictureStar']} />
                    <label htmlFor="pictureStar">Star</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureSun" {...inputsProps['pictureSun']} />
                    <label htmlFor="pictureSun">Sun</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureCircle" {...inputsProps['pictureCircle']} />
                    <label htmlFor="pictureCircle">Circle</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureTriangle" {...inputsProps['pictureTriangle']} />
                    <label htmlFor="pictureTriangle">Triangle</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureCrescent" {...inputsProps['pictureCrescent']} />
                    <label htmlFor="pictureCrescent">Crescent</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureOther" {...inputsProps['pictureOther']} />
                    <label htmlFor="pictureOther">Other picture</label>
                </div>
            </div>

            <div className="filter__group">
                <div className="filter__item">
                    <input type="checkbox" id="strictMode" {...inputsProps['strictMode']} />
                    <label htmlFor="strictMode">Strict mode</label>
                </div>
            </div>

            <div className="filter__group filter__group--center">
                <button onClick={onFilterResetClick}>Reset filter</button>
            </div>
        </>
    );
};

export default Filter;
