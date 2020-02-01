import React from 'react';

import { FLAGS_DIR } from "../../common/constants";
import FlagProps, { FLAG_PROPS_KEYS } from "../../common/FlagProps";
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
    const isFilterFieldOk = (name: keyof FlagProps, filterState: FlagProps, flagProps: FlagProps): boolean => {
        return !getProp(filtersState, name) || (getProp(filtersState, name) && getProp(flagProps, name)) || false;
    };

    const renderFlags = (flags: Flag[]) => flags
        .filter((flag: Flag) => {
            return FLAG_PROPS_KEYS.reduce((accumulator: boolean, currentValue) => {
                return accumulator && isFilterFieldOk(currentValue, filtersState, flag.props);
            }, true);
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
