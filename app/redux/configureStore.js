/* create store for all reducer*/

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { UserDataReducer } from './reducers/UserData_Reducer';

//create store 
 const store = createStore(combineReducers({
    UserDataReducer: UserDataReducer
 }),applyMiddleware(thunk,apiMiddleware));


export default store;



