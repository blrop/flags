import React from 'react';

import './FlagList.css';

interface Flag {
    name: string,
    picture: string,
}

interface FlagListProps {
    flags: Flag[]
}

const FlagsList: React.FC<FlagListProps> = ({ flags }: FlagListProps) => {
    const renderFlags = (flags: Flag[]) => flags.map(item => (
        <div className="flag-item" key={item.name}>
            <div className="flag-item__name">
                {item.name}
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

