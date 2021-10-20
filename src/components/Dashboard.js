import React, { useEffect, useState } from 'react';
import "./css/Dashboard.css"
let timeIntervalId;

export default function Dashboard({remainFlagNum, gameOver, sendTime}){
    let [time, setTime] = useState(0);
    let [sTime, setSTime] = useState(0);

    useEffect(() => {
      if (time > 0 && gameOver) {
        setSTime(time);
        setTime(0);
      }
    }, [gameOver, time]);

    useEffect(() => {
      const incrementTime = () => {
        let newTime = time + 1;
        setTime(newTime);
      };
      timeIntervalId = setTimeout(() => {
        incrementTime();
      }, 1000);
      if (gameOver) clearInterval(timeIntervalId);
      
    }, [time, setTime, gameOver, sendTime]);


    return (
        <div className = "dashBoard" >
            <div id = 'dashBoard_col1' >
                <div className = 'dashBoard_col'>
                    <p className = 'icon'>🚩</p>
                    {remainFlagNum}
                </div>
            </div>
            <div id = 'dashBoard_col2' >
                <div className = 'dashBoard_col'>
                    <p className = 'icon'>⏰</p>
                    {gameOver ? sTime : time}
                </div>
            </div>
        </div>
    );
}