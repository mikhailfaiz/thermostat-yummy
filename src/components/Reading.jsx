import React from 'react';
import './Reading.css';

function Reading({tc, tt}) {
    const dt = 2;
    const dtCool = 1.5;
    const dtHeat = 1;
    return (
        <div>
            <div className="temp-reading-desired">{tt}</div>  
            <div className="temp-reading-current">Current: {tc}</div>
        </div>
    );
}

export default Reading;