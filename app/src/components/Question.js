import React from 'react'
import { connect } from "react-redux";



export const Question = props => {

    // const onSelect = e => {
    //     e.target.checked = !e.target.checked;
    // }

    return (
    <div className='question'>
        <li>
            {props.question.question}
        </li>
        <form>
            {props.question.incorrect_answers.map(answer => (
                <label>
                    <input type='radio' value='false' checked={false}/>
                    {answer}
                </label>
            ))}
            <label>
                <input type='radio' value='true' checked={false} />
                {props.question.correct_answer}
            </label>
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