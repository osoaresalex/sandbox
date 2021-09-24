import md5 from "md5";
import axios from "axios";

import { put, takeEvery } from "redux-saga/effects";

const PUBLIC_API_KEY = "9d36c034769b21460603b0609345102d";
const PRIVATE_API_KEY = "17c508e5ef2d47c9e63b9d5ac2bf067afe3e7fcc";
const baseUrlAPI = "https://gateway.marvel.com/v1/public";

const timestamp = new Date().getTime();
const hash = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);
const authentication = {
  ts: timestamp,
  apikey: PUBLIC_API_KEY,
  hash: hash
};

interface ApiAction {
  [API_CALL: string]: {
    types: string[];
    endpoint: string;
    params?: {
      [key: string]: string;
    };
    key: string;
  };
}

function* apiCalls(action: ApiAction) {
  const {
    API_CALL: { types, endpoint, params, key }
  } = action;
  const [successType, failureType] = types;
  const url = baseUrlAPI + endpoint;

  const [error, result] = yield handle(
    axios.get(url, { params: { ...authentication, ...params } })
  );

  if (result) {
    const {
      data: { data }
    } = result;
    yield put({ type: successType, data, key });
  }
  if (error) {
    yield put({ type: failureType, message: error.message });
  }
}

const handle = promise =>
  promise.then((res: any) => [null, res]).catch((err: any) => [err, null]);

function* fetchSaga() {
  yield takeEvery((action: any) => action["API_CALL"], apiCalls);
}

export default fetchSaga;
