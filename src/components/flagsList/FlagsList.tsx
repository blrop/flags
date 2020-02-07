import React from 'react';

import { FLAGS_DIR } from "../../common/constants";
import Flag from "../../common/Flag";

interface FlagListProps {
    flags: Flag[],
}

const FlagsList: React.FC<FlagListProps> = ({ flags }: FlagListProps) => {
    const renderFlags = (flags: Flag[]) =>
        flags.map((item: Flag) => (
            <div className="flag-item" key={item.name}>
                <img
                    className="flag-item__image"
                    src={`${FLAGS_DIR}/${item.picture}`}
                    alt={`${item.name} flag`}
                />
                <div className="flag-item__name">
                    {item.name}
                </div>
            </div>
        )
    );

    return (
        <div className="flag-list">
            {renderFlags(flags)}
        </div>
    );
};

export default FlagsList;
