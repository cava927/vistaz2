
import * as actionTypes from './actionTypes';
import {createContentMap} from '../../utils/utils';

export const setPageSettings = paramPage => {

    return dispatch => {   
        dispatch(request());
        let url = `http://localhost:1337/pages/${paramPage}`;
        fetch(url, {})
          .then(data => data.json())
          .then(page => {
            dispatch(success(page));
            dispatch(getLayout(page.layout.id));
         });
    }

    function request () {
        return {
            type: actionTypes.SET_PAGE_LAYOUT_REQUEST        
        };
    }

    function success (page) {
        return {
            type: actionTypes.SET_PAGE_LAYOUT_SUCCESS,
            page,
        };
    }

    function failure () {
        return {
            type: actionTypes.SET_PAGE_LAYOUT_FAILURE           
        };
    }
};


export const getLayout = (layoutId) => {
    return dispatch => {
        const urlsToReq = [];
        let urlLayout = 'http://localhost:1337/layouts/' + layoutId;
        urlsToReq.push(urlLayout);
        const fetchAllInfo = async (urls) => {
            const requests = urls.map((url) => {
              return fetch(url) // Async function that fetches the user info.
               .then((data) => {
                return data.json() // Returns the user info.
                })
            })
            return Promise.all(requests) // Waiting for all the requests to get resolved.
          }
        fetchAllInfo(urlsToReq)
        .then((dataComplete) => {
            const layout = dataComplete[0];
            dispatch(success(layout));
        }) 
      }   
    
    function success (layout) {
        return {
            type: actionTypes.SET_LAYOUT_SUCCESS,
            layout,
        };
    } 
}