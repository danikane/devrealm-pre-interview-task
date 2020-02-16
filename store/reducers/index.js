import { SET_PIN } from "../constants/action-types";

const initialState = {
  pin: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PIN:
      return { ...initialState, pin: action.payload };

    default:
      return state;
  }
}

export default rootReducer;
