import { GET_ALL_CONTENTS, GET_SINGLE_CONTENT } from './constants/contentsActionTypes';
import * as api from '../../api';

export const getAllContents = () => async (dispatch) => {
  try {
    const { data } = await api.getAllContents();

    dispatch({ type: GET_ALL_CONTENTS, payload: data })
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleContent = (id) => async (dispatch) => {
  try {
    const {data} = await api.getSingleContent(id);

    dispatch({type: GET_SINGLE_CONTENT, payload: data})
  } catch (error) {
    console.log(error.message);
  }
};