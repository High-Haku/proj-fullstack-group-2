import { GET_SINGLE_SUPPORT } from "../actions/constants/actionTypes";

const initialState = {
  support: {}
}

const support = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_SUPPORT:
      console.log(action.payload);
      return {
        ...state,
        support: action.payload};
    default:
      return state;
  }
}

export default support;