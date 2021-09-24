// import createSagaMiddleware from "redux-saga";
// import { expose } from "comlink";

// import apiSaga from "../sagas/apiSaga";

// const ctx = window.self;

// const workerIO = {
//   subscribe: cb => {
//     const listener = ev => cb(ev.data);
//     ctx.addEventListener("message", listener);
//     return () => ctx.removeEventListener("message", listener);
//   },
//   dispatch: action => ctx.postMessage(action)
// };

// const sagaMiddleware = createSagaMiddleware();
// const run = () => sagaMiddleware.run(apiSaga);

// const exports = {
//   sagaMiddleware,
//   run
// };

// export default exports;

// expose(exports);
