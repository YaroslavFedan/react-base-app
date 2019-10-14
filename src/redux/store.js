import {applyMiddleware, compose, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


//import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

let redusers = combineReducers({
    //rootReducer,
    form: formReducer,
});

const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(...middleware))
);


window.store = store;

export default store;