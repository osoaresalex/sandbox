import { applyMiddleware, createStore, combineReducers } from "redux";

import apiSaga from "./sagas/apiSaga";
import { heroesReducer, singleHeroesReducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";

const rootReducer = combineReducers({
  heroes: heroesReducer,
  heroesDetails: singleHeroesReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(apiSaga);

export default store;
