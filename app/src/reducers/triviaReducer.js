import { FETCH_QUESTIONS_START, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAIL } from '../actions/triviaActions'

export const initialState = {
    questions: [
        {
            category: 'Entertainment',
            correct_answer: '',
            difficulty: 'medium',
            incorrect_answers: [],
            question: '',
        }
    ],
    error: '',
    isFetching: false
};


export const triviaReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case FETCH_QUESTIONS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_QUESTIONS_FAIL:
            return {
                ...state,
                error: action.payload
            };    
        default:
                return state;
    }
}