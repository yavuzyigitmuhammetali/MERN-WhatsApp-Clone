import React, {useEffect, useState} from "react";
import { Children } from 'react';


export function ContextItem({children,onClick}) {

    return (
        <div onClick={onClick} id="context-item">
            {children}
        </div>
    );
}


function CustomContextMenuDesign(props) {
    return (

        <div className="custom-context-container"
            style={{
            position: "absolute",
            transition:"width 0.15s,height 0.15s, color 0.25s",
            top: props.position.y,
            left: props.position.x,
            zIndex: 1000,
            height:props.isVisible?"200px":"0",
            width:props.isVisible?"240px":"0",
                color:props.isVisible?"#3b4a54":"white",


            // display:props.isVisible?"block":"none",
        }}>
            {props.children}
        </div>

    );
}
export function CustomContextMenu(props) {
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>{
        if(props.s){
            setIsVisible(true)
        }
    },[props.s])


    function handleContextMenu(e) {
        e.preventDefault();
        setContextMenuPosition({ x: e.pageX, y: e.pageY });
        setIsVisible(true)
    }

    return (
        <div id={props.id} onClick={(event)=>setContextMenuPosition({ x: event.pageX, y: event.pageY })} className={props.className} onBlur={()=>setIsVisible(false)} tabIndex={0} onContextMenu={handleContextMenu}>
            {props.children}
            {contextMenuPosition&& (
                    <CustomContextMenuDesign position={contextMenuPosition} isVisible={isVisible}>
                        {Children.map(props.children, child =>
                            child.type.name==="ContextItem"&&child
                        )}
                    </CustomContextMenuDesign>
            )}

        </div>
    );
}
