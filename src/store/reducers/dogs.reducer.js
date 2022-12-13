import { DOGS } from "../../data/Dogs";
import { SELECTED_DOG, FILTERED_DOG } from "../actions/dogs.action";

const initialState = {
  Dogs: DOGS,
  filteredDog: [],
  selected: null,
};

const DogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_DOG:
      return {
        ...state,
        selected: state.Dogs.find((dog) => dog.id === action.dogID),
      };
    case FILTERED_DOG:
      return {
        ...state,
        filteredDog: state.Dogs.filter(
          (dog) => dog.category === action.categoryID
        ),
      };
    default:
      return state
  }
};

export default DogReducer