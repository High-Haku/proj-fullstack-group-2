import { GET_SINGLE_SUPPORT } from "./constants/actionTypes";
import * as api from "../../api";

export const getSingleSupport = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleSupport(id);
    console.log(data, id);
    dispatch({ type: GET_SINGLE_SUPPORT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};