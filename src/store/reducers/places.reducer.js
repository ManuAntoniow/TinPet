import { ADD_DOG } from "../actions/places.action";
import Place from "../../models/Place";

const initialState = {
  places: [],
};


const addDogReducer =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG:
      const newPlace = new Place(
        Date.now(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.lat,
        action.payload.lng,
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};

export default addDogReducer