import React, { useEffect, useState } from 'react';
import createBoard from '../util/createBoard';
import Cell from './Cell';
import Modal from './Modal';
import { revealed } from '../util/reveal';
import "../App.css"
import Dashboard from './Dashboard';
let row = 10;
let col = 10;
let bomb = 10;

const Board = () => {
    const [grid, setGrid] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [mineLocations, setMineLocation] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [remainFlagNum, setRemainFlagNum] = useState(0);
    const [win, setWin] = useState(false);

    useEffect(() => {
        // Calling the function
        freshBoard();
    }, []);

    // Creating a board
    const freshBoard = () => {
        const newBoard = createBoard(row, col, bomb);
        setNonMineCount(row* col - bomb);
        setRemainFlagNum(bomb);
        setMineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }

    const restartGame = () => {
        freshBoard();
        setGameOver(false);
        setWin(false);
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        // Deep copy of a state
        let newGrid = JSON.parse(JSON.stringify(grid));
        let newFlagNum = remainFlagNum;
        if(newGrid[x][y].flagged !== true &&  newGrid[x][y].revealed !== true){
            newGrid[x][y].flagged = true;
            newFlagNum--;
        }
        else{
            newGrid[x][y].flagged = false;
            newFlagNum++;
        }
        setRemainFlagNum(newFlagNum);
        setGrid(newGrid);
    };

    // Reveal Cell
    const revealCell = (x, y) => {
        if(grid[x][y].revealed || gameOver) return;
        
        let newGrid = JSON.parse(JSON.stringify(grid));
        // Hit the mine!!
        if(newGrid[x][y].value === '💣'){
            for(let i = 0; i < mineLocations.length; i++){
                newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
            }
            setGrid(newGrid);
            setGameOver(true);
        } 
        // Reveal the number cell
        else{
            let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
            setGrid(newRevealedBoard.arr);
            setNonMineCount(newRevealedBoard.newNonMinesCount);
            if(newRevealedBoard.newNonMinesCount === 0 && remainFlagNum === 0){
                console.log("win")
                setGameOver(true);
                setWin(true);
            }
        }
    }

    return(
        <div className='boardWrapper'>
            <div className="board">
                <Dashboard remainFlagNum = {remainFlagNum} gameOver = {gameOver} col = {col}/>
                {/* {gameOver && win && <p>WIN</p>} */}
                {gameOver && <Modal restartGame = {restartGame} win= {win}/>}
                {
                    grid.map((singleRow, index1) => {
                        return (
                            <div style = {{display: "flex"}} key = {index1}>
                                {singleRow.map((singleBlock, index2) => {
                                    return (
                                        <Cell detail = {singleBlock} updateFlag = {updateFlag} revealCell = {revealCell} key = {index2}/>
                                    );
                                })}
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
    ); 

    

}

export default Board