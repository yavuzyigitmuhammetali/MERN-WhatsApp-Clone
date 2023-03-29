import React, {useState} from 'react';
import {ContextItem, CustomContextMenu} from "./CustomContextMenu";


function UserBox({children,profilePicture,userName,time,mute=false}) {
    const [test,setTest] = useState(false);
    return (
        <CustomContextMenu s={test} className="user-box-container">
            <ContextItem onClick={()=>console.log(userName)}>Log username</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <ContextItem>Lorem ipsum dolor sit</ContextItem>
            <div className="user-box-pp">
                {profilePicture?
                    <img src={profilePicture} alt="pp"/>
                    :
                    <span data-testid="default-user" data-icon="default-user"><svg viewBox="0 0 212 212" height={49} width={49} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 212 212" xmlSpace="preserve"><path fill="#DFE5E7"  d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z" /><g><path fill="#FFFFFF" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z" /><path fill="#FFFFFF" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z" /></g></svg></span>
                }
            </div>
            <div className="user-box-info-container">
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{color:"#111b21",fontSize:"17px"}}>{userName}</div>
                    <div style={{marginLeft:"auto",color:"#667781",fontSize:"12px"}}>{time}</div>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{maxWidth:"90%",color:"#8696A0",fontSize:"14px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{children}</div>

                    {mute&&
                        <div style={{color:"#8696A0",fontSize:"12px",marginLeft:"auto"}}><span data-testid="muted" data-icon="muted"><svg viewBox="0 0 16 18" height={18} width={16} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 18" xmlSpace="preserve"><path fill="currentColor" d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z" /></svg></span></div>
                    }
                    <div tabIndex={0} onClick={()=>setTest(true)} onBlur={()=>setTest(false)} className="user-box-down-key"><span data-testid="down" data-icon="down"><svg viewBox="0 0 19 20" height={20} width={20} preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" xmlSpace="preserve"><path fill="currentColor" d="M3.8,6.7l5.7,5.7l5.7-5.7l1.6,1.6l-7.3,7.2L2.2,8.3L3.8,6.7z" /></svg></span></div>

                </div>
            </div>
        </CustomContextMenu>

    );
}

export default UserBox;