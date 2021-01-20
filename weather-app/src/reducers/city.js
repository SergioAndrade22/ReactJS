import { SET_CITY } from './../actions';

export const cityReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return action.payload;
        default:
            break;
    }
    return state;
};