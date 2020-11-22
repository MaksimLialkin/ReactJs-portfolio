import dialogsReducer from "./dialogs-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
})

let store = createStore(reducers)

export default store;