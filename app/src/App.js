import React from 'react';

import QuestionList from './components/QuestionList'
import { getQuestions } from './actions/triviaActions';
import { connect } from 'react-redux';
import './App.css';




const App = () => {



  return (
    <div className="App">
      <header className="App-header">
        <h1>Trivia Time</h1>
      </header>

      <QuestionList />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     state: state
//   };
// }

// export default connect(
//   mapStateToProps,
//   {getQuestions}
// )(App)


export default App;