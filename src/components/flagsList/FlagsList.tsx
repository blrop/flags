import React from 'react';

import { FLAGS_DIR } from "../../common/constants";
import FlagProps from "../../common/FlagProps";

import './FlagList.scss';

interface Flag {
    name: string,
    picture: string,
}

interface FlagListProps {
    flags: Flag[],
    filtersState: FlagProps,
}

const FlagsList: React.FC<FlagListProps> = ({ flags, filtersState }: FlagListProps) => {
    console.log(filtersState);

    const renderFlags = (flags: Flag[]) => flags.map(item => (
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
