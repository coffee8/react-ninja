import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import profilesReducer from './profilesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profilesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;