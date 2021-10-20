import React, { useState } from 'react';
import '../App.css';
import Board from '../components/Board'
import HomePage from '../components/HomePage'

const MineSweeper = () => {
    const [startGame, setStartGame] = useState(false);
    const [mineNum, setMineNum] = useState(10);
    const [boardSize, setBoardSize] = useState(5);
    
    const startGameOnClick = () => {
        setStartGame(true);
    }
    const mineNumOnChange = (value) => {
        setMineNum(value);
    }
    const boardSizeOnChange = (value) => {
        setBoardSize(value);
    }
    const backToHomeOnClick = () => {
        setStartGame(false);
    }

    return( 
        <div className='App'>   
            {startGame ? 
                <Board ROW = {boardSize} COL = {boardSize} BOMBSIZE = {mineNum} BACKTOHOME = {backToHomeOnClick}/> 
                :
                <HomePage startGameOnClick = {startGameOnClick} mineNumOnChange = {mineNumOnChange} boardSizeOnChange = {boardSizeOnChange} mineNum = {mineNum} boardSize = {boardSize}/>
            } 
        </div>
    );
}
export default MineSweeper;