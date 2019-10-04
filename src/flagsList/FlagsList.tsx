import React from 'react';

import './FlagList.css';

interface Flag {
    name: string,
    description: string, // todo: temporal
    picture: string,
}

interface FlagListProps {
    flags: Flag[]
}

const FlagsList: React.FC<FlagListProps> = ({flags}: FlagListProps) => {
    const renderFlags = (flags: Flag[]) => flags.map(item => (
        <div className="flag-item">
            <div className="flag-item__name">
                {item.name}
            </div>
            <div className="flag-item__description">
                {item.description}
            </div>

        </div>
    ));

    return (
        <div className="flags-list">
            {renderFlags(flags)}
        </div>
    );
};

export default FlagsList;

