import { SIGNIN } from "../actions/sing.action";

const initialState = {
  token: null,
  userId: null,
};

const SingInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state
  }
};

export default SingInReducer