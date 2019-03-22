import React from 'react';
import './Display.css';

const Display = (props) => {
    // set any varrables

    //show a differnt message depending on their score
    const judgeScore = () => {
        let score = props.score;

        if (score === null){
            return false;
        } else if (score < 20) {
            return <h3 style={{ color: 'red' }}>Needs work!</h3>
        } else if (score < 50) {
            return <h3 style={{ color: 'orange' }}>A decent start!</h3>
        } else if (score < 100) {
            return <h3 style={{ color: 'black' }}>Doing good!</h3>
        } else if (score < 200) {
            return <h3 style={{ color: 'green' }}>Great job!</h3>
        } else if (score >= 200) {
            return <h3 style={{ color: 'blue' }}>Github Elite!</h3>
        }
    }

    return (
        <div className="Display">
            <h1 className="scoreTitle">Your Score:</h1>
            <h1 className="score">{props.score}</h1>
            {judgeScore()}
        </div>
    )
}
export default Display