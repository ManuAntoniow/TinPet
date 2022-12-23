//REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//REDUCER
import CategoryReducer from "./reducers/category.reducer";
import DodReducer from "./reducers/dogs.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  dogs: DodReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))