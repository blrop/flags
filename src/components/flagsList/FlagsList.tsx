import React from 'react';

import Flag from "../../common/Flag";
import FlagItem from "./FlagItem";

interface FlagListProps {
    flags: Flag[],
}

const FlagsList: React.FC<FlagListProps> = ({ flags }: FlagListProps) => {
    const renderFlags = (flags: Flag[]) =>
        flags.map((item: Flag) => (
            <FlagItem flag={item} key={item.name} />
        )
    );

    return (
        <div className="flag-list">
            {renderFlags(flags)}
        </div>
    );
};

export default FlagsList;
