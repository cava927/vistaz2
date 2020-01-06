import { combineReducers } from 'redux';
import user from './userSettingsReducer';
import page from './pageSettingsReducer';
import navList from './navReducer';




const rootReducer = combineReducers({ 
    userSettings: user,
    page:page,
    navList:navList,
});

export default rootReducer;