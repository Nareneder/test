import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import { useNavigate } from "react-router-dom";

export default function UseridleTimer(){
    const history = useNavigate();
    const IdleTimerRef = useRef(null)
    const onIdle =()=>{
        sessionStorage.clear();
        if(sessionStorage.length === 0){
            history('/')
        }
    }
    return(
        <>
            <IdleTimer ref={IdleTimerRef} timeout={60*60*1000} onIdle={onIdle}></IdleTimer>
        </>
    )
}