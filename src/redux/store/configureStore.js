import { createStore } from "redux";
import { devToolsEnhancer, devtoolsEnhancer } from "redux-devtools-extension";
import testReducer from "../sandbox/testReducer";

export function configureStore() {
  return createStore(testReducer, devToolsEnhancer());
}
