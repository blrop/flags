import React from 'react';

import './FlagList.css';

export interface FlagListProps {
    flags: string[]
}

const FlagsList: React.FC<FlagListProps> = ({flags}: FlagListProps) => {
    const renderFlags = (flags: string[]) => flags.map(item => (
        <div className="flag-item">{item}</div>
    ));

    return (
        <div className="flags-list">
            {renderFlags(flags)}
        </div>
    );
};

export default FlagsList;

