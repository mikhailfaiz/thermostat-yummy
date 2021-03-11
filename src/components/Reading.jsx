import React from 'react';
import './Reading.css';

function Dial() {
    return (
        <div className="temp-reading-container">
            <div className="circle-plate">
                <div className="temp-reading-desired">72</div>
                <div className="temp-reading-current">Current: 72</div>
            </div>
        </div>
    );
}

export default Dial;