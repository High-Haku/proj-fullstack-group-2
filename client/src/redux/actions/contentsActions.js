import { GET_ALL_CONTENTS } from './constants/contentsActionTypes';
import * as api from '../../api';

export const getAllContents = () => async (dispatch) => {
  try {
    const { data } = await api.getAllContents();
    // console.log(data)
    dispatch({ type: GET_ALL_CONTENTS, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}