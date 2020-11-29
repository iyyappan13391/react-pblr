import { call, put, takeLatest , takeEvery } from 'redux-saga/effects';

import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';

import axios from 'axios';

function fetchApiVillage(tname) {

    return axios.get('http://localhost:3001/home/getvillage').then(response => {
        console.log("villageSaga", response.data);
        return response.data;
    })
        .catch(err => { console.log("errrrrrrr", err); throw err });


}
function* fetchVillageData(action) {
    try {
        const VillageData = yield call(fetchApiVillage);
        yield put({ type: GET_VILLAGE_DATA, payload: VillageData });
    }
    catch {
        yield put({ type: FETCH_DATA_FAIL, error: ["Fetch data Fail"] });
    }
}

// function* VillageDataSaga() {

//     yield takeEvery(GET_TALUK_VILLAGE_START, fetchVillageData);
// }

export default fetchVillageData;