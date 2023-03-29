import React from 'react';
import LeftArea from "./LeftArea";
import RightArea from "./RightArea";


function MainArea() {
    return (
        <div className="main-area-container">
            <LeftArea/>
            <RightArea/>
        </div>
    );
}

export default MainArea;