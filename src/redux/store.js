import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// add middlewares to the list
const middleware = [sagaMiddleware];

const enhancers = composeWithDevTools(applyMiddleware(...middleware));

/**
 * CREATE STORE
 */
const store = createStore(rootReducer, {}, enhancers);

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
