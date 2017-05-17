import * as ActionTypes from '../actions/types';

const catReducer = (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_CATS_SUCCESS:
            return action.cats;
        case ActionTypes.UPDATE_CAT_SUCCESS:
            return [
                ...state.filter(cat => cat.id !== action.cat.id),
                Object.assign({}, action.cat)
            ];
        default:
            return state;
    }
};

export default catReducer;
