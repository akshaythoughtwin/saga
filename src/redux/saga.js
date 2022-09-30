import { fork, put, takeLatest } from "redux-saga/effects";
import { GET_API_REQUEST } from "./constants";
import { getAPISuccess } from "./actions";
import axios from "axios";
import { fireRef } from "../firebase/firebase";
import { set, onValue } from "firebase/database";

function* getAPI() {
  try {
    console.log("getApisaga function");
    const data = yield axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("in then");
        return res.data;
      })
      .catch((e) => console.log("get api promise reject", e));

    yield set(fireRef, data);

    function* names(snapshot) {
      console.log("in onvalue");

      const retrivedData = snapshot.val();

      console.log("retrivedData", retrivedData);

      yield put(getAPISuccess(retrivedData));
    }

    yield onValue(
      fireRef,
      (snapshot) => names(snapshot),
      (e) => console.log("yoyoy", e)
    );
  } catch (e) {
    console.log("create error", e);
  }
}

function* getAPISaga() {
  console.log("getApisaga");
  yield takeLatest(GET_API_REQUEST, getAPI);
}

export default function* rootSaga() {
  yield fork(getAPISaga);
}
