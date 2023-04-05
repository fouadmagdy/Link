import {
  SLIDER_LIST_REQUEST,
  SLIDER_LIST_SUCCESS,
  SLIDER_LIST_FAIL,
} from "../constants/sliderConstants";

export const slidersListReducer = (state = { sliders: [] }, action) => {
  switch (action.type) {
    case SLIDER_LIST_REQUEST:
      return { loading: true, sliders: [] };
    case SLIDER_LIST_SUCCESS:
      return { loading: false, sliders: action.payload };
    case SLIDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
