import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profilesReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profilesReducer
})

let store = createStore(reducers);

export default store