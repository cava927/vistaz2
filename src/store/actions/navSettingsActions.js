
import * as actionTypes from './actionTypes';

export const navSettings = () => {
    return dispatch => {   
        let url = `http://localhost:1337/pages`;
        fetch(url, {})
          .then(data => data.json())
          .then(pageList => {
            dispatch(success(pageList));
        });
    }

    function success (pageList) {
        return {
            type: actionTypes.PAGE_LIST_SUCCESS,
            pageList,
        };
    }
};

export const getCategoryList = () => {
    return dispatch => { 
        let url = `http://localhost:1337/categories`;
        fetch(url, {})
          .then(data => data.json())
          .then(categoryList => {
            dispatch(success(categoryList));
        });
    }
    function success (categoryList) {
        return {
            type: actionTypes.CATEGORY_LIST_SUCCESS,
            categoryList,
        };
    }
};

export const getProductList = () => {
    return dispatch => { 
        let url = `http://localhost:1337/brands`;
        fetch(url, {})
          .then(data => data.json())
          .then(data => {
            dispatch(success(data.brands));
        });
    }
    function success (brands) {
        return {
            type: actionTypes.PRODUCT_LIST_SUCCESS,
            brands,
        };
    }
};
export const getSkuList = (code) => {
    return dispatch => { 
        let url = `http://localhost:1337/brands?code=${code}`;
        fetch(url, {})
          .then(data => data.json())
          .then(data => {
            dispatch(success(data[0].skus));
        });
    }
    function success (skuList) {
        debugger
        return {
            type: actionTypes.SKU_LIST_SUCCESS,
            skuList,
        };
    }
};