import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';


const initialState = {
    pageList: [],
    categoryList:[],
    brands:[],
    skuList:[]
};

const navListFunction = (state, action) => {
    return updateObject( state, {
        pageList:action.pageList,
    });
}
const categoryListFunction = (state, action) => {
    return updateObject( state, {
        categoryList:action.categoryList,
    });
}
const productListFunction = (state, action) => {
    return updateObject( state, {
        brands:action.brands,
    });
}
const skuListFunction = (state, action) => {
    return updateObject( state, {
        skuList:action.skuList,
    });
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {  
        case actionTypes.PAGE_LIST_SUCCESS: return navListFunction(state, action);
        case actionTypes.CATEGORY_LIST_SUCCESS: return categoryListFunction(state, action);
        case actionTypes.PRODUCT_LIST_SUCCESS: return productListFunction(state, action);
        case actionTypes.SKU_LIST_SUCCESS: return skuListFunction(state, action);
        default:
            return state;
    }
};

export default reducer;