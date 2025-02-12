import { useRef, useState } from "react"
import "./MindGame.css";
export let MindGames = () => {
    const [points, setpoints] = useState(0)
    let [ranNumber, setranNumber] = useState("")
    let count = 0
    let intervelIdRef = useRef()
    let randomNumber = (min, max) => {
        if (count === 61) {
            clearInterval(intervelIdRef.current)
            alert("Game Finished")
            setpoints(0)
            setranNumber("")
            clearInterval(intervelIdRef.current)
        }
        count++
        let temp = Math.floor(Math.random() * (max - min + 1)) + min;
        setranNumber(`box-${temp}`)
    }
    let startButton = () => {
        intervelIdRef.current = setInterval(() => randomNumber(1, 9), 750)
    }
    let resetButton = () => {
        setpoints(0)
        setranNumber("")
        clearInterval(intervelIdRef.current)
    }
    let addPoints = (currentNumber) => {
        if (ranNumber === currentNumber) {
            setpoints(points + 5)
        } else {
            if (points === 0) setpoints(0)
            else setpoints(points - 2.5)
        }
    }
    return (
        <>
            <div className="gameBox ">
                <div>
                    <h2 className="text-center">Focus Game</h2>
                    <h3 className="text-center mt-3">Points :  {points}</h3>
                </div>
                <div className='outerBox mt-2'>
                    {Array(9).fill().map((_, index) => {
                        return (
                            < button key={index} className='flipBox' name={`box-${index + 1}`} onClick={() => addPoints(`box-${index + 1}`)}>{ranNumber === `box-${index + 1}` && <img width="48" height="48" src="https://img.icons8.com/color/48/half-orange.png" alt="half-orange" className="mx-3" />}</button>
                        )
                    })}
                </div >
                <div>
                    <button onClick={startButton} className="buttonStyle" >START</button>
                    <button onClick={resetButton} className="buttonStyle" >RESET</button>
                </div>
            </div>
        </>
    )
}