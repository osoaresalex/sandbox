import createStore from "redux-zero";
import { runSaga, stdChannel } from "redux-saga";

const initialState = { count: 1 };
const store = createStore(initialState);
const actionsChannel = stdChannel();

const middleware = store => (next, args) => action => {
  console.log("current state", store.getState());
  console.log("action", action.name, ...args);

  actionsChannel.put(action);

  return next(action);
};


const dispatch = () => {};

function* saga() {}

runSaga({ getState: store.getState, dispatch, channel: actionsChannel }, saga);

export default store;
