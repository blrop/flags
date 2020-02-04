import React, { useState } from 'react';

import FlagProps from "../../common/FlagProps";

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
                <div className="filter__item">
                    <input type="checkbox" id="linesHorizontal" {...linesHorizontal} />
                    <label htmlFor="linesHorizontal">Horizontal lines</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="linesVertical" {...linesVertical} />
                    <label htmlFor="linesVertical">Vertical lines</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag has colors:</h3>
                <div className="filter__item">
                    <input type="checkbox" id="colorWhite" {...colorWhite} />
                    <label htmlFor="colorWhite">White</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorBlack" {...colorBlack} />
                    <label htmlFor="colorBlack">Black</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorRed" {...colorRed} />
                    <label htmlFor="colorRed">Red</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorGreen" {...colorGreen} />
                    <label htmlFor="colorGreen">Green</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorBlue" {...colorBlue} />
                    <label htmlFor="colorBlue">Blue</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="colorYellow" {...colorYellow} />
                    <label htmlFor="colorYellow">Yellow / Orange</label>
                </div>
            </div>

            <div className="filter__group">
                <h3>The flag also has:</h3>
                <div className="filter__item">
                    <input type="checkbox" id="pictureCross" {...pictureCross} />
                    <label htmlFor="pictureCross">Cross</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureStar" {...pictureStar} />
                    <label htmlFor="pictureStar">Star</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureCircle" {...pictureCircle} />
                    <label htmlFor="pictureCircle">Circle</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureTriangle" {...pictureTriangle} />
                    <label htmlFor="pictureTriangle">Triangle</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureCrescent" {...pictureCrescent} />
                    <label htmlFor="pictureCrescent">Crescent</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" id="pictureOther" {...pictureOther} />
                    <label htmlFor="pictureOther">Other picture</label>
                </div>
            </div>
        </>
    );
};

export default Filter;
