import { createStore, combineReducers, applyMiddleware } from "redux";
import userDataReducer from "./reducer/userDataReducer";
import authenticationReducer from "./reducer/authenticationReducer";
import mutualFundReducer from "./reducer/mutualFundReduer";
//this middleware is used for log of state in console
import logger from "redux-logger";
//this enable google extension(redux devTools) in browser
import { composeWithDevTools } from "redux-devtools-extension";
//this middleware is used for pass dispatch in async way need to create function
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  user: userDataReducer,
  auth: authenticationReducer,
  mutualFund: mutualFundReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
