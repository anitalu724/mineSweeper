import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
// import Start from './components/Start';


const App = () => {
    const [startGame, setStartGame] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [mineNum, setMineNum] = useState(10);
    const [boardSize, setBoardSize] = useState(5);
    const [error, setError] = useState(false);

    const diffOnClick = () => {
        showPanel ? setShowPanel(false) : setShowPanel(true);
    }

    const startOnClick = () => {
      if(!error) setStartGame(true);
    }

    const checkError = () => {
      if(boardSize*boardSize < mineNum ) setError(true);
      else setError(false);
    }
  return (
    <div className='App'>
      {startGame ? 
        <Board ROW = {boardSize} COL = {boardSize} BOMBSIZE = {mineNum}/> 
        :
        <div className = 'StartWrapper'>
          <p className = 'title'>MineSweeper</p>
            <button className = 'btn' onClick = {startOnClick}>Start Game</button>
                <div>
                    <button className = 'btn' onClick = {diffOnClick}>Difficulty Adjustment</button>
                    {showPanel ? 
                        <div className='controlWrapper'> 
                          {error ?
                            <div className = 'error'>
                                  ERROR: Mines number and board size are invalid!
                            </div>
                            :
                            <div></div>
                          }
                          <div className = "controlPanel">
                            <div className = "controlCol">
                                <p className = 'controlTitle'>Mines Number</p>
                                <input id = 'mineNum' type='range' min='1' max='50' defaultValue='10'   step='1' onChange = {({ target: { value: num } }) => {setMineNum(num); checkError();}}/>
                                <p>{mineNum}</p>

                            </div>
                            <div className = "controlCol">
                                <p className = 'controlTitle'>Board Size (n×n)</p>
                                <input id = 'boardSize' type='range' min='1' max='25' defaultValue='9'  step='1' onChange = {({ target: { value: num } }) => {setBoardSize(num); checkError();}}/> 
                                <p>{boardSize}</p>
                            </div>
                          </div>
                            
                        </div> 
                        : 
                        <div></div>
                    }
                </div>
            </div>
    } 
    </div>
  );
}

export default App;
