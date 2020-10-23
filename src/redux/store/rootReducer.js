import { combineReducers } from "redux";
import programReducer from "../../components/program/programReducer";

const rootReducer = combineReducers({
  program: programReducer,
});

export default rootReducer;
