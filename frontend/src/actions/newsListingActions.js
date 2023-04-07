import axios from "axios";

import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
} from "../constants/newsListingConstants";

export const newsListCategory = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST });

    const { data } = await axios.get(
      "https://api.npoint.io/d275425a434e02acf2f7"
    );

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
