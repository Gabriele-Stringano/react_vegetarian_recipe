import {createStore, applyMiddleware} from 'redux';

//Thunks allow us to write additional Redux-related logic separate from a UI layer.
//This logic can include side effects, such as async requests or generating random values,
//as well as logic that requires dispatching multiple actions or access to the Redux store state.
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

//rootReducer contains all reducers, reducers return the next state tree
import rootReducer from './reducers';

const middleWare = [thunk]

const initialState = {};

//createStore creates a Redux store that holds the complete state tree of the app
const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleWare)))

export default store;