import React, { useEffect, useState } from 'react';
import '../App.css'
import Board from './Board';


const Start = () => {
    const [start, setStart] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [mineNum, setMineNum] = useState(10);
    const [boardSize, setBoardSize] = useState(5);

    const diffOnClick = () => {
        showPanel ? setShowPanel(false) : setShowPanel(true);
    }

    const startOnClick = () => {
        setStart(true);
    }

    const startPage = () => {
        

    }


    return(
        [<div className = 'StartWrapper'>
        <p className = 'title'>MineSweeper</p>
        <button className = 'btn' onClick = {startOnClick}>Start Game</button>
        <div>
            <button className = 'btn' onClick = {diffOnClick}>Difficulty Adjustment</button>
            {showPanel ? 
                <div className = "controlPanel"> 
                    <div className = "controlCol">
                        <p className = 'controlTitle'>Mines Number</p>
                        <input id = 'mineNum' type='range' min='1' max='50' defaultValue='10'   step='1' onChange = {({ target: { value: num } }) => {setMineNum(num);}}/>
                        <p>{mineNum}</p>

                    </div>
                    <div className = "controlCol">
                        <p className = 'controlTitle'>Board Size (n×n)</p>
                        <input id = 'boardSize' type='range' min='1' max='25' defaultValue='9'  step='1' onChange = {({ target: { value: num } }) => {setMineNum(num);}}/> 
                        <p>{boardSize}</p>
                    </div>
                </div> 
                : 
                <div></div>
            }
        </div>
    </div>, start, mineNum, boardSize]
        
        // start ? <Board row = {document.getElementById('boardSize').value} col = {document.getElementById('boardSize').value} bomb = {document.getElementById('mineNum').value}/> :
        
    );

}
export default Start;