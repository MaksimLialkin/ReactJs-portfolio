import dialogsReducer from "./dialogs-reducer";
import mainReducer from "./main-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    mainPage: mainReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store;
window.store = store;