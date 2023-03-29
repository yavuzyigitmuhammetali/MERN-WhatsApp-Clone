import React from 'react';
import UpperLeft from "./UpperLeft";
import MiddleLeft from "./MiddleLeft";
import BottomLeft from "./BottomLeft";


function LeftArea() {
    return (
        <div className="main-area-left">
            <UpperLeft/>
            <MiddleLeft/>
            <BottomLeft/>
        </div>
    );
}

export default LeftArea;