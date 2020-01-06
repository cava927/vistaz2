import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';


const initialState = {
    user: null,
};

const userSettings = (state, action) => {
    return updateObject( state, {
        user:action.user
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {  
        case actionTypes.SET_USER_SETTINGS: return userSettings(state, action);
        default:
            return state;
    }
};

export default reducer;