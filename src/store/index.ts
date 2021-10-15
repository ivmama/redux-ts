import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer, todosReducer } from "./reducers/index";

const rootReducer = combineReducers({
  users: userReducer,
  todos: todosReducer,
});


export type RootState = ReturnType<typeof rootReducer>


export default createStore(rootReducer, applyMiddleware(thunk));
