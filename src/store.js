import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
//rootReducer give updates states
import rootReducer from './reducers';

//middleWare for compatibily with other extensions
const middleWare = [thunk]

const initialState = {};

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleWare)))

export default store;