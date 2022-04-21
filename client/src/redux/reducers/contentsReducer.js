import { GET_ALL_CONTENTS, GET_SINGLE_CONTENT } from '../actions/constants/contentsActionTypes';

const contents = (contents = [], action) => {
  switch (action.type) {
    case GET_ALL_CONTENTS:
    case GET_SINGLE_CONTENT:
      return action.payload;
    default:
      return contents;
  }
}

export default contents;