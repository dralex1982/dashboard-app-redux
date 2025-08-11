import { combineReducers } from "redux";
import { positioinReducer } from "./positions/position-reducer";
import { filterReducer } from "./filters/filter-reduser";

export const rootReducer = combineReducers({
  positions: positioinReducer,
  filters: filterReducer,
});
