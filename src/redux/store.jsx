import { createStore, combineReducers, applyMiddleware } from "redux";
import userDataReducer from "./reducer/userDataReducer";
import authenticationReducer from "./reducer/authenticationReducer";
//this middleware is used for log of state in console
import logger from "redux-logger";
//this enable google extension(redux devTools) in browser
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  user: userDataReducer,
  auth: authenticationReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
