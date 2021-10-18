import React, { useEffect, useState } from "react";
import "../App.css"

export default function Modal({restartGame, win}){
    const [render, setRender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, []);

    return (
        <div className = "modal" 
            style = {{
                opacity: render ? 1 : 0,
                height: "100%",
                width: "70%",
                position: "absolute",
                background: "rgba(0, 0, 0, 0.5)",
                // border: "1px solid red"

            }}>
            <div className = "Modal_content">
                {win ? <div id = "gameOverImage">WIN</div> : <div id = "gameOverImage">Game Over</div>}
                {win ? <div className = "tryAgain" onClick = {() => restartGame()}>New Game</div> : <div className = "tryAgain" onClick = {() => restartGame()}>Try Again</div>}
                <div className = "tryAgain">Back to Home</div>
            </div>
        </div>

    );
}