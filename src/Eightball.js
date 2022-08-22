import React, {useState} from "react";
import answers from "./answers";
import "./Eightball.css"

const Eightball = (props) => {
    const getRandAnswer = () => answers[Math.floor(Math.random() * answers.length)];

    const [answer, setAnswer] = useState(getRandAnswer());
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);
    const [redCount, setRedCount] = useState(0);

    const reset = () => {
        setAnswer({color: 'black', msg: 'Think of a question'});
        setGreenCount(0);
        setGoldenrodCount(0);
        setRedCount(0);
    }

    const getAnswer = () => {
        setAnswer(getRandAnswer());
        if (answer.color === 'green') {
            setGreenCount(greenCount +1);
        }
        if (answer.color === 'red') {
            setRedCount(redCount +1);
        }
        if (answer.color === 'goldenrod') {
            setGoldenrodCount(goldenrodCount +1);
        }
    }

    return (
        <>
            <h1 className="title">Ask the Magic Eightball</h1>
            <h3 onClick={() => getAnswer()} style={{backgroundColor:answer.color}} className="eightball">{answer.msg}</h3>
            <div className="container">
                <ul><b>Color Counts</b>
                    <li>Green: {greenCount}</li>
                    <li>Goldenrod: {goldenrodCount}</li>
                    <li>Red: {redCount}</li>
                </ul>
            </div>

            <button onClick={() => reset()}>Reset</button>
        </>
    )
}

export default Eightball;
