import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { slidersListReducer } from "./reducers/sliderReducers";
import { categoriesListReducer } from "./reducers/categoryReducers";
import { newsListReducer } from "./reducers/newsListReducers";

const reducer = combineReducers({
  sliderList: slidersListReducer,
  categoryList: categoriesListReducer,
  newsList: newsListReducer,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
