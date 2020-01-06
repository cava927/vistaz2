import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';
import {createLayoutGrid} from '../../utils/utils'



const initialState = {
    page: null,
    isLoading:false,
    layout:null,
};

const setPageLayoutSuccess = (state, action) => {
    return updateObject( state, {
        page:action.page,
    });
}
const setPageLayoutRequest = state => {
    return updateObject( state, {
        isLoading: true       
    });
}
const setPageLayoutFailure = state => {
    return updateObject( state, {
        isLoading: false
    });
}

const setLayoutSuccess = (state, action) => {
    return updateObject( state, {
        layout:action.layout,
        layoutGrid: createLayoutGrid(action.layout),
        isLoading: false
    });
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {  
        case actionTypes.SET_PAGE_LAYOUT_REQUEST: return setPageLayoutRequest(state, action);
        case actionTypes.SET_PAGE_LAYOUT_SUCCESS: return setPageLayoutSuccess(state, action);
        case actionTypes.SET_PAGE_LAYOUT_FAILURE: return setPageLayoutFailure(state, action);
        case actionTypes.SET_LAYOUT_SUCCESS: return setLayoutSuccess(state, action);

        default:
            return state;
    }
};

export default reducer;