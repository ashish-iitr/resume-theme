import * as ActionTypes from '../actions/types';
const initialState = {
    userData: {},
    isLoading: ''
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_USER}_FULFILLED`:
            return {
                ...state,
                userData: action.payload,
                isLoading: 'loaded'
            };
        case `${ActionTypes.FETCH_USER}_PENDING`:
            return {
                ...state,
                isLoading: 'loading'
            };
        default:
            return state;
    }
};

export default user;
