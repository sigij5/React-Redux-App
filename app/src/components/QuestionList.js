import React from 'react'
import { connect } from 'react-redux'
import { Question } from './Question'
import { getQuestions } from '../actions/triviaActions'


const QuestionList = props => {

    const fetchQuestions = e => {
        e.preventDefault();
        props.getQuestions();
    };

    return (
        <div className='question-list'>
            <h4>Try Your Best:</h4>
            <button onClick={fetchQuestions}>Begin</button>

            {props.isFetching && <h4>Loading Trivia Questions</h4>}
            {props.error && <p className='error'>Error while fetching questions</p>}
            {props.questions.length ? (
            <ol>
                {props.questions.map(question => (
                    <Question question={question}/>
                ))}
            </ol>
            ) : (
                <p>Waiting for more Questions</p>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      questions: state.questions,
      isFetching: state.isFetching,
      error: state.error
    };
  }
  
  export default connect(
    mapStateToProps,
    { getQuestions }
  )(QuestionList)