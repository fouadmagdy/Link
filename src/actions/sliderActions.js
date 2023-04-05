import axios from "axios";

import {
  SLIDER_LIST_REQUEST,
  SLIDER_LIST_SUCCESS,
  SLIDER_LIST_FAIL,
} from "../constants/sliderConstants";

export const listSLIDER = () => async (dispatch) => {
  try {
    dispatch({ type: SLIDER_LIST_REQUEST });

    const { data } = await axios.get("/SLIDERapi");

    dispatch({
      type: SLIDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SLIDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
