import React from 'react';

import './Filter.scss';

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__group">
                <div className="filter-item">
                    <label><input type="checkbox"/> The flag is a tricolor</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag consists of:</h3>
                <div className="filter-item">
                    <label><input type="checkbox"/> Horizontal lines</label>
                </div>
                <div className="filter-item">
                    <label><input type="checkbox"/> Vertical lines</label>
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
