import { GET_ALL_CONTENTS, GET_SINGLE_CONTENT } from '../actions/constants/actionTypes';

const initialState = {
  contents: [],
  content: {}
}

const contents = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTENTS:
      return {
        ...state ,
        contents: action.payload.data,
      };
    case GET_SINGLE_CONTENT:
      return {
        ...state,
        content: action.payload.data
      };
    default:
      return state;
  }
}

export default contents;