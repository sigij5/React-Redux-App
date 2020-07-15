import axios from "axios";




export const FETCH_QUESTIONS_START = 'FETCH-QUESTIONS-START';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAIL = 'FETCH_QUESTIONS_FAIL';

export const getQuestions = () => dispatch => {
    dispatch({ type: FETCH_QUESTIONS_START});
    axios
        .get('https://opentdb.com/api.php?amount=10')
        .then(res =>
            dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data.results })
            )
        .catch(err => dispatch({ type: FETCH_QUESTIONS_FAIL, payload: err }));
};