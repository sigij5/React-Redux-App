import React from 'react';
import { NavLink, Route } from 'react-router-dom'

import QuestionList from './components/QuestionList'
import { getQuestions } from './actions/triviaActions';
import { connect } from 'react-redux';
import './App.css';




const App = props => {

  const fetchQuestions = e => {
    props.getQuestions();
};


  return (
    <div className="App">
      <header className="App-header">
        <NavLink className='title' to='/'><h1>Trivia App</h1></NavLink>
      </header>
      <Route exact path='/'>
        <NavLink className='begin' to='/trivia' onClick={fetchQuestions}>Begin</NavLink>
      </Route>
      <Route exact path='/trivia'>
        <QuestionList />
      </Route>
    </div>
  );
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
)(App)

// export default App;