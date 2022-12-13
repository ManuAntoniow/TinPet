
import { createStore, combineReducers } from "redux";

//REDUCER
import CategoryReducer from "./reducers/category.reducer";
import DodReducer from "./reducers/dogs.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  dogs: DodReducer,
});

export default createStore(RootReducer)