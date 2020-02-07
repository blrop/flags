import React, { useState } from 'react';

import Flag from "../../common/Flag";
import { FLAGS_DIR } from "../../common/constants";

interface FlagItemProps {
    flag: Flag,
}

const FlagItem: React.FC<FlagItemProps> = ({ flag }: FlagItemProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleFlagClick = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div
                className="flag-item"
                onClick={handleFlagClick}
            >
                <img
                    className="flag-item__image"
                    src={`${FLAGS_DIR}/${flag.picture}`}
                    alt={`${flag.name} flag`}
                />
                <div className="flag-item__name">
                    {flag.name}
                </div>
            </div>

            {isModalOpen &&
                <div className="flag-modal" onClick={closeModal}>
                    <div className="flag-modal__hint">Tap to close</div>

                    <div className="flag-modal__image-wrapper">
                        <img
                            className="flag-modal__image"
                            src={`${FLAGS_DIR}/${flag.picture}`}
                            alt={`${flag.name} flag`}
                        />
                        <div className="flag-modal__name">
                            {flag.name}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default FlagItem;