import { call, put} from 'redux-saga/effects';

import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';

import axios from 'axios';

function fetchApiTaluk() {

    return axios.get('http://localhost:3001/home').then(response => {
        console.log("talukkSaga", response.data);
        return response.data;
    })
        .catch(err => { console.log("errrrrrrr", err); throw err });


}

function* fetchTalukData() {
    try {
        const talukData = yield call(fetchApiTaluk);
        yield put({ type: GET_TALUK_DATA, payload: talukData });
    }
    catch {
        yield put({ type: FETCH_DATA_FAIL, error: ["Fetch data Fail"] });
    }
}


// function* talukDataSaga() {

//     yield takeEvery(GET_TALUK_VILLAGE_START, fetchTalukData);
    
//}



export default fetchTalukData;






