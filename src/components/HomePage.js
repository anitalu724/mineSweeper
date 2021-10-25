import React, { useState } from 'react';
import './css/HomePage.css';


const HomePage = ({startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize}) => {
    const [showPanel, setShowPanel] = useState(false);
    const [error, setError] = useState(false);

    const diffOnClick = () => {
        showPanel ? setShowPanel(false) : setShowPanel(true);
    }

    const startOnClick = () => {
      console.log("startOnClick")
      if(!error) startGameOnClick();
      else console.log("Error value: cannot start game!");
    }

    const checkError = (idx, num) => {
      let MINENUM = (idx === 0) ? num : mineNum;
      let BOARDSIZE = (idx === 1) ? num : boardSize;
      console.log(MINENUM, BOARDSIZE);
      if( BOARDSIZE * BOARDSIZE < MINENUM ) setError(true);
      else setError(false);
    }

    return(
      <div className = 'HomeWrapper'>
          <p className = 'title'>MineSweeper</p>
            <button className = 'btn' onClick = {startOnClick}>Start Game</button>
                <div className = 'controlContainer'>
                    <button className = 'btn' onClick = {diffOnClick}>Difficulty Adjustment</button>
                    {showPanel ? 
                        <div className='controlWrapper'> 
                            <div className ='error' style = {{ color: (error) ? '#880000':'transparent'}}> ERROR: Mines number and board size are invalid!</div>
                          <div className = "controlPanel">
                            <div className = "controlCol">
                                <p className = 'controlTitle'>Mines Number</p>
                                <input  type='range' min='1' max='50' defaultValue='10'   step='1' onChange = {({ target: { value: num } }) => {mineNumOnChange(num);  checkError(0, num);}}/>
                                <p className = 'controlNum' style = {{color: (error) ? '#880000' : '#0f0f4b'}}>{mineNum}</p>
                            </div>
                            <div className = "controlCol">
                                <p className = 'controlTitle'>Board Size (n×n)</p>
                                <input type='range' min='1' max='20' defaultValue='5'  step='1' onChange = {({ target: { value: num } }) => {boardSizeOnChange(num);  checkError(1, num);}}/> 
                                <p className = 'controlNum' style = {{color: (error) ? '#880000' : '#0f0f4b'}}>{boardSize}</p>
                            </div>
                          </div>
                        </div> 
                        : 
                        <div></div>
                    }
                </div>
        </div>
    );

}
export default HomePage;   