import dialogsReducer from "./dialogs-reducer";
import mainReducer from "./main-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    mainPage: mainReducer
})

let store = createStore(reducers)

export default store;