// icons/PawIcon.js

import React from 'react';

const PawIcon = ({ colorFill }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colorFill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 23s-2-4-5-4-5 4-5 4" />
            <circle cx="12" cy="10" r="3" />
            <circle cx="17" cy="6" r="2" />
            <circle cx="7" cy="6" r="2" />
        </svg>
    );
};

export default PawIcon;