import { call, put, takeLatest , takeEvery } from 'redux-saga/effects';

import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';

import axios from 'axios';

function fetchApiTaluk() {

    return axios.get('http://localhost:3001/home').then(response => {
        console.log("reacreacreac", response.data);
        return response.data;
    })
        .catch(err => { console.log("errrrrrrr", err); throw err });


}
function* fetchTalukVillageData() {
    try {
        const talukData = yield call(fetchApiTaluk);
        yield put({ type: GET_TALUK_DATA, payload: talukData });
    }
    catch {
        console.log("catch blockkkk")
        yield put({ type: FETCH_DATA_FAIL, error: ["Fetch data Fail"] });
    }
}
function* mysaga() {

    yield takeLatest(GET_TALUK_VILLAGE_START, fetchTalukVillageData)
}

export default mysaga;





