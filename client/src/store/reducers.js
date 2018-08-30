import { combineReducers } from "redux";

import spotReducer from "./spot/spot.reducers";

export default combineReducers({
  spot: spotReducer
});
