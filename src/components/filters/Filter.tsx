import React, { useState } from 'react';

import FlagProps from "../../common/FlagProps";

import './Filter.scss';

interface FilterProps {
    onChange: (name: string, checked: boolean) => void,
}

const Filter: React.FC<FilterProps> = (props: FilterProps) => {
    const useCheckboxInput = (name: keyof FlagProps, initialValue: boolean) => {
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

    const linesHorizontal = useCheckboxInput('linesHorizontal', false);
    const linesVertical = useCheckboxInput('linesVertical', false);

    const colorWhite = useCheckboxInput('colorWhite', false);
    const colorBlack = useCheckboxInput('colorBlack', false);
    const colorRed = useCheckboxInput('colorRed', false);
    const colorGreen = useCheckboxInput('colorGreen', false);
    const colorBlue = useCheckboxInput('colorBlue', false);
    const colorYellow = useCheckboxInput('colorYellow', false);

    const pictureCross = useCheckboxInput('pictureCross', false);
    const pictureStar = useCheckboxInput('pictureStar', false);
    const pictureCircle = useCheckboxInput('pictureCircle', false);
    const pictureTriangle = useCheckboxInput('pictureTriangle', false);
    const pictureCrescent = useCheckboxInput('pictureCrescent', false);
    const pictureOther = useCheckboxInput('pictureOther', false);

    return (
        <>
            <h2>Filters</h2>
            <div className="filter__group">
                <h3>The flag consists of:</h3>
                <label className="filter__item"><input type="checkbox" {...linesHorizontal} /> Horizontal lines</label>
                <label className="filter__item"><input type="checkbox" {...linesVertical}/> Vertical lines</label>
            </div>

            <div className="filter__group">
                <h3>The flag has colors:</h3>
                <label className="filter__item"><input type="checkbox" {...colorWhite}/> White</label>
                <label className="filter__item"><input type="checkbox" {...colorBlack}/> Black</label>
                <label className="filter__item"><input type="checkbox" {...colorRed}/> Red</label>
                <label className="filter__item"><input type="checkbox" {...colorGreen}/> Green</label>
                <label className="filter__item"><input type="checkbox" {...colorBlue}/> Blue</label>
                <label className="filter__item"><input type="checkbox" {...colorYellow}/> Yellow / Orange</label>
            </div>

            <div className="filter__group">
                <h3>The flag also has:</h3>
                <label className="filter__item"><input type="checkbox" {...pictureCross}/> Cross</label>
                <label className="filter__item"><input type="checkbox" {...pictureStar}/> Star</label>
                <label className="filter__item"><input type="checkbox" {...pictureCircle}/> Circle</label>
                <label className="filter__item"><input type="checkbox" {...pictureTriangle}/> Triangle</label>
                <label className="filter__item"><input type="checkbox" {...pictureCrescent}/> Crescent</label>
                <label className="filter__item"><input type="checkbox" {...pictureOther}/> Other picture</label>
            </div>
        </>
    );
};

export default Filter;
