import React from 'react';
import './Dial.css';

function Dial({onTTChange}) {
    const onMouseDown = (e) => {
        document.addEventListener("mousemove", onMouseMove);
        console.log("mouse down");
        document.addEventListener("mouseup", onMouseUp);
    }

    const onMouseMove = (e) => {
        console.log("mouse is clicked and moving");
        let origin = document.getElementsByClassName("center")[0];
        const xOrigin = origin.getBoundingClientRect().left;
        const yOrigin = origin.getBoundingClientRect().top;
        const xCoordinate = e.pageX;
        const yCoordinate = e.pageY;
        const bearing = Math.atan2(xCoordinate-xOrigin, -(yCoordinate-yOrigin)) * (180/Math.PI);
        const value = 65 + Math.round(bearing/10);
        onTTChange(value);
        console.log(bearing);
    }

    const onMouseUp = () => {
        console.log("mouse is up");
        document.removeEventListener("mousemove", onMouseMove);
    }
    return (
        <div className="dial-container" onMouseDown={(e) => onMouseDown(e)}>
            <div className="graduations" ></div>
            <div className="center"></div>
        </div>
    );
}

export default Dial;