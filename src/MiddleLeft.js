import React from 'react';
import SearchBar from "./SearchBar";

function MiddleLeft({filter=false,loading=false}) {
    return (
        <div className="middle-left-container">
           <SearchBar loading={loading}/>
            {filter?
                <span style={{backgroundColor:"#00a884"}} className="middle-left-filter" data-testid="filter" data-icon="filter"><svg style={{margin:"auto"}} viewBox="0 0 24 24" height={20} width={20} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="white" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z" /></svg></span>
            :
                <span className="middle-left-filter" data-testid="filter" data-icon="filter"><svg style={{margin:"auto"}} viewBox="0 0 24 24" height={20} width={20} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="#8696A0" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z" /></svg></span>
            }
        </div>
    );
}

export default MiddleLeft;