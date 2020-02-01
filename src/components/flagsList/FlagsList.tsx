import React from 'react';

import { FLAGS_DIR } from "../../common/constants";
import FlagProps from "../../common/FlagProps";
import { getProp } from "../../common/functions";

import './FlagList.scss';

interface Flag {
    name: string,
    picture: string,
    props: FlagProps,
}

interface FlagListProps {
    flags: Flag[],
    filtersState: FlagProps,
}

const FlagsList: React.FC<FlagListProps> = ({ flags, filtersState }: FlagListProps) => {
    const isFilterFieldOk = (name: keyof FlagProps, filterState: FlagProps, flagProps: FlagProps) => {
        return !getProp(filtersState, name) || (getProp(filtersState, name) && getProp(flagProps, name));
    };

    const renderFlags = (flags: Flag[]) => flags
        .filter((flag: Flag) => {
            return (
                isFilterFieldOk('linesHorizontal', filtersState, flag.props) &&
                isFilterFieldOk('linesVertical', filtersState, flag.props) &&

                isFilterFieldOk('colorWhite', filtersState, flag.props) &&
                isFilterFieldOk('colorBlack', filtersState, flag.props) &&
                isFilterFieldOk('colorRed', filtersState, flag.props) &&
                isFilterFieldOk('colorGreen', filtersState, flag.props) &&
                isFilterFieldOk('colorBlue', filtersState, flag.props) &&
                isFilterFieldOk('colorYellow', filtersState, flag.props) &&

                isFilterFieldOk('pictureCross', filtersState, flag.props) &&
                isFilterFieldOk('pictureStar', filtersState, flag.props) &&
                isFilterFieldOk('pictureCircle', filtersState, flag.props) &&
                isFilterFieldOk('pictureTriangle', filtersState, flag.props) &&
                isFilterFieldOk('pictureCrescent', filtersState, flag.props) &&
                isFilterFieldOk('pictureOther', filtersState, flag.props)
            );
        })
        .map((item: Flag) => (
        <div className="flag-item" key={item.name}>
            <div className="flag-item__name">
                {item.name}
            </div>
            <img
                className="flag-item__image"
                src={`/${FLAGS_DIR}/${item.picture}`}
                alt={`${item.name} flag`}
            />
        </div>
    ));

    return (
        <div className="flags-list">
            {renderFlags(flags)}
        </div>
    );
};

export default FlagsList;
