import React, {useRef, useState} from 'react';

function SearchBar({loading=false}) {
    const searchBarTextareaRef = useRef(null);
    const [searching,setSearching] = useState(false)
    return (
        <div className="search-bar-container">
            <div className="search-bar-send-button">
                {searching?
                    <span onClick={()=>{
                        searchBarTextareaRef.current.value=""
                        setSearching(false);
                    }} data-testid="back" data-icon="back"><svg viewBox="0 0 24 24" height={24} width={24} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="#00a884" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z" /></svg></span>
                    :
                    <span data-testid="search" data-icon="search"><svg viewBox="0 0 24 24" height={24} width={24} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="#54656F" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z" /></svg></span>
                }
            </div>
            <textarea ref={searchBarTextareaRef} onChange={event=>{
                if(event.target.value===""){setSearching(false)}
                else{console.log(event.target.value)
                setSearching(true)}
            }} placeholder="Search or start new chat"/>
            {searching&&loading===false&&
                <span onClick={()=>{
                    searchBarTextareaRef.current.value=""
                    setSearching(false);
                }} style={{position:"absolute",top:"5px",right:"7px",cursor:"pointer"}} data-testid="x-alt" data-icon="x-alt"><svg viewBox="0 0 24 24" height={24} width={24} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="#8696A0" d="M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z" /></svg></span>
            }
            {loading&&
                <span className="search-bar-loading"><svg width={20} height={20} viewBox="0 0 45 45" role="status"><circle stroke="#00a884" cx="22.5" cy="22.5" r={20} fill="none" strokeWidth={5} /></svg></span>
            }
        </div>
    );
}

export default SearchBar;