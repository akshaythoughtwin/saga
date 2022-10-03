import { fork, put, takeLatest } from "redux-saga/effects";
import { SET_API_REQUEST, GET_API_REQUEST } from "./constants";
import axios from "axios";
import { fireRef } from "../firebase/firebase";
import { set, onValue, get } from "firebase/database";
import { getAPISuccess, setAPISuccess } from "./actions";

function* setAPI() {
  try {
    const data = yield axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("in then");
        return res.data;
      })
      .catch((e) => console.log("get api promise reject", e));

    yield set(fireRef, data);
  } catch (e) {
    console.log("create error", e);
  }
}

function* getAPI() {
  try {
    const data = yield new Promise((resolve) => onValue(fireRef, resolve));
    if (data.val() !== undefined) yield put(setAPISuccess(data.val()));
  } catch (error) {}
}

function* apiSaga() {
  console.log("getApisaga");
  yield takeLatest(SET_API_REQUEST, setAPI);
  yield takeLatest(GET_API_REQUEST, getAPI);
}

export default function* rootSaga() {
  yield fork(apiSaga);
}
