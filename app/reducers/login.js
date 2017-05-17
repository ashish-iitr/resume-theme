import * as ActionTypes from '../actions/types';
const initialState = {
    formState: {
        username: '',
        password: ''
    },
    currentlySending: false,
    loggedIn: false,
    errorMessage: ''
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.LOG_IN}_FULFILLED`:
            return {
                ...state,
                formState: action.payload,
                loggedIn: 'loaded'
            };
        case `${ActionTypes.LOG_IN}_PENDING`:
            return {
                ...state,
                loggedIn: 'loading'
            };
        default:
            return state;
    }
};

export default login;
