import { GET_ALL_CONTENTS } from '../actions/constants/contentsActionTypes';

const contents = (contents = [], action) => {
  switch (action.type) {
    case GET_ALL_CONTENTS:
      return action.payload;
    default:
      return contents;
  }
}

export default contents;