import React, { useState } from 'react';

import './Filter.scss';

interface FilterProps {
    onChange: (name: string, checked: boolean) => void,
}

const Filter: React.FC<FilterProps> = (props: FilterProps) => {
    const useCheckboxInput = (name: string, initialValue: boolean) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e: any) {
            setValue(e.target.checked);

            props.onChange(name, e.target.checked);
        }

        return {
            checked: value,
            onChange: handleChange,
        };
    };

    const horizontalLines = useCheckboxInput('horizontalLines', false);
    const verticalLines = useCheckboxInput('verticalLines', false);

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
