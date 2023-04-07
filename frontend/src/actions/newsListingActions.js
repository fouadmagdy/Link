import axios from "axios";
import URLS from "../helpers/urls";
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
} from "../constants/newsListingConstants";

export const newsListCategory = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST });

    const { data } = await axios.get(URLS.newsListingBaseUrl);

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
