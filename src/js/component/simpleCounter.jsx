import React, { useState, useEffect } from 'react';
import CardCounter from "./cardCounter.jsx";
const SimpleCounter = () => {

    const [seconds, setSeconds] = useState(0);
    const [stop, setStop] = useState(false);
    const [input, setInput] = useState(0);
    const [mode, setMode] = useState("countUp");

    useEffect(() => {
        if(!stop){
            if(mode === "countUp"){
                let interval = setInterval(() => {
                    setSeconds(seconds + 1);
                }, 1000);
                return () => clearInterval(interval);
            }
            else if (mode === "countDown"){
                let interval = setInterval(() => {
                    setSeconds(seconds - 1);
                    if(seconds == 0){
                        setSeconds(0);
                        alert("time finished");
                        setMode("countUp");
                    }
                }, 1000);
                return () => clearInterval(interval);
            }
        }  
    });

    let inpt = 0;
    let arr = Array.from(String(seconds), Number)
    
    //Button functions
    const myStop = () =>{
        setStop(true);
    }
    const resume = () =>{
        setStop(false);
    }
    const reset = () =>{
        setSeconds(0);
    }
    const countdown = (e) => {
        e.preventDefault()
        setSeconds(input)
        setMode("countDown")
    }
    
    return (
        <div className="text-center">
            <h1 className="title">Counter</h1>
            <div className="counter d-flex">
                <div className="myCard"><i className="bi bi-clock"></i></div>
                <div className="myCard"><CardCounter value={arr.length > 5? arr[arr.length - 6] : 0} /></div>
                <div className="myCard"><CardCounter value={arr.length > 4? arr[arr.length - 5] : 0} /></div>
                <div className="myCard"><CardCounter value={arr.length > 3? arr[arr.length - 4] : 0} /></div>
                <div className="myCard"><CardCounter value={arr.length > 2? arr[arr.length - 3] : 0} /></div>
                <div className="myCard"><CardCounter value={arr.length > 1? arr[arr.length - 2] : 0} /></div>
                <div className="myCard"><CardCounter value={arr[arr.length - 1]} /></div>
            </div>
            <div className="buttons">
                <button className="myBtn" onClick = {myStop}>Stop</button>
                <button className="myBtn" onClick = {resume}>Resume</button>
                <button className="myBtn" onClick = {reset}>Reset</button>
            </div>
            <div className="buttons">
            <form className="myBtn" onSubmit={countdown}>Start countdown: <input type="number" onChange={e => setInput(e.target.value)}/></form>
            </div>
        </div>
    );
};


export default SimpleCounter;