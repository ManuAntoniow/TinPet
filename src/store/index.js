//REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//REDUCER
import AuthReducer from "./reducers/auth.reducer";
import SingInReducer from "./reducers/sing.reducer";
import addDogReducer from "./reducers/places.reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  sing: SingInReducer,
  places: addDogReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))