import React from 'react';
import './RoomTemperatureController.css';

function RoomTemperatureController({tc, onTCChange}) {
    return (
        <div className="rt-controller-container">
            <input type="number" min="32" max="100" value={tc} onChange={(e) => onTCChange(e.target.value)}/>
            <input type="range" min="32" max="100" value={tc} onChange={(e) => onTCChange(e.target.value)}/>
        </div>
    );
}

export default RoomTemperatureController;