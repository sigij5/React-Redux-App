import React, {useState} from 'react'
import { connect } from "react-redux";



export const Question = props => {

    const onSelect = e => {
        e.preventDefault();
        // console.log(e.target.checked)
        // e.target.checked = !e.target.checked
        if(e.target.label === 'incorrect') {
            console.log('incorrect answer')
        }
    }

    return (
    <div className='question'>
        <li>
            {props.question.question}
        </li>
        <form>
            {props.question.incorrect_answers.map(answer => (
                <label id='incorrect'>
                    <input type='radio' value='false' checked={false} onClick={onSelect}/>
                    {answer} |
                </label>
            ))}
            <label id='correct'>
                <input type='radio' value='true' checked={false} onClick={onSelect}/>
                {props.question.correct_answer}
            </label>
            {/* <button id='submit'>Submit</button> */}
        </form>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

export default connect(
    mapStateToProps,
    {}
)(Question)